// @flow
import playFullGame from '../';
import { getRandomInt, getCustomRandomInt } from '../utils';

const description = 'What number is missing in this progression?\n';

const generate = () => {
  const start = getCustomRandomInt();
  const step = getRandomInt(0, 10);
  const points = getRandomInt(2, 9);
  const seq = [start];
  for (let i = 0; i < 10; i += 1) {
    seq.push(seq[seq.length - 1] + step);
  }
  seq[points] = '..';
  return seq.slice();
};

const target = (array) => {
  const indexLast = array.findIndex(item => item === '..') - 1;
  const indexFirst = indexLast - 1;
  const step = array[indexLast] - array[indexFirst];
  return array[indexLast] + step;
};

const toString = array => array.toString().split(',').join(' ');

export default () => playFullGame(description, generate, target, toString);
