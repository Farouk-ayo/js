'use strict';

// scoping
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = `frkayo`;
//       output = `new output`;
//       const str = `oh , and you're a millenial, ${firstName} `;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// }
// const firstName = `farouk`;
// calcAge(1982);

// hoisting
// console.log(me);
// console.log(job);
// console.log(year);

// var me = `jonas`;
// let job = `kilokan iru awa yi`;
// const year = `2002`;

function addDecl(a, b) {
  return a + b;
}
var addExp = function (a, b) {
  return a + b;
};
var addArr = (a, b) => a + b;

console.log(addDecl(2, 3));
console.log(addExp(2, 3));
console.log(addArr(2, 3));

if (!numProduct) deleteShoppingCart();
var numProduct = 10;
function deleteShoppingCart() {
  console.log(`all product deleted`);
}
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

console.log(`goat it worked`);

const calcAges = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAges(2000);

// arrow function

const calcAgeArr = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArr(1);

// const jonas = {
//   name: `farouk`,
//   year: 1991,
//   calcAgeO: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAgeO();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAgeO = jonas.calcAgeO;
// matilda.calcAgeO();

// const f = jonas.calcAgeO;
// f();

// var name = `farouk`;

const jonas = {
  name: `farouk`,
  year: 1991,
  calcAgeO: function () {
    console.log(this);
    console.log(2037 - this.year);

    // self or that
    // solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // using arrow function
  // greet: () => {
  //   console.log(this);
  //   console.log(`hey ${this.name}`);
  // },

  // using the normal regular function
  greet: function () {
    console.log(this);
    console.log(`hey ${this.name}`);
  },
};

jonas.greet();
jonas.calcAgeO();
console.log(this.name);

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// primitive values
let lastName = `williams`;
let oldLastName = lastName;
lastName = `Davies`;
console.log(lastName, oldLastName);

const jessica = {
  firstName: `jessica`,
  lastName: `williams`,
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = `Davies`;
console.log(`before marriage`, jessica);
console.log(`after marriage`, marriedJessica);

// and copying objects
const jessica2 = {
  firstName: `jessica`,
  lastName: `williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = `Davies`;
jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`john`);
console.log(`before marriage`, jessica2);
console.log(`after married`, jessicaCopy);
