export const PromisesMethodsTraning = () => {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  const array1 = [fetchDataFast(), fetchDataLong()];
  const array2 = [fetchDataFast(), fetchDataLong(), fetchDataError()];

  const handlerB1 = () => {
    const promisses_all = [fetchDataFast(), fetchDataLong()];

    const allPromises = Promise.all(promisses_all);

    allPromises
      .then(() => {
        console.log('all promises resolved');
      })
      .catch(() => {
        console.log('one of promises rejected');
      });
  };

  const handlerB2 = () => {
    const promisses_all = [fetchDataFast(), fetchDataLong(), fetchDataError()];

    const allPromises = Promise.all(promisses_all);

    allPromises
      .then(() => {
        console.log('all promises resolved');
      })
      .catch((err) => {
        console.log('one of promises rejected');
        console.log(err, 'outcome of rejected promise');
      });
  };

  const handlerB3 = () => {
    const promisses_allSettled = [fetchDataFast(), fetchDataLong()];

    const allPromises = Promise.allSettled(promisses_allSettled);

    allPromises
      .then(() => {
        console.log('all promises executed');
      })
      .catch(() => {
        console.log('one of promises rejected');
      });
  };

  const handlerB4 = () => {
    const promisses_allSettled = [
      fetchDataFast(),
      fetchDataLong(),
      fetchDataError(),
    ];

    const allPromises = Promise.allSettled(promisses_allSettled);

    allPromises
      .then(() => {
        console.log('all promises executed');
      })
      .catch((err) => {
        console.log('one of promises rejected');
        console.log(err, 'outcome of rejected promise');
      });
  };

  const handlerB5 = () => {
    const promisses_any = [fetchDataFast(), fetchDataLong()];

    const allPromises = Promise.any(promisses_any);

    allPromises
      .then((data) => {
        console.log('one of promises resolved');
        console.log(data, 'outcome of first promise resolved');
      })
      .catch(() => {
        console.log('one of promises rejected');
      });
  };

  const handlerB6 = () => {
    const promisses_any = [fetchDataFast(), fetchDataLong(), fetchDataError()];

    const allPromises = Promise.any(promisses_any);

    allPromises
      .then((data) => {
        console.log('one of promises resolved');
        console.log(data, 'outcome of first promise resolved');
      })
      .catch((err) => {
        console.log('one of promises rejected');
        console.log(err, 'outcome of rejected promise');
      });
  };

  const handlerB7 = () => {
    const promisses_race = [fetchDataFast(), fetchDataLong()];

    const allPromises = Promise.race(promisses_race);

    allPromises
      .then((data) => {
        console.log('one of promises executed');
        console.log(data, 'outcome of first promise executed');
      })
      .catch(() => {
        console.log('one of promises rejected');
      });
  };

  const handlerB8 = () => {
    const promisses_race = [fetchDataFast(), fetchDataLong(), fetchDataError()];

    const allPromises = Promise.race(promisses_race);
    console.log(allPromises);

    allPromises
      .then((data) => {
        console.log('one of promises executed');
        console.log(data, 'outcome of first promise executed');
      })
      .catch((err) => {
        console.log('one of promises rejected');
        console.log(err, 'outcome of rejected promise');
      });
  };

  const genericHandler = (func, array) => {
    const promiseFunc = () => {
      switch (func) {
        case 'race':
          return Promise.race(array);
        case 'any':
          return Promise.race(array);
        case 'allSettled':
          return Promise.allSettled(array);
        case 'all':
          return Promise.all(array);
        default:
          return 'niepoprawna funkcja';
      }
    };

    if (promiseFunc() === 'niepoprawna funkcja') {
      console.log(promiseFunc());
    } else {
      const allPromises = promiseFunc();
      console.log(allPromises);
      allPromises
        .then((data) => {
          console.log('one of promises executed');
          console.log(data, 'outcome of first promise executed');
        })
        .catch((err) => {
          console.log('one of promises rejected');
          console.log(err, 'outcome of rejected promise');
        });
    }
  };

  return (
    <div>
      <h3>Promises Methods Training</h3>
      <div>
        <p> content</p>
        <button onClick={handlerB1}>button 1</button>
        <button onClick={handlerB2}>button 2</button>
        <button onClick={handlerB3}>button 3</button>
        <button onClick={handlerB4}>button 4</button>
        <button onClick={handlerB5}>button 5 any</button>
        <button onClick={handlerB6}>button 6 any</button>
        <button onClick={handlerB7}>button 7 race</button>
        <button onClick={handlerB8}>button 8 race</button>
        <button onClick={() => genericHandler('rae', array1)}>
          button generic test
        </button>
        <button onClick={() => genericHandler('race', array2)}>
          button generic test
        </button>
      </div>
    </div>
  );
};
