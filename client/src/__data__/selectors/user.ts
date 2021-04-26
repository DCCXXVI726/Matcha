import { State, Status } from '../types';

export const status = (state: State): Status => {
    return state.user.status;
};

export const login = (state: State): string => {
    return state.user.login;
};
