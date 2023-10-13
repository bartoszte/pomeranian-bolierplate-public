import { useState } from 'react';
import './styles.css';
import { Loops } from './Loops';

export function ExerciseObjectsArrays() {
  //
  const peopleData = [
    { id: 1, name: 'John', age: 35, address: 'Gdańsk' },
    { id: 2, name: 'Bartosz', age: 30, address: 'Wrocław' },
    { id: 3, name: 'Hera', age: 27, address: 'Warszawa' },
    { id: 4, name: 'Dexter', age: 43, address: 'Poznań' },
  ];

  // map will create new array
  // map wykona sie tyle razy co jest obiektow w tablicy np. 4 w tym przykladzie
  // map zwraca nowa tablice - nie modyfikuje starej = jest niemutowalny
  const names = peopleData.map((person) => person.name);
  console.log(names, 'zawartosc names');

  const ages = peopleData.map((person) => person.age);
  console.log(ages, 'zawartosc ages');

  const birthYears = peopleData.map(
    (person) => new Date().getFullYear() - person.age
  );
  console.log(birthYears, 'zawartosc birthYears');

  // filter zwraca caly obiekt spelniajacy warunek
  // filter zwraca nowa tablice - nie modyfikuje starej = jest niemutowalny
  const over30 = peopleData.filter((dataPerson) => dataPerson.age >= 30);
  console.log(over30, 'kto jest po 30stce');

  // spread
  // for array
  // czyli dzielenie
  // trzy kropki (...) to tzw. spread operator
  const tempNumbers = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = tempNumbers;
  console.log(first, 'element 1');
  console.log(second, 'element 2');
  console.log(rest, 'reszta');

  // spread
  // for objects
  // wazne jest zeby odwolywaac sie do konkretnego klucza, nie ma takiej dowolnosci jak dla tablicy liczb
  const tempObject = {
    firstName: 'Tommy',
    lastName: 'Black',
    city: 'Vice City',
  };
  const { firstName, ...rest2 } = tempObject;
  console.log(firstName);
  console.log(rest2);

  // merge and spread
  // 2d
  const newMergedArray = [peopleData, ...tempNumbers];
  console.log(newMergedArray);

  // merge
  // 1d
  const newMergedArray2 = [...peopleData, ...tempNumbers];
  console.log(newMergedArray2);

  // merge
  // 3d
  const newMergedArray3 = [peopleData, tempNumbers];
  console.log(newMergedArray3);

  // dlugosc = length
  console.log(newMergedArray3.length);

  return (
    <div className="container--arrays-objects">
      Exercise Objects Arrays
      <p>tablice</p>
      <ul>
        {peopleData.map((personalData) => (
          <li>
            <div>{personalData.name}</div>
            <div>{personalData.age}</div>
            <div>{personalData.address}</div>
          </li>
        ))}
      </ul>
      Name key value of second array element: {peopleData[1]['name']}
      <Loops />
    </div>
  );
}
