import { getAuth, signOut } from 'firebase/auth';
export const logOut = () => {
  console.log('wyloguj aktualnego użytkownika');

  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log('błąd podczas próby wylogowania', error);
    });
};
