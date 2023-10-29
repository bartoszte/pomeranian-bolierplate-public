import { OOPClass } from './OOPClass';
import { OOPExercise } from './OOPExercise';
import { OOPPilars } from './OOPPillars';

export const OOP = () => {
  // const classPeople = [
  //     new Person('John', 'Smith', 30),
  //     new Person('John', 'Smith', 30),
  //     new Person('John', 'Smith', 30),
  // ]

  // const people = [
  //   {
  //     name: 'John',
  //     surname: 'Smith',
  //     age: 30,
  //     sayHello: () => {
  //       console.log('Cześć, jestem John');
  //     },
  //   },

  //   {
  //     name: 'Alice',
  //     surname: 'Smith',
  //     age: 20,
  //     sayHello: () => {
  //       console.log('Cześć, jestem John');
  //     },
  //   },

  //   {
  //     name: 'Alfred',
  //     surname: 'John',
  //     age: 40,
  //     sayHello: () => {
  //       console.log('Cześć, jestem John');
  //     },
  //   },
  // ];

  //   PROGRAMOWANIE FUNKCYJNE - LICZENIE POWIERCHNI KOŁA

  const radius = 10;
  const cirleArea = (r) => Math.PI * r ** 2;
  const area = Math.floor(cirleArea(radius));

  console.log(area, 'Pole koła w sposobcie funkcyjnym');

  //   PROGRAMOWANIE OBIEKTOWE - LICZENIE POWIERCHNI KOŁA
  const myCircle = {
    radius: 10,
    calculateArea: function () {
      return Math.PI * this.radius ** 2;
    },
  };

  const area2 = Math.floor(myCircle.calculateArea());
  console.log(area2, 'Pole koła w sposobcie obiektowym');

  return (
    <div>
      Object Oriented Programming (OOP)
      <OOPClass />
      <OOPPilars />
      <OOPExercise />
    </div>
  );
};
