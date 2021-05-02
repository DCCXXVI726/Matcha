import { Feedback, State, Status } from '../types';

export const status = (state: State): Status => {
    return state.genders.status;
};

export const data = (state: State): string[] => {
    return state.genders.data;
};
