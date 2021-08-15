import { Status } from '../../constants';
import { State } from '../../types';
import { Pair } from '../../types/main-types';

export const status = (state: State): Status => state.mainPage.pairs.status;

export const pair = (state: State): Pair[] => state.mainPage.pairs.pairs;
