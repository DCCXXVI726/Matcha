import { KeyValue, State, Status } from '../types';

export const status = (state: State): Status => {
    return state.interests.status;
};

export const data = (state: State): KeyValue[] => {
    return state.interests.data;
};
