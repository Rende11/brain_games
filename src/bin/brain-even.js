#!/usr/bin/env node
// @flow
import readlineSync from 'readline-sync';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getMyRandom = () => getRandomInt(0, 100);

const showQuestion = (number) => {
  console.log(`Question: ${number}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');


const play = () => {
  const number = getMyRandom();
  showQuestion(number);
  const userChoise = getAnswer();
  const correctChoise = isEven(number);
  return correctChoise === userChoise ? 'Correct!' : `${userChoise} is wrong answer ;(. Correct answer was ${correctChoise}.`;
};


const playFullGame = (maxAttempts) => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number odd otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (acc) => {
    if (acc === maxAttempts) {
      return `Congratulations, ${name}!`;
    }
    const result = play();
    console.log(result);

    if (result === 'Correct!') {
      return iter(acc + 1);
    }
    return `Let's try again, ${name}!`;
  };
  return iter(0);
};

console.log(playFullGame(3));
