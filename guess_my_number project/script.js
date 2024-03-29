// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 20;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

// document.querySelector(`.check`).addEventListener(`click`);

let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    console.log(
      //   (document.querySelector(`.message`).textContent = `⛔ No number`)
      displayMessage(`⛔ No number`)
    );
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `🎉! correct number`;
    displayMessage(`🎉! correct number`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(`.message`).textContent =
      //     guess > secretNumber ? `Too high!` : `Too Low!`;
      score--;
      displayMessage(guess > secretNumber ? `Too high!` : `Too Low!`);
      document.querySelector(`.score`).textContent = score;
    } else {
      //   document.querySelector(`.message`).textContent = `you lost the game😆!`;
      displayMessage(`you lost the game😆!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }

  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `Too high!`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `you lost the game😆!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //     // when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `Too Low!`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `you lost the game😆!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //   }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
});
