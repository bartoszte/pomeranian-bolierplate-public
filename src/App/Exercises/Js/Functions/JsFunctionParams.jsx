// w react do komponentu mozna przekazac tylko jedna zmienna tzw.props
export const JsFunctionParams = (props) => {
  console.log('zawartosc props: ', props);
  console.log('zawartosc props klucz name: ', props.name);

  const sumFuncTemp = (a, b) => a + b;

  const sumFuncExtended = (n, l1, l2, l3, ...rest) => {
    console.log('zawartosc samego rest: ', rest);
    return n * (l1 + l2 + l3);
  };

  const sumFuncExtended2 = (n, ...rest) => {
    const internalSum = rest.reduce((prev, curr) => prev + curr, 0);
    return n * internalSum;
  };

  //   domyslne wartosci zmiennych w funkcji
  const defaultValueFunc = (mnoznik, liczba = 14) => mnoznik * liczba;
  console.log(
    'wynik wykonania funkcji defaultValueFunc: ',
    defaultValueFunc(1)
  );

  //   uzycie obiektu arguments
  function argumentsFunc(value1, value2) {
    console.log('zwracammmm: ', arguments[0] * arguments[1]);
  }
  argumentsFunc(4, 10);

  return (
    <div>
      <h3>Parametry funkcji - zawartosc komponentu</h3>
      <p>Wywolanie funkcji z parametrami {sumFuncTemp(1, 2)}</p>
      <p>Wywolanie funkcji za duzo parametrow {sumFuncTemp(1, 2, 3)}</p>
      <p>Wywolanie funkcji za malo parametrow {sumFuncTemp(1)}</p>
      <p>Wywolanie funkcji extended {sumFuncExtended(3, 1, 1, 1)}</p>
      <p>Wywolanie funkcji extended {sumFuncExtended(3, 1, 1, 1, 5, 5)}</p>
      <p>Wywolanie funkcji extended2 {sumFuncExtended2(2, 1, 1)}</p>
    </div>
  );
};
