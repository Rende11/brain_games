// @flow
import playFullGame from '../';
import { getCustomRandomInt } from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const generate = () => [getCustomRandomInt(), getCustomRandomInt()];

const gcd = (array) => {
  const first = array[0];
  const second = array[1];

  const iter = (m, n) => {
    if (m === n) {
      return m;
    }
    if (m > n) {
      return iter(m - n, n);
    }
    return iter(m, n - m);
  };
  return iter(first, second);
};

const toString = array => `${array[0]} ${array[1]}`;

export default () => playFullGame(description, generate, gcd, toString);
