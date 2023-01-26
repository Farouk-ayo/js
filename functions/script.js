'use strict';
const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking(`LH123`);
createBooking(`LH123`, 2, 800);
createBooking(`LH123`, 2);
createBooking(`LH123`, 5);
createBooking(`LH123`, undefined, 1000);

const flight = `LH234`;
const jonas = {
  name: `Jonas Schmedtmann`,
  passport: 232456776532,
};
const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr. ` + passenger.name;
  if (passenger.passport === 232456776532) {
    alert(`Checked in`);
  } else {
    alert(`Wrong passport`);
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
// const flightNum=flight
// const passenger=jonas

const newpassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newpassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};
// higher order function
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);

// js uses callbacks all the time
const high5 = function () {
  console.log(`👋`);
};
// document.body.addEventListener(`click`, high5);
// we also use forEach methods ...bookings.will be talked about in the later section

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greeterHey(`steven`);
// complex method
greet(`Hello`)(`Jonas`);

// or using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greet(`Hello`)(`Jonas`);

const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, `Jonas Schmedtmann`);
lufthansa.book(635, `John Smith`);
// console.log(lufthansa);
const eurowings = {
  airline: `Eurowing`,
  iataCode: `Ew`,
  bookings: [],
};
const book = lufthansa.book;
// remember this thing will not call the function in general because is in strict mode and it shows how this keyword clearly works :cause it is also called oustide a block
// does not work
// book(23, `Sarah Williams`);
// so you can use
// Call and apply method
book.call(eurowings, 23, `Sarah Williams`);
console.log(eurowings);

book.call(lufthansa, 239, `Mary Cooper`);
// the first console.log(lufthansa); the array of bookings was 2, and now its 3...cuz of Mary cooper is now added
console.log(lufthansa);

const swiss = {
  airline: `Swiss Air Line`,
  iataCode: `LX`,
  bookings: [],
};
book.call(swiss, 583, `Mary Cooper`);
console.log(swiss);

// Apply method
const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);

// u can also use this instead of the apply method above
book.call(swiss, ...flightData);

// bind method
// book.call(eurowings, 23, `Sarah Williams`);
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, `Steve Williams`);
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23(`Jonas Schmedtmann`);
bookEW23(`Martha Cooper`);

// with addEventListener
lufthansa.planes = 300;
lufthansa.buyplanes = function () {
  // note the this keyword will point to the key handler function in the event
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyplanes();
document.querySelector(`.buy`).addEventListener(`click`, lufthansa.buyplanes);

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// addVat=value=>value+value*0.23
console.log(addVat(100));
console.log(addVat(23));

// challenge using the method of function returning another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(write option number)`
      )
    );
    console.log(answer);
    typeof answer === `number` &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
  },
  displayResult(type = `array`) {
    if (type === `array`) {
      console.log(this.answers);
    } else if (type === `string`) {
      console.log(`poll results are ${this.answers.join(`,`)}`);
    }
  },
};
// poll.registerNewAnswer();
document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));
poll.displayResult.call({ answers: [5, 2, 3] }, `string`);
poll.displayResult.call({ answers: [1, 5, 3, 9, 6] }, `string`);
poll.displayResult.call({ answers: [1, 5, 3, 9, 6] });

// IIFE
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();
// console.log(isPrivate)
// using arrow function
(() => console.log(`This will ALSO never run again `))();
{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);

// closures occurs here
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
// re-assigning f function
h();
f();
console.dir(f);

// Example
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  // const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();
