import { useState } from 'react';
import { Button } from '../Button';
import './style.css';

export const NewNoteForm = ({
  setNewNoteData,
  error,
  setDisplayNewNoteForm,
}) => {
  const [newNoteDataTemp, setNewNoteDataTemp] = useState({});

  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [content, setContent] = useState(null);

  const changePropertyGeneric = (ev) => {
    setNewNoteDataTemp((prevObj) => ({
      ...prevObj,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleAddNewNoteData = () => {
    console.log('kliknieto dodaj');
    setNewNoteData(newNoteDataTemp);
  };

  return (
    <div className="container--newNoteForm">
      <p>Dodawanie zadania.</p>
      <div>Tytuł</div>
      <input
        name="title"
        placeholder="Kupic parasol na balkon"
        onChange={changePropertyGeneric}
      />
      <div>Autor</div>
      <input
        name="author"
        placeholder="Wojtek"
        onChange={changePropertyGeneric}
      />
      <div>Treść</div>
      <input
        name="note"
        placeholder="Zmierzyć ile mamy miejsca..."
        onChange={changePropertyGeneric}
      />
      {error && <div>Wystąpił błąd! Spróbuj ponownie</div>}
      <div className="buttons">
        <Button
          value="COFNIJ"
          onClickFunc={() => setDisplayNewNoteForm(false)}
        />
        <Button
          value="DODAJ"
          variant="tertiary"
          onClickFunc={handleAddNewNoteData}
        />
      </div>
    </div>
  );
};
