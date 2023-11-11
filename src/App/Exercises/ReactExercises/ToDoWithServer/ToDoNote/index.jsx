import './style.css';
import trashLogo from '../../../../Images/trash.svg';
import checkedLogo from '../../../../Images/check.svg';
import markAsDoneLogo from '../../../../Images/Frame 3375.svg';
export const ToDoNote = ({
  todo,
  deleteFunction,
  deleteErrorId,
  markAsDoneTodos,
  markAsDoneErrorId,
}) => {
  return (
    // <ul>
    //   <li key={todo.id}>
    //     <div>{todo.title}</div>
    //     <div>{todo.author}</div>
    //     <div>{todo.note}</div>
    //   </li>
    // </ul>
    <div className="entry">
      <div className="note">
        <div className="title">{todo.title}</div>
        <div className="author">
          <div>{todo.author}</div>
          <div>{todo.createdAt}</div>
        </div>
        <div className="text">{todo.note}</div>
      </div>
      <div className="controls">
        <div className="upper">
          <div>
            {todo.isDone ? (
              ''
            ) : (
              <button onClick={() => markAsDoneTodos(todo.id)}>
                <img
                  src={markAsDoneLogo}
                  width="26"
                  height="26"
                  alt="markAsDone Logo"
                />
              </button>
            )}
          </div>
          <div>
            <button onClick={() => deleteFunction(todo.id)}>
              <img src={trashLogo} width="26" height="26" alt="trash Logo" />
            </button>
          </div>
        </div>

        <div className="lower">
          <div>
            {markAsDoneErrorId === todo.id ? (
              <div>oznaczanie nieudane</div>
            ) : (
              ''
            )}
          </div>
          <div>
            {deleteErrorId === todo.id ? <div>nie udało się usunąć</div> : ''}
          </div>
          <div>
            {todo.isDone ? (
              <div className="alignRight">
                <img
                  src={checkedLogo}
                  width="26"
                  height="26"
                  alt="checked Logo"
                />
                <div className="date">{todo.doneDate}</div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
