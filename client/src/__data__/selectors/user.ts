import { State } from '../types';

export const status = (state: State): string => {
    return state.user.status;
};

export const login = (state: State): string => {
    return state.user.login;
};
