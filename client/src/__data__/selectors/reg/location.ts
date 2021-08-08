import { State, UserLocation } from '../../types';

export const location = (state: State): UserLocation => state.regPage.location;
