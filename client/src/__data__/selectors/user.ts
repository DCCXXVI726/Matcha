import { State } from '../types';

export const status = (state: State): string => {
    return state?.default.user.status;
};

export const login = (state: State): string => {
    return state?.default.user.login;
};
