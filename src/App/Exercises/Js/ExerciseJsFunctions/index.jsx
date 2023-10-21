export const ExerciseJsFunctions = () => {
  const sortImmune = (array) => {
    // utworzenie nowej tablicy result zawierajacej wszystkie elementy tablicy array
    const result = [...array];
    return result.sort((a, b) => a - b);
  };

  const originalArr = [1, 3, 2];
  const sortedArr = sortImmune(originalArr);
  console.log({
    originalArr, // [1, 3, 2]
    sortedArr, // [1, 2, 3]
  });

  console.log('//////////////////////////////////////////////////////');
  let originalObj = { rec1: 'bart', rec2: 'Jon', rec3: 'tim2' };
  const capitalFunc = (tmpObject) => {
    for (const entry in tmpObject) {
      // console.log(tmpObject[entry][0].toUpperCase());
      const arr = tmpObject[entry].split('');
      arr[0] = arr[0].toUpperCase();
      // console.log(arr);
      // console.log(arr.join(''), 'jak dziala join');
      tmpObject[entry] = arr.join('');
      //  tmpObject[entry][0].toUpperCase();
      // tmpObject[entry][0] = tmpObject[entry][0].toUpperCase();
    }
  };

  const capitilizeSzym = (obj) => {
    const newObj = {};
    for (const key in obj) {
      newObj[key[0].toUpperCase() + key.slice(1)] = obj[key];
    }
    return newObj;
  };

  const capitilizeSzym2 = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key.charAt(0).toUpperCase() + key.slice(1),
        value,
      ])
    );
  };

  console.log(originalObj, 'przed zmiana');
  capitalFunc(originalObj);
  console.log(originalObj, 'po zmianie');
  console.log(capitilizeSzym(originalObj), 'po zmianie szymon');

  // ZADANIE:

  const calcAvr = (arr) => {
    return arr.map(({ id, name, grades }) => {
      const avr = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

      return {
        id,

        name,

        avr: avr,
      };
    });
  };

  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },

    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  ];

  const tablicaWynikowa = calcAvr(tablicaPierwotna);

  console.log(tablicaPierwotna, 'tablicaPierwotna');

  console.log(tablicaWynikowa, 'tablicaWynikowa');

  // tablicaWynikowa -> [

  //    {id: 0, name: "Eve", avr: 3.14},

  //    {id: 1, name: "Eve2", avr: 3.14},

  // ]

  // petla for of
  // do tablic
  // służy do iteracji przez elementy tablicy bez potrzeby śledzenia indeksu
  // for (const number of sampleNumbersArray) {
  //   console.log(number, 'uzycie petli for of');
  // }

  // zadanie ciag fibonacciego
  const fibonacci = (number) => {
    if (number === 0) {
      return 0;
    } else if (number === 1) {
      return 1;
    } else if (number < 0) {
      return 'Błąd - musi byc liczba naturalna';
    } else {
      return fibonacci(number - 1) + fibonacci(number - 2);
    }
  };

  console.log(fibonacci(12), 'fiboooonacciiii');

  ///////////////////////////////////////////////
  // zadanie suma dowlonej ilosci liczb i sprawdzanie czy to liczba
  ///////////////////////////////////////////////

  const sumOfParam = (...rest) => {
    let endFunc = false;
    for (const element of rest) {
      if (isNaN(element)) {
        endFunc = true;
        break;
      }
    }
    if (endFunc) return 'blad!';
    const internalSum = rest.reduce((prev, curr) => prev + curr, 0);
    return internalSum;
  };

  console.log(sumOfParam(1, 2, 'z', 5, 5, 6), 'suma wyliczona');

  // ZADANIE wersja szymona

  const sumOfParamsSzym = (...args) => {
    return args.reduce((acc, curr) => {
      if (typeof acc !== 'number') return 'Złe wejście';

      return acc + curr;
    }, 0);
  };

  console.log(sumOfParamsSzym(10, 1, 1, '15', 23), 'sumOfParams(10)');

  ///////////////////////////////////////////////
  // zadanie
  ///////////////////////////////////////////////

  const outerFunction = (param) => {
    return () => {
      return (str) => {
        return param + str;
      };
    };
  };

  console.log(outerFunction('Hello')()('World'), 'outerFunction(10)');

  ///////////////////////////////////////////////
  // zadanie a'la kalkulator wersja brzydka
  ///////////////////////////////////////////////
  const operatorFunction = (string, num1, num2) => {
    if (isNaN(num1)) return 'złe wejscie';
    if (isNaN(num2)) return 'złe wejscie';
    if (string === '+') return num1 + num2;
    if (string === '-') return num1 - num2;
    if (string === '/') return num1 / num2;
    if (string === '*') {
      return num1 * num2;
    } else return 'zły znak';
  };

  const calculateWithChar = (operatorChar) => {
    return (numb1, numb2) => {
      return operatorFunction(operatorChar, numb1, numb2);
    };
  };

  ///////////////////////////////////////////////
  // zadanie a'la kalkulator wersja elegancka ze switch
  ///////////////////////////////////////////////
  const calculateWithCharSzym = (operator) => {
    return (val1, val2) => {
      if (typeof val1 !== 'number' || typeof val2 !== 'number')
        return 'Złe wejście';

      switch (operator) {
        case '+':
          return val1 + val2;
        case '-':
          return val1 - val2;
        case '/':
          return val1 / val2;
        case '*':
          return val1 * val2;
        case '%':
          return val1 % val2;
        default:
          return 'Zły znak';
      }
    };
  };

  console.log(calculateWithChar('*')(1, 7), 'wersja brzydka');
  console.log(calculateWithCharSzym('*')(1, 7), 'wersja ladna');

  return (
    <div>
      <h1>ExerciseJsFunctions</h1>
      <h2>Ćw sortImmute</h2>
      <p>
        napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i
        zwraca ją posortowana funkcja ma nie zmieniać pierwotnej tablicy
      </p>
    </div>
  );
};
