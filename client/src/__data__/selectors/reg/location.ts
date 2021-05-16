import { State, UserLocation } from '../../types';

export const location = (state: State): UserLocation => {
    return state.regPage.location;
};
