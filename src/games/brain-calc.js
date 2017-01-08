// @flow
import playFullGame from '../common';
import { getRandomInt, myRandInt } from './brain-even';

const description = 'What is the result of the expression?\n';
const operations = '+-*/';
const getRandomMathOperation = () => {
  const position = getRandomInt(0, operations.length);
  return operations[position];
};

const generate = () => {
  const array = [];
  array.push(myRandInt());
  array.push(myRandInt());
  array.push(getRandomMathOperation());
  return array;
};

const toString = array => `${array[0]} ${array[2]} ${array[1]}`;

const calc = (array) => {
  switch (array[2]) {
    case '+':
      return array[0] + array[1];
    case '-':
      return array[0] - array[1];
    case '*':
      return array[0] * array[1];
    case '/':
      return array[0] / array[1];
    default:
      return 'wrong operation';
  }
};

export default () => playFullGame(description, generate, calc, toString);
