"use strict";
function logger() {
  console.log("am good");
}
logger();

// declarative function
function fruits(plantain, banana) {
  const apple = `i need ${plantain} plantain and ${banana} banana`;
  return apple;
}
const ayo = fruits(23, 45);
console.log(ayo);

// expressions
const age2 = function fruits(plantain, banana) {
  const apple = `i need ${plantain} plantain and ${banana} banana`;
  return apple;
};
const agee2 = fruits(23, 4);
console.log(agee2);

// arrow function
const age3 = (fruits) => 204 - fruits;
const calage3 = age3(333);
console.log(calage3);

{
  //  <or doing it this way/>
  console.log(age3(333));
}

// const yearsLeftUntilRetirement = (bithyear, firstName) => {
//   const age = 2037 - bithyear;
//   const retirement = 65 - age;
//   //   return retirement
//   return `${firstName} retires in ${bithyear}`;
// };
// console.log(yearsLeftUntilRetirement(1991, "farouk"));
// console.log(yearsLeftUntilRetirement(1980, "ayo"));

// const fruitss = function (cutFruit) {
//   return cutFruit * 4;
// };

// function fruits(plantain, banana) {
//   const fruitsPlaintain = fruitss(plantain);
//   const fruitsBanana = fruitss(banana);
//   const apple = `i need ${fruitsPlaintain} plantain and ${fruitsBanana} banana`;
//   return apple;
// }
// console.log(fruits(2, 45));

// function agee2(bithyear) {
//   return 2037 - bithyear;
// }

// const yearsLeftUntilRetirement=function (bithyear,firstName){
//     const age=agee2(bithyear)
//     const retirement=65-age

//     if (retirement>0){
//         console.log(`${firstName} retires in ${retirement}`)
//         return retirement;
//     }else{console.log(`${firstName} has already retired`)
//         return -1;
// }}
// console.log(yearsLeftUntilRetirement(1991,'Farouk'));
// console.log(yearsLeftUntilRetirement(50,'Ayo'));

const avgDolphins = (score1, score2, score3) => {
  const calcAverage = (score1 + score2 + score3) / 3;
  return calcAverage;
};
const avgKaolas = (score1, score2, score3) => {
  const calcAverage2 = (score1 + score2 + score3) / 3;
  return calcAverage2;
};

function checkWinner(a, b) {
  if (a >= 2 * b) {
    console.log(`dolphines wins(${a} vs ${b}) `);
  } else if (b >= 2 * a) {
    console.log(`kaolas wins(${a} vs ${b}) `);
  } else {
    console.log(`no team wins`);
  }
}
let dolphines = avgDolphins(144, 93, 121);
let kaolas = avgKaolas(65, 54, 49);
console.log(dolphines);
console.log(kaolas);
checkWinner(dolphines, kaolas);

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// let dolphines = calcAverage(44, 23, 71);
// let kaolas = calcAverage(65, 54, 49);
// console.log(dolphines, kaolas);

// const checkWinner = function (a, b) {
//   if (a >= 2 * b) {
//     console.log(`dolphines wins(${a} vs ${b}) `);
//   } else if (b >= 2 * a) {
//     console.log(`kaolas wins(${a} vs ${b}) `);
//   } else {
//     console.log(`no team wins`);
//   }
// };
// checkWinner(dolphines, kaolas);
// // test2
// dolphines = calcAverage(85, 54, 41);
// kaolas = calcAverage(23, 34, 27);
// console.log(dolphines, kaolas);
// checkWinner(dolphines, kaolas);

// Array
const myFriends = ["ayo", "nife", "titi", "tola"];
console.log(myFriends);
console.log(myFriends[myFriends.length - 1]);
myFriends[3] = "farouk";
console.log(myFriends);

const yearsLeftUntilRetirement = function (bithyear) {
  return 2037 - bithyear;
};
const ages = [1990, 1967, 2002, 2010, 2018];
const agess = [
  yearsLeftUntilRetirement(ages[0]),
  yearsLeftUntilRetirement(ages[1]),
  yearsLeftUntilRetirement(ages[yearsLeftUntilRetirement.length - 1]),
];
console.log(yearsLeftUntilRetirement(ages[2]));
console.log(agess);

// const myFriends = ["ayo", "nife", "titi", "tola"];
// console.log(myFriends);
// to add elements (back)
const pushed = myFriends.push("nifemi");
console.log(pushed);
// (front)
const unshift = myFriends.unshift("ife");
console.log(unshift);
// to remove elements
// (back)
const popped = myFriends.pop();
console.log(popped);
// (front)
const shifted = myFriends.shift();
console.log(shifted);

console.log(myFriends.indexOf("titi"));
console.log(myFriends.indexOf("farouk"));

myFriends.push(23);
console.log(myFriends.includes("ayo"));
console.log(myFriends.includes("ife"));
console.log(myFriends.includes(23));

