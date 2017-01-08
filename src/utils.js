// @flow
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const getCustomRandomInt = () => getRandomInt(0, 100);
const numToSortedArray = (num: number) => num.toString().split('').map(n => parseInt(n, 10)).sort()
  .slice();

const arrayToInt = (array: Array<number>) => parseInt(array.join(''), 10);

export { getCustomRandomInt, getRandomInt, numToSortedArray, arrayToInt };
