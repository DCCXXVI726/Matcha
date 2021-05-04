import { State, Status } from '../../types';

export const status = (state: State): Status => {
    return state.regPage.genders.status;
};

export const data = (state: State): string[] => {
    return state.regPage.genders.data;
};
