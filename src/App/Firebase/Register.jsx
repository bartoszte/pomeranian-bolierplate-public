import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const register = async (login, password) => {
  const auth = getAuth();
  // createUserWithEmailAndPassword(auth, login, password)
  //   .then((userCredential) => {
  //     // Signed up
  //     const user = userCredential.user;
  //     console.log('register succesfull', user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log('register failed', errorMessage);

  //     // ..
  //   });

  return createUserWithEmailAndPassword(auth, login, password);
};
