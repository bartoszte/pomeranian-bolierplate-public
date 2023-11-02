import './style.css';
import { useState } from 'react';

export const Practice = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [inputText, setInputText] = useState('blank');
  const [user, setUser] = useState({
    name: 'Bartosz',
    surname: 'Tarsky',
    email: 'bartosz@email.com',
    images: ['profile.png', 'random.jpg'],
  });

  const increaseNumber = (val) => {
    setNumber(number + val);
    return number;
  };

  const increaseNumber2 = () => {
    setNumber2(number2 + 1);
  };

  // gdy aktualizujesz stan to najlpiej stosowac podejscie funkcyjne do odwolywania sie do poprzedniej wartosci
  const asyncIncreaseNumber2 = () => {
    setTimeout(() => {
      setNumber2((prevNumb) => prevNumb + 1);
    }, 2500);
  };

  const changeUserName = () => {
    setUser((prevObj) => ({ ...prevObj, name: inputText }));
  };

  const changePropertyGeneric = (ev) => {
    setUser((prevObj) => ({ ...prevObj, [ev.target.name]: ev.target.value }));
  };

  console.log(user);

  return (
    <div>
      <h2>practice page</h2>
      <button onClick={() => increaseNumber(2)}>increase number</button>
      <h4>{number}</h4>

      <button onClick={increaseNumber2}>increase number2</button>
      <button onClick={asyncIncreaseNumber2}>Async increase number2</button>
      <h4>{number2}</h4>

      <div className="container--user-object">
        <h3>User object:</h3>
        <div>User name: {user.name}</div>
        <div>User surname: {user.surname}</div>
        <div>User email: {user.email}</div>
        <div>User image: {user.images[0]}</div>
        <input
          className="margin-top"
          placeholder="enter new name here..."
          onChange={(ev) => setInputText(ev.target.value)}
        />
        <button onClick={changeUserName}>change user name!</button>
        <div>{inputText}</div>
        <input
          name="surname"
          placeholder="enter your surname here..."
          onChange={changePropertyGeneric}
        />
        <input
          name="email"
          placeholder="enter email address here..."
          onChange={changePropertyGeneric}
        />
      </div>
    </div>
  );
};
