'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // enhanced object literal
  // E6 update is not necessary u write the function here again anymore , depends on the one u are comfortable with
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // }
  openingHours,

  // one object was passed here not four arguments
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `22:00`,
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1},${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
restaurant.orderDelivery({
  time: `22:30`,
  address: `la adelawe ayuba street`,
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: `ode street`,
  starterIndex: 1,
});

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// // destructing Arrays
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// switching varaibles
// const temp = main;
// main = secondary;
// secondary = main;
// console.log(main, secondary);
// // or
[main, secondary] = [secondary, main];
console.log(main, secondary);
// receiving 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
// note that when restructuring u will have a const in ds form const[x,y]
// nested array means one array inside another

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// // destructing Objects
// const { name, categories, openingHours } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
// nested Object;

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// spread operators
const arrs = [7, 8, 9];
const badArr = [1, 2, arrs[0], arrs[1], arrs[2]];
console.log(badArr);
const newArr = [1, 2, ...arrs];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, `gnocci`];
console.log(newMenu);

// copying array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);

// iterables are arrays, strings ,maps, sets. NOT objects
const str = `jonas`;
const letters = [...str, ``, `S.`];
console.log(letters);
console.log(...str);
// // console.log(`${...str} frk`);                 won't work brotherman

// const ingredients = [
//   prompt(`let's make pasta! ingredients 1?`),
//   prompt(`let's make pasta ingredients 2?`),
//   prompt(`let's make pasta ingredients 3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[[2]]);
// restaurant.orderPasta(...ingredients);

// // objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Agba dev` };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;
console.log(restaurantCopy.name);
console.log(restaurant.name);

// // rest pattern
// // values with commas
// // spread, on the right handside of=
// const arrss = [1, 2, ...[3, 4]];

// // rest on the lefthand side of =
// // variables with commas
// const [l, m, ...others] = [1, 2, 3, 4, 5];
// console.log(l, m, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const u = [23, 5, 7];
add(...u);

// restaurant.orderPizza(`mushroom`, `onion`, `olives`, `spinach`);
// restaurant.orderPizza(`mushroom`);

// short circuiting
// console.log___||___OR
console.log(3 || `jonas`);
console.log(`` || `jonas`);
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || `` || `hello` || 23 || null);

// the restaurant.numGuests isnt working here maybe it's an update issue
// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// console.log___ && ___AND;
console.log(0 && `jonas`);
console.log(7 && `jonas`);
console.log(7 && null);
console.log(`hello` && 23 && null && `jonas`);
if (restaurant.orderPizza) {
  restaurant.orderPizza(`mushroom`, `spinach`);
}
restaurant.orderPizza && restaurant.orderPizza(`mushroom`, `spinach`);

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// Nullish: null and undefined (Not 0 OR ``) 0 and `` were not falsy values here ...falsy values here are the null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// coding challenges

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, `Thiago`, `Coutinho`, `perisic`];
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, team2, draw);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
printGoals(`Davies`, ` Muller`);
printGoals(...game.scored);

team1 < team2 && console.log(`  Team1 is likely to win`);
team1 > team2 && console.log(`team2 is more likely to win`);

// the for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const item of menu.entries()) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
// console.log([...menu.entries()]);
// optional chaining
if (restaurant.openingHours.mon && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.thu?.open);

const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
for (const day of days) {
  console.log(day);
  // using of nullish collascing and optional chaining together
  const opens = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`on ${day}, we open at ${opens}`);
}
console.log(restaurant.order?.(0, 1) ?? `method does not exist`);
// on methods
console.log(restaurant.order?.(0, 1) ?? `method does not exist `);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);
// on Arrays
const users = [
  {
    name: `jonas`,
    email: `hello@jonas.io`,
  },
];
console.log(users[0]?.name ?? `User array empty`);
if (users.length > 0) console.log(users[0].name);
else console.log(`user array empty`);

// looping objects
// properties NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = ` we are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += ` ${day} `;
}
console.log(openStr);

// properties VALUES
const values = Object.values(openingHours);
console.log(values);

// entries object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}

const game2 = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const src = [...game2.scored];
for (const [num, player] of game2.scored.entries()) {
  console.log(` Goal ${num + 1}: scored by ${player}`);
}

