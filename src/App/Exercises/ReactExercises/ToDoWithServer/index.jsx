import { useEffect, useState } from 'react';
import './style.css';
import { NewNoteForm } from './NewNoteForm/NewNoteForm';
import { ToDoNote } from './ToDoNote';
import { DialogBox } from './DialogBox';

const API_URL = 'http://localhost:3333/api/todo';

const TEXTS = {
  LOADER: 'wczytywanie danych....',
  ERROR: 'Przepraszamy. Nie udało się pobrać listy zadań.',
};

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [postToDoError, setPostToDoError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteErrorId, setDeleteErrorId] = useState(null);
  const [markAsDoneErrorId, setMarkAsDoneErrorId] = useState(null);
  const [markAsDoneloading, setmarkAsDoneloading] = useState(false);

  //   --------------------------------------------------------------------------------------------
  const [displayNewNoteForm, setDisplayNewNoteForm] = useState(false);
  //   const [newNoteData, setNewNoteData] = useState([]);
  const [newNoteData, setNewNoteData] = useState({});

  //   funkcja pobierajaca dane z servera
  const getTodos = async () => {
    setLoading(true);
    setError(false);
    try {
      const request = await fetch(API_URL);
      if (!request.ok) {
        throw new Error('Error from API');
      }
      const data = await request.json();

      setData(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  //   funkcja wysylajaca dane do servera
  const postTodos = async () => {
    // console.log(newNoteData);

    // setLoading(true);
    setPostToDoError(false);
    try {
      const request = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(newNoteData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!request.ok) {
        throw new Error('Error from API during put new note');
      }
      console.log('dodano nowy wpis sukces');
      setData((prevState) => [...prevState, newNoteData]);
      setDisplayNewNoteForm(false);
    } catch {
      setPostToDoError(true);
    } finally {
      // setLoading(false);
    }
  };

  const deleteTodos = async (idNum) => {
    setDeleteLoading(true);
    try {
      const request = await fetch(`${API_URL}/${idNum}`, {
        method: 'DELETE',
      });
      if (!request.ok) {
        throw new Error('Error from API');
      }

      setData((prevState) => prevState.filter((todo) => todo.id !== idNum));
    } catch (e) {
      setDeleteErrorId(idNum);
    } finally {
      setDeleteLoading(false);
    }
  };

  const markAsDoneTodos = async (idNum) => {
    setmarkAsDoneloading(true);
    try {
      setMarkAsDoneErrorId(null);
      const request = await fetch(`${API_URL}/${idNum}/markAsDone`, {
        method: 'PUT',
      });
      if (!request.ok) {
        throw new Error('Error from API during put markAsDone');
      }
      const data = await request.json();
      // console.log(data.doneDate);
      setData((prevState) =>
        prevState.map((todo) => {
          if (todo.id === idNum) {
            // todo.isDone = true;
            // todo.doneDate = data.doneDate;
            return data;
          }
          return todo;
        })
      );
    } catch (e) {
      setMarkAsDoneErrorId(idNum);
    } finally {
      setmarkAsDoneloading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleAddNewNoteForm = () => {
    setDisplayNewNoteForm((prev) => !prev);
  };

  useEffect(() => {
    if (!newNoteData.title || !newNoteData.author || !newNoteData.note) {
      console.log('pusto, nic nie wysylam');
      console.log(newNoteData.title, newNoteData.author, newNoteData.content);
      return;
    }
    postTodos();
  }, [newNoteData]);

  if (loading) {
    return <div>{TEXTS.LOADER}</div>;
  }

  if (error) {
    return (
      <div className="container--todo">
        <DialogBox text={TEXTS.ERROR} buttonFunction={getTodos} />
      </div>
    );
  }

  return (
    <div className="container--todo">
      TODO
      <p>
        Tutaj znajdziesz listę swoich zadań
        <button onClick={handleAddNewNoteForm}>+</button>
      </p>
      {displayNewNoteForm && (
        <NewNoteForm
          setNewNoteData={setNewNoteData}
          error={postToDoError}
          setDisplayNewNoteForm={setDisplayNewNoteForm}
        />
      )}
      {/* wyswietla dane */}
      {/* <p>newNoteData test</p> */}
      {/* tutaj psulo wszysytko bo HTML nie umie wyswieltlic calego obiektu!!! */}
      {/* {newNoteData.length > 0 && newNoteData[0].author} */}
      {!displayNewNoteForm &&
        data.length > 0 &&
        data.map((todo) => {
          return (
            <ToDoNote
              key={todo.id}
              todo={todo}
              deleteFunction={deleteTodos}
              deleteErrorId={deleteErrorId}
              markAsDoneTodos={markAsDoneTodos}
              markAsDoneErrorId={markAsDoneErrorId}
            />
          );
        })}
      {/* wyswietl blad jezeli wystapil */}
      {/* {error && <div>{error}</div>} */}
      {/* {error && <DialogBox text={TEXTS.ERROR} functionClick={getTodos} />} */}
    </div>
  );
};
