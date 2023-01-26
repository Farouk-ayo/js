'use strict';
// Convention "a constructor always start with capital letter"
// arrow function wont work as a constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);

  //never create a method in a constructor function
  this.calAge = function () {
    console.log(2037 - this.birthYear);
  };
};

// 1.New {} is created
// 2.function is called,this={}
// 3.{} linked to prototype
// 4.function automatically return {}

// the only difference between a constructor function and normal function, is the way it is being called 👇
const jonas = new Person(`jonas`, 1991);
console.log(jonas);
const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1975);
console.log(matilda, jack, jonas);

const jay = `jay`;
console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// static method
Person.hey = function () {
  console.log(`Hey there 👋`);
  console.log(this);
};
Person.hey();

// Prototypes
console.log(Person.prototype);

// seting objets to prototype
Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

// when u check the jonas it does not include calAge buh when you call it , it runs.
// i.e its doesnt relect in person buh only in their objects
jonas.calAge();
matilda.calAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

// u can use ds to know the differences
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// setting prototype to methods
Person.prototype.species = `Homo sapiens`;
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty(`firstName`));
console.log(jonas.hasOwnProperty(`species`));

console.log(jonas.__proto__);

// Object.prototype is top of the prototype chain
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// prototypeof Array
const arr = [2, 4, 4, 5, 5, 21, 1]; //new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector(`h1`);
console.dir(x => x + 1);

// coding challenge
const Car = function (make, speeed) {
  this.make = make;
  this.speeed = speeed;
};
const car1 = new Car(`bmw`, 120);
console.log(car1);
const car2 = new Car(`Mercedes`, 95);
console.log(car2);

Car.prototype.accelerate = function () {
  this.speeed += 10;
  console.log(this.speeed);
  console.log(`${this.make} is going at ${this.speeed}km/h`);
};
Car.prototype.brake = function () {
  this.speeed -= 5;
  console.log(this.speeed);
  console.log(`${this.make} is going at ${this.speeed}km/h`);
};

car1.accelerate();
car1.accelerate();
car2.brake();
car2.brake();

// ES6 classes
// class expression
// const personCl=class{}

// class declaration
class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be added to the prototype property not like in the constructor function prototypal inheritance that is being called outside for the best performance

  // they are called instance methods
  calAge() {
    console.log(2037 - this.birthYear);
  }
  // no commas between the methods

  greet() {
    console.log(`hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
}
// linking inheirtance in clases ;
class StudentCl extends personCl {
  constructor(fullName, birthYear, course) {
    // Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}  `);
  }
  calAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old.but as a student I feel more like ${
        2037 - this.birthYear + 10
      } `
    );
  }
}

const martha = new StudentCl(`Martha jones`, 2012, `computer science`);
martha.introduce();
martha.calAge();

const jessica = new personCl(`Jessica Davies`, 1996);
console.log(jessica);
jessica.calAge();
console.log(jessica.age);

console.log(jessica.__proto__ === personCl.prototype);

// using the prototypal inheritance also works fine
// personCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };

jessica.greet();

// 1. classes  are not hoisted (cant use them before being called ) i.e function declaration are hoisted buh when used with ES6classes they are not
// 2.classes are first class citizen
// 3.classes are executed in strict mode

// const walter = new personCl(`Walter`, 1965);

const walter = new personCl(`Walter white`, 1965);

personCl.hey();
// getters and setters
const account = {
  owner: `Jonas`,
  movements: [200, 530, 120, 200],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// OBJECT.CREATE
const PersonProto = {
  calAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = `Steven`;
steven.birthYear = 2002;
steven.calAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init(`Sarah`, 1979);
sarah.calAge();

// inheritance in Object
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jays = Object.create(StudentProto);
jays.init(`jay`, 2010, `Computer Science`);
jays.introduce();
jays.calAge();
// coding callenge 2

// using Object.create
// const CarEs = {
//   car(make, speeed) {
//     this.make = make;
//     this.speeed = speeed;
//   },

//   accelerate() {
//     this.speeed += 10;
//     console.log(this.speeed);
//     console.log(`${this.make} is going at ${this.speeed}km/h`);
//   },
//   brake() {
//     this.speeed -= 5;
//     console.log(this.speeed);
//     console.log(`${this.make} is going at ${this.speeed}km/h`);
//   },

//   get SpeedUs() {
//     console.log(this.speeed / 1.6);
//   },

// };
// const carE1 = Object.create(CarEs);
// console.log(carE1);
// const carE2 = Object.create(CarEs);
// console.log(carE2);
// carE1.car(`bmw`, 120);
// carE2.car(`Mercedes`, 95);
// carE1.accelerate();
// carE2.accelerate();
// carE1.brake();
// carE2.brake();
// carE1.SpeedUs;

// using ES6 classes
class CarCl {
  constructor(make, speeed) {
    this.make = make;
    this.speeed = speeed;
  }
  accelerate() {
    this.speeed += 10;
    console.log(this.speeed);
    console.log(`${this.make} is going at ${this.speeed}km/h`);
  }
  brake() {
    this.speeed -= 5;
    console.log(this.speeed);
    console.log(`${this.make} is going at ${this.speeed}km/h`);
  }
  get speedUs() {
    return this.speeed / 1.6;
  }
  set speedUs(speed) {
    this.speeed = speed * 1.6;
  }
}

const carCford = new CarCl(`ford`, 120);
console.log(carCford);
carCford.accelerate();
console.log(carCford.speedUs);

carCford.speedUs = 50;
console.log(carCford);

// inheritance
const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);
};

Person1.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

// linking prototype

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person1.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}  `);
};

