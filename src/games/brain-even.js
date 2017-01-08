// @flow
// import readlineSync from 'readline-sync';
import playFullGame from '../common';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const getRandomInt = (min :number, max :number) => Math.floor(Math.random() * (max - min)) + min;

const description = 'Answer "yes" if number odd otherwise answer "no".\n';

const myRandInt = () => getRandomInt(0, 100);

const toString = number => number.toString();

const playEven = () => playFullGame(description, myRandInt, isEven, toString);

export { playEven, myRandInt, getRandomInt };