const calcTip = function (billValues) {
  return billValues >= 50 <= 300
    ? (billValues * 15) / 100
    : (billValues * 20) / 100;
};
const billValues = [125, 555, 44];
const tipvalues = [
  calcTip(billValues[0]),
  calcTip(billValues[1]),
  calcTip(billValues[2]),
];
const totals = [
  billValues[0] + tipvalues[0],
  billValues[1] + tipvalues[1],
  billValues[2] + tipvalues[2],
];
console.log(billValues, tipvalues, totals);

// const faroukId = {
//   firstName: "farouk",
//   lastName: "mustapha",
//   age: 32,
//   job: "corrosion engineer",
//   friends: ["nifemi", "bisola", "tope"],
// };
// console.log(faroukId);
// console.log(faroukId.lastName);
// console.log(faroukId["lastName"]);

// const nameKey = "Name";
// console.log(faroukId["first" + nameKey]);

// const interestedIn = prompt(
//   "choose from the area of interest, firstname, lastname,age,job,friends"
// );
// if (faroukId[interestedIn]) {
//   console.log(faroukId[interestedIn]);
// } else {
//   console.log("wrong request mf , retype!");
// }
// faroukId.location = "lagos";
// faroukId["girlfriend"] = "sapa didnt allow it happened";
// console.log(faroukId);

// console.log(
//   `${faroukId["firstName"]} has ${faroukId.friends.length} and his best friend is ${faroukId.friends[0]}`
// );

// console.log(
//   console.log(
//     `${faroukId.firstName} has ${faroukId.friends.length} and his best friend is ${faroukId.friends[0]}`
//   )
// );

const faroukId = {
  firstName: "farouk",
  lastName: "mustapha",
  birthYear: 1991,
  job: "corrosion engineer",
  friends: ["nifemi", "bisola", "tope"],
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old teacher and he ${
      this.hasDriverLicense ? "has a" : "has no"
    } driver license.`;
  },
};

console.log(faroukId.calcAge());
console.log(faroukId.getSummary());
console.log(faroukId.age);

const markMiller = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnSmith = {
  fullname: "John Smith",
  mass: 92,
  height: 1.59,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(markMiller.calcBmi());
console.log(johnSmith.calcBmi());
if (markMiller.bmi > johnSmith.bmi) {
  console.log(
    `${markMiller.fullname}'s mark (${markMiller.bmi}) is higher than ${johnSmith.fullname}'s mark(${johnSmith.bmi})`
  );
} else if (johnSmith.bmi > markMiller.bmi) {
  console.log(
    `${johnSmith.fullname}'s mark (${johnSmith.bmi}) is higher than ${markMiller.fullname}'s mark (${markMiller.bmi})`
  );

  // for loop
  for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repetition ${rep}`);
  }

  const faroukId = [
    "farouk",
    "mustapha",
    32,
    "corrosion engineer",
    ["nifemi", "bisola", "tope"],
    true,
  ];
  const types = [];
  for (let i = 0; i < faroukId.length; i++) {
    console.log(faroukId[i], typeof faroukId[i]);
    types.push(typeof faroukId[i]);
  }

  console.log(types);

  const years = [1991, 2007, 1969, 2020];
  const ages = [];
  for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
  }
  console.log(ages);

  console.log("ONLY STRING USED IN CONTINUE STATEMENT");
  for (let i = 0; i < faroukId.length; i++) {
    if (typeof faroukId[i] !== "string") continue;
    console.log(faroukId[i], typeof faroukId[i]);
  }
  console.log("ONLY STRING USED IN BREAK STATEMENT");
  for (let i = 0; i < faroukId.length; i++) {
    if (typeof faroukId[i] === "number") break;
    console.log(faroukId[i], typeof faroukId[i]);
  }

  // const faroukId=[
  //     'farouk',
  //     'mustapha',
  //      32,
  //     'corrosion engineer',
  //     ['nifemi','bisola','tope'],
  //     true
  // ]
  // for (let i=faroukId.length-1;i>=0;i--){
  //     console.log(i,faroukId[i])
  // }

  // for (let exercise=1;exercise<4;exercise++){
  //     console.log(`_____starting exercise ${exercise}`)
  //     for (let rep=1;rep<6;rep++){
  //         console.log(`Exercise ${exercise} lifting weight repetition ${rep}`)
  //     }
  // }

  // while loop
  let rep = 1;
  while (rep <= 10) {
    console.log(`lifting weight repetition ${rep}`);
    rep++;
  }
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
      console.log(`the loop is about to end....`);
    }
  }

  const calcTip = function (bills) {
    return bills >= 50 && bills <= 300
      ? (bills * 15) / 100
      : (bills * 20) / 100;
  };
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];

  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  console.log(bills, tips, totals);

  const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  };
  console.log(calcAverage([2, 3, 6]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));
}
