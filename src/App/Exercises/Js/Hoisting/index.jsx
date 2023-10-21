export const Hoisting = () => {
  const wynik = 100;

  //   zmienna wewnatrz funkcji to jest inna zmienna niz poza nia
  const additionFunc = (a) => {
    let wynik = 0;
    if (a > 10) {
      wynik = a + 3;
    } else {
      wynik = a + 2;
    }
    return wynik;
  };
  const wynikFunkcji = additionFunc(20);
  console.log('wyniki ', wynik, wynikFunkcji);

  // currying
  const sum = (a, b) => a + b;
  const addMore = (a) => {
    const addEvenMore = (b) => {
      return a + b;
    };
    return addEvenMore;
  };

  console.log('currying', addMore(5)(6), sum(5, 6));

  const logger = (name) => (message) => console.log(name, message);
  const loggHosting = logger('To jest log z komponentu Hoisting');
  loggHosting('Hello');
  loggHosting('ABCD');
  loggHosting('Bey');

  // zadanie dodaj liczby od 1 do X
  // value = 2; [0, 0] .map [1, 2]
  const addFrom1ToValue = (value) =>
    new Array(value)
      .fill(0)
      .map((val, index) => index + 1)
      .reduce((prev, current) => prev + current, 0);
  console.log('addFrom1ToValue', addFrom1ToValue(100));

  //   rekurencja
  const addFrom1ToValueReccurence = (value, result = 0) => {
    // np. suma od 1 do 5 to jest to samo co suma od 1 do 4 plus wartosc 5
    if (value === 1) {
      return result + value;
    } else {
      return addFrom1ToValueReccurence(value - 1, result + value);
    }
  };
  console.log('wynik funkcji rekurencyjnej ', addFrom1ToValueReccurence(100));

  return (
    <div>
      <h1>Hoisting w JS</h1>
      <h2>Zasieg zmiennych</h2>
    </div>
  );
};
