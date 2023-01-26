let js = "amazing";
if ((js = "amazing"));
alert("hello world");
console.log(40 - 2904 + 38730);
let faroukMustapha = 354;
console.log(typeof faroukMustapha);
//let read;
let read;
read = 344;
console.log(read);
console.log(typeof read);

let x = 15;
x += 20;
console.log(x);

const markMass = 78;
const markHeight = 1.69;
markBmi = markMass / markHeight ** 2;

const johnMass = 92;
const johnHeight = 1.95;
johnBmi = johnMass / (johnHeight * johnHeight);

const markHigherMark = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherMark);

const faroukAyo = `he's a guy that is ${johnMass} years old`;
console.log(faroukAyo);

if (markBmi > johnBmi) {
  console.log(`mark's BMI (${markBmi}) is higher than john's BMI (${johnBmi})`);
} else {
  console.log(`john's BMI (${johnBmi}) is higher than mark's BMI(${markBmi})`);
}

const faroukAge = "frk";
console.log(Number(faroukAge) + 18);
console.log(typeof NaN);
console.log(String(4939), 4939);
console.log(23);

// const fav= Number(prompt("whats ur favourite colour?"))
// console.log(fav)
// if (fav===23){
//     console.log("yes, the modafucker is divisible by 23")
// }
// else if (fav===5){
//     console.log("divisible by 5")
// }

// else{console.log("i dont know")}

// const averagedolphine=(97+112+80)/3
// const averagekaolas=(109+95+50)/3
// console.log(averagedolphine,averagekaolas)
// if (averagedolphine>averagekaolas &&  (averagedolphine || averagekaolas)>=100){
//     console.log("dolphine is the winner")
// }
// else if(averagekaolas>averagedolphine && (averagedolphine || averagekaolas)>=100){
//     console.log("kaolas is the winner")
// }
// else if(averagekaolas===averagedolphine && (averagedolphine || averagekaolas)>=100){
//     console.log("the match is drawn")}
// else{console.log("no team wins")}

const day = "tuesday";

switch (day) {
  case "monday":
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare tutorial videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
}

if (day === "monday") {
  console.log("plan course structure \n\
    go to course meetup");
} else if (day === "tuesday") {
  console.log("prepare tutorial videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend");
}
const age = 23;

const drink = age >= 18 ? "wine🍜" : "water💧";
console.log(drink);
console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
const billValue = Number(prompt("what is ur bill value"));

const tip =
  billValue >= 50 <= 300 ? (billValue * 15) / 100 : (billValue * 20) / 100;

console.log(`the bill was ${billValue},the tip was ${tip},
 the total value is ${billValue + tip}`);
