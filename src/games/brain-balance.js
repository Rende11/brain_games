// @flow
import playFullGame from '../';
import { getRandomInt, numToSortedArray, arrayToInt } from '../utils';

const description = 'Balance the given number.\n';

const generate = () => getRandomInt(100, 1000);

const isBalansed = numArray => numArray[numArray.length - 1] - numArray[0] <= 1;

const smooth = (arr) => {
  const smoothedArray = arr.slice();
  smoothedArray[0] = arr[0] + 1;
  smoothedArray[smoothedArray.length - 1] = arr[arr.length - 1] - 1;
  return smoothedArray.sort().slice();
};

const balance = (number) => {
  const sortedArray = numToSortedArray(number);
  if (isBalansed(sortedArray)) {
    return arrayToInt(sortedArray);
  }
  const smoothed = smooth(sortedArray);
  return balance(arrayToInt(smoothed));
};

const toString = number => number.toString();

export default () => playFullGame(description, generate, balance, toString);
