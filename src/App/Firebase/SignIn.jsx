import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = async (login, password) => {
  const auth = getAuth();
  // console.log(1);
  // signInWithEmailAndPassword(auth, login, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log('login succesfull', user);
  //   })
  //   .catch((error) => {
  //     console.log(2);

  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log('login failed', errorMessage);
  //   });
  // console.log(3);

  return signInWithEmailAndPassword(auth, login, password);
};
