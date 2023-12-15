import { useState } from 'react';

const tmpUsersArray = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Matt Cold' },
  { id: 3, name: 'Grace Mallory' },
  { id: 4, name: 'William Butcher' },
];

const getRandomUser = (array) => {
  const arrId = Math.floor(Math.random() * 4);
  return array[arrId];
};

const loadUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getRandomUser(tmpUsersArray));
    }, 2000);
  });
};

const loadUserDetails = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve({ id: userId, age: 30, country: 'Poland' });
      } else {
        reject(`błądserver: nieudane wyszukiwanie dla userId: ${userId}`);
      }
    }, 2000);
  });
};

export const SimulateApi = () => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [errorText, setErrorText] = useState(null);

  const loadAllUserData = () => {
    setUser(null);
    setUserDetails(null);
    setErrorText(null);

    loadUser()
      .then((userData) => {
        setUser(userData);
        return loadUserDetails(userData.id);
      })
      .then((userDetails) => {
        setUserDetails(userDetails);
      })
      .catch((err) => {
        console.log(err, '<-- komunikat z reject');
        setErrorText(err);
      });
  };

  const handleLoadData = () => loadAllUserData();

  return (
    <div>
      <h2>Zadanie symulacja API</h2>
      <button onClick={handleLoadData}>Załaduj detale użytkownika</button>
      {user && userDetails && (
        <div>
          <div>{userDetails.id}</div>
          <div>{user.name}</div>
          <div>{userDetails.age}</div>
          <div>{userDetails.country}</div>
        </div>
      )}
      {errorText && <div>Aktualny błąd to: {errorText}</div>}
    </div>
  );
};
