import { State } from '../../types';
import { Status } from '../../constants';

export const status = (state: State): Status => state.regPage.interests.status;

export const data = (state: State): KeyValue[] => state.regPage.interests.data;
