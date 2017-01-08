#!/usr/bin/env node
// @flow

import playEven from './games/brain-even';
import playCalc from './games/brain-calc';

const start = (gameName :string) => {
  switch (gameName) {
    case 'even':
      return playEven();
    case 'calc':
      return playCalc();
    default:
      return 'Cannot find game';
  }
};

export default start;
