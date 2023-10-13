import './styles.css';

const checkDuplicateInArray = (input_array) => {
  const duplicates = input_array.filter(
    (item, index) => input_array.indexOf(item) !== index
  );
  // new Set -> zapewnia unikalnosc elementow / usuwa powtorzenia
  return Array.from(new Set(duplicates));
};

function sameNumbers(table1, table2) {
  // tabela wszystkich wartosci
  const mergedTable1d = [...table1, ...table2];

  return checkDuplicateInArray(mergedTable1d);
}

export function Loops() {
  const peopleSampleDataArray = [
    { id: 1, name: 'John', age: 35, address: 'Gdańsk' },
    { id: 2, name: 'Bartosz', age: 30, address: 'Wrocław' },
    { id: 3, name: 'Hera', age: 27, address: 'Warszawa' },
    { id: 4, name: 'Dexter', age: 43, address: 'Poznań' },
  ];

  const sampleNumbersArray = [1, 2, 3, 4, 5];

  // petla for wypisujaca liczby od 0 do 4
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // break - przerywa iteracje calkowicie
  // continue - pomija dana iteracje
  for (let i2 = 0; i2 < 5; i2++) {
    if (i2 === 2) {
      continue;
    }
    console.log(i2, 'petla z i2');
  }

  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  // }

  let newCounter = 0;
  while (newCounter < 5) {
    console.log(newCounter, 'iteracja od while');
    newCounter++;
  }

  // petla for of
  // do tablic
  // służy do iteracji przez elementy tablicy bez potrzeby śledzenia indeksu
  for (const number of sampleNumbersArray) {
    console.log(number, 'uzycie petli for of');
  }

  const tempSampleObject = {
    firstName: 'Tommy',
    lastName: 'Black',
    city: 'Vice City',
  };

  // petla for in
  // do uzytku w obiektach?
  // z wykorzystaniem template string
  for (const key in tempSampleObject) {
    console.log(`${key} napis: ${tempSampleObject[key]}`);
  }

  // metoda SORT do tablic
  // przyklad sortuje od najnizszego wieku do najwyzszego
  const sortedPeople = peopleSampleDataArray.sort(
    (personA, personB) => personA.age - personB.age
  );
  console.log(sortedPeople, 'posortowana tabela');

  // reduce
  const agesVar = peopleSampleDataArray.map((person) => person.age);
  const totalAgeVar = agesVar.reduce(
    (previousAge, currentAge) => previousAge + currentAge,
    0
  );
  console.log(agesVar, 'tablica agesVar');
  console.log(totalAgeVar, 'tablica totalAgeVar');

  console.log(sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]));

  return (
    <div className="container--loops">
      <h3>Loops component</h3>
    </div>
  );
}
