#!/usr/bin/env node
// @flow

import { playEven } from './games/brain-even';
import calc from './games/brain-calc';

const start = (gameName :string) => {
  switch (gameName) {
    case 'even':
      return playEven();
    case 'calc':
      return calc();
    default:
      return 'Cannot find game';
  }
};

export default start;
