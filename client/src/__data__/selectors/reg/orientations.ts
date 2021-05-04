import { KeyValue, State, Status } from '../../types';

export const status = (state: State): Status => {
    return state.regPage.orientations.status;
};

export const data = (state: State): KeyValue[] => {
    return state.regPage.orientations.data;
};
