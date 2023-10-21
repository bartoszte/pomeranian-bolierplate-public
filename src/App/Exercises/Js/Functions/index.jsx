import { useState } from 'react';
import { JsFunctionParams } from './JsFunctionParams';

export function JsFunctionsBasics() {
  function multipleNumbers(a, b) {
    return a * b;
  }

  const multipleNumbersArrow = (a, b) => {
    return a * b;
  };

  //
  //////////////// Ponizej jawne wywolanie funkcji a zaraz potem funckja anonimowa
  //
  // function modifyElement(number) {
  //   return number * 3;
  // }
  // const tablica = [1, 2].map(modifyElement);
  const tablica = [1, 2].map(function (number) {
    return number * 3;
  });

  const tablica2 = [1, 2, 3].map((number) => {
    return number * 4;
  });

  const tablica3 = [1, 2, 3, 4].map((number) => number * 5);

  console.log(tablica, 'tablica nr 1');
  console.log(tablica2, 'tablica nr 2');
  console.log(tablica3, 'tablica nr 3');

  // definicja najprostszej funkcji
  const easyFunction = () => {};
  console.log(easyFunction(), 'najprostsza funkcja');

  // zapis do zwrocenia obiektu za pomoca funkcji strzalkowej
  const returnObjectFunction = () => ({ name: 'Bartosz' });
  console.log(returnObjectFunction(), 'co zwraca returnObjectFunction');

  function externalFunc() {
    function internalFunc() {
      console.log('to jest wewnetrzna funkcja');
    }
    return internalFunc;
  }

  const tmp = externalFunc();
  tmp();
  console.log(tmp);

  const nameTmpVar = 'Piotr';
  const lastNameTmpVar = 'Nowak';

  //////////////////////////////////////////////////////////////////////////////////
  // return glownej funkcji
  //////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      Funkcje podstawy powtórka
      <ul>
        <li>Named function, outcome is: {multipleNumbers(1, 2)}</li>
        <li>Arrow function/lambda, outcome is: {multipleNumbersArrow(1, 2)}</li>
        <li>Anonymous function</li>
      </ul>
      <JsFunctionParams
        name={nameTmpVar}
        surname={lastNameTmpVar}
        example="for fun example"
      />
    </div>
  );
}
