// @flow
import playFullGame from '../';
import { getCustomRandomInt } from '../utils';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const description = 'Answer "yes" if number odd otherwise answer "no".\n';

const toString = number => number.toString();

export default () => playFullGame(description, getCustomRandomInt, isEven, toString);
