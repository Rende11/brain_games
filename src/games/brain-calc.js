// @flow
import playFullGame from '../';
import { getCustomRandomInt, getRandomInt } from '../utils';

const description = 'What is the result of the expression?\n';
const operations = ['+', '-', '*'];
const getRandomMathOperation = () => {
  const position = getRandomInt(0, operations.length);
  return operations[position];
};

const generate = () => [getCustomRandomInt(), getCustomRandomInt(), getRandomMathOperation()];

const toString = array => `${array[0]} ${array[2]} ${array[1]}`;

const calc = (array) => {
  const first = array[0];
  const second = array[1];
  const operation = array[2];
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      return 'wrong operation';
  }
};

export default () => playFullGame(description, generate, calc, toString);
