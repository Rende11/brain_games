// @flow
const getRandomInt = (min :number, max :number) => Math.floor(Math.random() * (max - min)) + min;
const getCustomRandomInt = () => getRandomInt(0, 100);

export { getCustomRandomInt, getRandomInt };