const mike = new Student(`Mike`, 2020, `Computer Science`);
mike.introduce();
mike.calAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// coding challenge 3
const Carz = function (make, speeed) {
  this.make = make;
  this.speeed = speeed;
};

Carz.prototype.brake = function (chargeTo) {
  this.speeed -= 5;
  console.log(this.speeed);
  console.log(`${this.make} is going at ${this.speeed}km/h`);
  Carz.prototype.accelerate = function () {
    this.speeed += 20;
    this.charge -= 1;
    console.log(this.speeed);
    console.log(`${this.make} is going at ${this.speeed}km/h`);
  };
};

const EV = function (make, speeed, charge) {
  Carz.call(this, make, speeed);
  this.charge = charge;
};
EV.prototype = Object.create(Carz.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speeed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speeed}km/h with a charge of ${this.charge}`
  );
};
const EV1 = new EV(`Tesla`, 120, 23);
console.log(EV1);

EV1.chargeBattery(90);
console.log(EV1);

EV1.brake();
EV1.accelerate();

// encapsulation
//1)public fields
//2)private fields
//3)public methods
//4)private methods
// there is also the static methods

// class Examples
class Account {
  // 1)public fields(instance)
  locale = navigator.language;
  // _movements = [];

  //2)private fields(instance)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3)public method
  // public interface API
  getMovement() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    // if (this.#approveLoan(val)) {s
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log(`Helper`);
  }

  //4)private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account(`Jonas`, `EUR`, 1111);
console.log(acc1);

// console.log(navigator.language);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovement());

console.log(acc1);
Account.helper();
// console.log(acc1._pin);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000));

// chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovement());

// Challenge 4
class CarC2 {
  constructor(make, speeed) {
    this.make = make;
    this.speeed = speeed;
  }
  accelerate() {
    this.speeed += 10;
    console.log(this.speeed);
    console.log(`${this.make} is going at ${this.speeed}km/h`);
  }
  brake() {
    this.speeed -= 5;
    console.log(this.speeed);
    console.log(`${this.make} is going at ${this.speeed}km/h`);
    return this;
  }
  get speedUs() {
    return this.speeed / 1.6;
  }
  set speedUs(speed) {
    this.speeed = speed * 1.6;
  }
}

class Evc2 extends CarC2 {
  #charge;
  constructor(make, speeed, charge) {
    super(make, speeed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate = function () {
    this.speeed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speeed}km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  };
}
const rivian = new Evc2(`Rivian`, 120, 23);
console.log(rivian);

rivian.chargeBattery(90);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUs);
