import { State } from '../../types';
import { UserLocation } from '../../types/reg-page';

export const location = (state: State): UserLocation => state.regPage.location;
