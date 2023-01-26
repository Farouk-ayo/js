'use strict';
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0EL = document.querySelector(`#score--0`);
const score1EL = document.getElementById(`score--1`);
const diceEL = document.querySelector(`.dice`);
const buttonNew = document.querySelector(`.btn--new`);
const buttonRoll = document.querySelector(`.btn--roll`);
const buttonHold = document.querySelector(`.btn--hold`);
const currentScore1 = document.getElementById(`current--0`);
const currentScore2 = document.getElementById(`current--1`);
let currentScore, score, activePlayer, playing;
const init = function () {
  currentScore = 0;
  score = [0, 0];
  activePlayer = 0;
  playing = true;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  diceEL.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

let playFunction = buttonRoll.addEventListener(`click`, function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEL.classList.remove(`hidden`);
    diceEL.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
    console.log(dice);
  }
});

let buttonFunction = buttonHold.addEventListener(`click`, function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      playing = false;
      diceEL.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    }
    switchPlayer();
  }
});

buttonNew.addEventListener(`click`, init);