let average = 0;
const odds = Object.values(game2.odds);
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game2.odds)) {
  // console.log(team, odd);
  const teamsStr = team === `x` ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${teamsStr} ${odd} `);
}
// if inside block, we use the [] to get the name of the team
console.log(game.team1);

// set
const orderSet = new Set([
  `pasta`,
  `pizza`,
  `pizza`,
  `risotto`,
  `pasta`,
  `pizza`,
]);
console.log(orderSet);
console.log(new Set(`jonas`));
console.log(orderSet.size);
console.log(orderSet.has(`bread`));
console.log(orderSet.has(`pizza`));
orderSet.add(`Garlic Bread`);
orderSet.add(`Garlic Bread`);
orderSet.delete(`risotto`);
orderSet.clear();
console.log(orderSet);
for (const order of orderSet) console.log(order);
// examples
const staff = [`waiter`, `chef`, `waiter`, `manager`, `chef`, `waiter`];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set([`waiter`, `chef`, `waiter`, `manager`, `chef`, `waiter`]).size
);
console.log(new Set(`jonasschemdtmann`).size);

// Maps
const rest = new Map();
rest.set(`name`, `classico Italiano`);
rest.set(1, `Firenze, italy`);
console.log(rest.set(2, `lisbon, portugal`));

rest
  .set(`categories`, [`italian`, `pizzeria`, `vegetarian`, `organic`])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `we are open:D`)
  .set(false, `we are closed:(`);
console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

const times = 8;
console.log(rest.get(times > rest.get(`open`) && times < rest.get(`close`)));
console.log(rest.has(`categories`));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, `Test`);
rest.set(document.querySelector(`h1`), `heading`);
console.log(rest);
// rest.clear();
console.log(rest.size);
console.log(rest.get(arr));

const question = new Map([
  [`question`, `what is the best programming language?`],
  [1, `c`],
  [2, `java`],
  [3, `javascript`],
  [`correct`, 3],
  [true, `Correct`],
  [false, `try again🤣🤣`],
]);
console.log(question);
// converting object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get(`question`));
const answer = Number(prompt(`your answer`));
console.log(answer);
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}
console.log(question.get(question.get(`correct`) === answer));
// converting map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
// events.('� Yellow card');
gameEvents.delete(64);
console.log(events);
const xx = [...gameEvents.keys()].pop();
const x = xx / gameEvents.size;
console.log(`an event haapened, on average , every ${x} minutes`);
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? `FIRST` : `SECOND`;
  console.log(`[${half} half]  ${min}: ${event}`);
}

// working with strings

const airline = `TAP Air portugal`;
const plane = `A320`;
console.log(plane[0]);
console.log(plane[1]);
console.log(`B737`[0]);
console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`portugal`));
// IT IS VERY CASE SENSITIVE
console.log(airline.indexOf(`Portugal`));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) console.log(`you got the middle seat😬`);
  else console.log(`you got luck comrade😎`);
};
checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`2E`);

console.log(new String(`jonas`));
console.log(typeof new String(`jonas`));
console.log(typeof new String(`jonas`).slice(1));
//  WORKING WITH STRINGS 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// fixing of capitalization in name
const passenger = `jOnAS`;
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = `hello@jonas.io`;
const loginEmail = `Hello@Jonas.Io \n`;

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
// console.log(lowerEmail);
// console.log(trimmedEmail);
console.log(email === lowerEmail);
console.log(email === trimmedEmail);
// OR
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// replacing
const priceGB = `288,97£`;
const priceUS = priceGB.replace(`£`, `$`).replace(`,`, `.`);
console.log(priceUS);
const annoucement = `all passengers come to Boarding door 23. Boarding door 23!`;
console.log(annoucement.replace(`door`, `gate`));
// console.log(annoucement.replace(`door`, `gate`));

// OR USING A REGULAR EXPRESSION
console.log(annoucement.replace(/door/g, `gate`));

// Booleans
const planes = `Airbus A320neo`;
console.log(planes.includes(`A320`));
console.log(planes.includes(`Boeing`));
console.log(planes.startsWith(`Airb`));

if (planes.startsWith(`Airbus`) && planes.endsWith(`neo`))
  console.log(`part of the new Airbus family`);

// practice exercise
const checkBabbage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`you are NOT allowed on board`);
  } else {
    console.log(`Welcome on aboard`);
  }
};
checkBabbage(`I have a laptop, some Food and a pocket Knife`);
checkBabbage(`Socks and camera`);
checkBabbage(`Got some snacks and a gun for protection`);

// WORKING WITH STRING PART 3
// split and join
console.log(`a+very+nice+string`.split(`+`));
console.log(`jonas Schmedtmann`.split(` `));
const [firstName, lastName] = `joans Schmedtmann`.split(` `);

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // or using
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
};
capitalizeName(`jessica ann smith davies`);
capitalizeName(`jonas schmedtmann`);

// padding
const message = `Go to gate 23!`;
console.log(message.padStart(25, `+`).padEnd(35, `+`));
console.log(`Jonas`.padStart(25, `+`).padEnd(35, `+`));
const maskCreditCard = function (number) {
  const str = number + ``;
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard(`33838473999`));
// repeat
const message2 = `Bad weather ....All departure Delayed...`;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈️`.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector(`button`);
const textvalue = document.querySelector(`textarea`);

text.addEventListener(`click`, function () {
  const inputt = textvalue.value;
  const rows = inputt.split(`\n`);
  console.log(rows);
  // my own challenge answer
  // console.log(rows);
  // const completed = [];
  // for (const [i,n] of rows.entries()) {
  //   const splitt = n.slice(0, n.indexOf(`_`));
  //   // console.log(splitt);
  //   const rest = n.slice(n.indexOf(`_`) + 1);
  //   completed.push(splitt + rest.replace(rest[0], rest[0].toUpperCase()));
  // }
  // console.log(completed);
  for (const [i, row] of rows.entries()) {
    console.log(i, row);
    const [first, second] = row.toLowerCase().trim().split(`_`);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${`✅`.repeat(i + 1)}`);
  }
});
