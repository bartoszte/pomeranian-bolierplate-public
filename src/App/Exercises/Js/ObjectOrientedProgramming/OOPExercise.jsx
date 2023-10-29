import { Directions } from '@mui/icons-material';

class Computer {
  constructor() {
    this.title = 'Klasa komputer';
  }
  #faveWord = 'I compute!';

  introduce() {
    console.log(`Ulubione słowo to: ${this.#faveWord}`);
  }

  #add(x, y) {
    return x + y;
  }

  getAddFunc(x, y) {
    const addFunc = this.#add(x, y);
    return addFunc;
  }

  compute(num1, num2, num3) {
    const value = num3 * this.getAddFunc(num1, num2);
    return value;
  }
}

const companyPc = new Computer();
console.log(`Zawartość obiektu companyPc: ${companyPc}`);
console.log(companyPc);
companyPc.introduce();

const tempSum = companyPc.getAddFunc(1, 2);
console.log(tempSum);

const tempVal = companyPc.compute(1, 2, 4);
console.log(tempVal);

class Person {
  constructor() {
    this.title = 'Person';
  }

  introduce() {
    console.log(`I am a ${this.title}`);
  }
}

class Builder extends Person {
  constructor(name) {
    super();
    this.name = name;
  }

  introduce() {
    console.log(`I am a ${this.title}, I am also a ${this.name}`);
  }
}

class Doctor extends Person {
  constructor(name) {
    super();
    this.name = name;
  }

  introduce() {
    console.log(`I am a ${this.title}, I am also a ${this.name}`);
  }
}

class Pediatrician extends Doctor {
  constructor(name) {
    super();
    this.name = name;
  }

  introduce() {
    console.log(`I am a ${this.name}`);
  }
}

const person = new Person();
person.introduce();

const builder = new Builder('Builder');
builder.introduce();

const doctor = new Doctor('Doctor');
doctor.introduce();

const ped = new Pediatrician('Pediatrician');
ped.introduce();

//////////////////////////////////////////////////////////////////////////////////////////

class Pet {
  introduce() {
    return 'I am a pet!';
  }
}

// wykorzystanie SUPER do modyfikacji zwracanego napisu
class Dog extends Pet {
  introduce() {
    return super.introduce() + ' I am also a Dog!';
  }
}

const pet = new Pet();
console.log(pet.introduce());

const dog = new Dog();
console.log(dog.introduce());

//////////////////////////////////////////////////////////////////////////////////////////

class Engine {
  start() {
    return 'engine is turned on';
  }

  stop() {
    return 'engine is turned off';
  }
}

class Klaxon {
  beep() {
    return 'BEEEP!';
  }
}

class SteeringWheel {
  turn(string) {
    return `Skręcam w ${string}`;
  }
}

class GPS {
  navigate() {
    const random = Math.floor(Math.random() * 2 + 1);
    const randomString = function () {
      switch (random) {
        case 1:
          return 'turn right';
        case 2:
          return 'turn left';
        case 3:
          return 'drive straight';
        default:
          return 'drive straight';
      }
    };
    return `${randomString()}`;
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
    this.klaxon = new Klaxon();
    this.steeringWheel = new SteeringWheel();
    this.gps = new GPS();
  }

  start() {
    return this.engine.start();
  }

  stop() {
    return this.engine.stop();
  }

  beep() {
    return this.klaxon.beep();
  }

  turn(string) {
    return this.steeringWheel.turn(string);
  }

  navigate() {
    return this.gps.navigate();
  }
}

const sterWheel = new SteeringWheel();
console.log(sterWheel.turn('lewo'));

const gps = new GPS();
console.log(gps.navigate());

const carTmp = new Car();
console.log(carTmp.start(), 'tutaj jest test');
console.log(carTmp.stop(), 'tutaj jest stop');
console.log(carTmp.beep(), 'tutaj jest beep');
console.log(carTmp.turn('prawo'), 'tutaj jest turn');
console.log(carTmp.navigate(), 'tutaj jest navigate');

const dirTmp = ['one', 'two', 'three'];
// math random zwraca od 0 do 1 ale bez dokladnego 0 i bez dokladnie wartosci '1'
const randomDir = dirTmp[Math.floor(Math.random() * dirTmp.length)];
console.log(randomDir, ' test random dir');
console.log(dirTmp.length, 'dlugosc tablicy dirTmp');
console.log(dirTmp[0], 'element 0');
console.log(dirTmp[1], 'element 1');
console.log(dirTmp[2], 'element 2');
// zwroci undefined
console.log(dirTmp[3], 'element 3');

export const OOPExercise = () => {
  return <div>exercise...</div>;
};
