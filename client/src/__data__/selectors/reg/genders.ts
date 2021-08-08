import { State, Status } from '../../types';

export const status = (state: State): Status => state.regPage.genders.status;

export const data = (state: State): string[] => state.regPage.genders.data;
