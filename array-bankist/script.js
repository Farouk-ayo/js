'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movement, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movement.slice().sort((a, b) => a - b) : movement;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}💶</div>
       </div>`;
    //  .insertAdjacntHtml
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
displayMovements(account1.movements);
console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} 💶`;
};
calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(incomes);
  labelSumIn.textContent = `${incomes} 💶`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)} 💶`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} 💶`;
};
calcDisplaySummary(account1);

// challenge
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
  });
};
createUsernames(accounts);
console.log(accounts);

const updateUi = function (acc) {
  // display movements
  displayMovements(acc.movements);
  //display balance
  calcDisplayBalance(acc);
  //display summary
  // check the displaysummary function passed in ,its not movement array instead its the whole account object
  // updateUi
  calcDisplaySummary(acc);
};

// eventhandler
let currentAccount;

btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();
  // console.log(`LOGIN`);
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`LOGIN`);
    // display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();

    containerApp.style.opacity = 100;
    // // display movements
    // displayMovements(currentAccount.movements);
    // //display balance
    // calcDisplayBalance(currentAccount);
    // //display summary
    // // check the displaysummary function passed in ,its not movement array instead its the whole account object
    // calcDisplaySummary(currentAccount);

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAccount);

  inputTransferAmount.value = inputTransferTo.value = ``;
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username != currentAccount
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    console.log(`transfer valid`);

    // updateUi
    updateUi(currentAccount);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movement.some(mov => mov >= amount * 0.1)) {
    // add movements
    currentAccount.movement.push(amount);

    // updateUi
    updateUi(currentAccount);
  }
  inputLoanAmount.value = ``;
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // delete account
    accounts.splice(index, 1);

    // delete UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ``;
});

let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// slice method( does not mutate arrays)
let arr = [`a`, `b`, `c`, `d`, `e`];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// Splice method(mutate arrays)
// similar to slice : just that it deletes the removed elements form the array
// connsole.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
// having two parameter doesnt work like the slice: here the 1 starts counting from the b until it passes 2 parameter
arr.splice(1, 2);

// reverse(mutate arrays)
arr = [`a`, `b`, `c`, `d`, `e`];
const arr2 = [`j`, `i`, `h`, `g`, `f`];
console.log(arr2.reverse());
console.log(arr2);

// concat (does not mutate)
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(`-`));
// looping array
// For of loop
const movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movementss.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : you withdrew ${Math.abs(movement)}`);
  }
}
console.log(`-----FOREACH----`);
// note u can pass in any name herein the arguments the 2nd being the index and 3rd is the Array itself
movementss.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} : you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} : you withdrew ${Math.abs(mov)}`);
  }
});
// map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});
// set
// a set doesnt have indexes nor keys
const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
});
// filter
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// using the forof loop method
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// small challenge
const withdraw = movements.filter(mov => mov < 0);
console.log(withdraw);

const depositss = [];
for (const mov of movements) {
  if (mov < 0) depositss.push(mov);
}
console.log(depositss);

// reduce method
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);
// const balance = movements.reduce(
//   (acc, cur, i, arr) =>
//     acc + cur,
//   0
// );
// console.log(balance);

// using for of loop for reduce
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

// challenge
const calcAverageHuman = function (age) {
  const humanAges = age.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const filterAge = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(filterAge);

  const average =
    filterAge.reduce((acc, age) => acc + age, 0) / filterAge.length;
  // const average = filterAge.reduce(
  //   (acc, age, i, arr) => acc + age / arr.length,
  //   0
  // );
  console.log(average);
};
const calcAverageHumans = age =>
  age
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

calcAverageHuman([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumans([16, 6, 10, 5, 6, 1, 4]);
//  coding challenge
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1}is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dogs number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const eurToUsd = 1.1;
// const movementUsd = movements.map(function (mov) {
//   return mov * eurToUsd;

const movementUsd = movements.map(mov => mov * eurToUsd);
// return 23
// });
console.log(movements);
console.log(movementUsd);

const movementsUsdfor = [];
for (const mov of movements) movementsUsdfor.push(mov * eurToUsd);
console.log(movementsUsdfor);

// check the way it was used using the FOReach method above
const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : you ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
      mov
    )}`

  // if (mov > 0) {
  //   return `Movement ${i + 1} : you deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1} : you withdrew ${Math.abs(mov)}`;
  // }
);
console.log(movementDescriptions);

const totalDeposits = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposits);

// find
const firstWithdraw = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdraw);

console.log(accounts);

const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account);

console.log(movements);

//include is for testing equality
console.log(movements.includes(-130));

//some is for testing condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//every is like some just that it is for all elements of the array
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//seperate callbacks
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// flat
const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr4.flat());
// note that the default is one and u can decide to go deeper
const arr4Deep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr4Deep.flat(2));

const accountMovement = accounts.map(acc => acc.movements);
console.log(accountMovement);

const allMovement = accountMovement.flat();
console.log(allMovement);
// const overallBalance = allMovement.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
// or
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flatmap
// note that the flat only go one level here
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// sorting with strings ;it mutates
const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
console.log(owners.sort());
console.log(owners);

// sorting with numbers
console.log(movements);
console.log(movements.sort());

// return < 0, A,B(KEEP ORDER)
// return > 0, B,A(SWITCH ORDER)
// ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
// descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

const arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// empty array plus fill method
const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));
// x.fill(1);
// console.log(x);
x.fill(1, 3, 5);
console.log(x);
arr5.fill(23, 4, 6);
console.log(arr5);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener(`click`, function () {
  const movementUI = Array.from(
    document.querySelectorAll(`.movements__value`),
    el => Number(el.textContent.replace(`💶`, ``))
  );
  console.log(movementUI);
});

// challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// const food = function (nub) {
//   nub.forEach(acc=>(recommendedFood = acc ** 0.75 * 28) );

//   console.log(nub);
// };
// console.log(food(dogs));

// dogs.forEach(acc => (acc.recommendedFood = acc.weight ** 0.75 * 28));
// console.log(dogs);

dogs.forEach(function (acc) {
  acc.recommendedFood = Number(Math.trunc(acc.weight ** 0.75 * 28));
  // acc.weight.concat(`kg`);
  // acc.curFood.concat(`g`);
});
console.log(dogs);

const ddg = dogs.find(own => own.owners.includes(`Sarah`));
console.log(ddg);
console.log(
  `Sarah's food is ${
    ddg.curFood > ddg.recommendedFood ? `much` : `less`
  } that the recommended food`
);

const ownersEatTooMuch = dogs
  .filter(acc => acc.curFood > acc.recommendedFood)
  .flatMap(acc => acc.owners);

console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter(acc => acc.curFood < acc.recommendedFood)
  .map(acc => acc.owners)
  .flat();
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(` and `)} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(` and `)}  dogs eat too little!`);

const equals = dogs.some(acc => acc.curFood === acc.recommendedFood);
console.log(equals);

const checkOkay = acc =>
  acc.curFood > acc.recommendedFood * 0.9 &&
  acc.curFood < acc.recommendedFood * 1.1;
console.log(dogs.some(checkOkay));

const printOkay = dogs.filter(checkOkay).flatMap(acc => (acc = acc.owners));
console.log(printOkay);

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
