import { PromiseHandling } from './PromiseHandling';

export const PromisesAndMe = () => {
  const simplePromise = new Promise((resolve, reject) => {
    // Tutaj umieszcza sie kod ktory moze wykonac sie asynchronicznie
    // Jesli operacaja zakonczy sie sukcesem -> wywolujemy resolve (spelnij obietnice)
    // ----------------------------------------------------------------------------------
    // Jesli operacaja zakonczy sie błędem/porażką -> wywolujemy reject (odrzuc obietnice)
    //
    console.log('Promise started');

    const success = false;

    if (success) {
      resolve('Promise resolved');
    } else {
      reject('Promise rejected');
    }
  });

  // Stany promisow
  // ----------------------------------------------------------------------------------
  // 1. Pending - oczekujący - początkowy stan gdy promisy jest tworzony, ale jeszcze nie zostały
  //                           odrzucony ani spełniony
  // 2. Fullfilled - spełniony - stan w którym promis został spełniony (wywołano resolve)
  // 3. Rejected - odrzucony - stan w którym promis został odrzucony (wywołano reject)

  // jednolinijkowe - haki - nie na teraz, raczej dla backendu przydatne
  //   const successPromise = Promise.resolve('Promise resolved');
  //   const errorPromise = Promise.reject('Promise resolved');

  //   console.log('successPromise', successPromise);
  //   console.log('errorPromise', errorPromise);

  console.log('Promise created', simplePromise);
  return (
    <div>
      <h2>Promises</h2>
      <div>cos</div>
      <PromiseHandling />
    </div>
  );
};
