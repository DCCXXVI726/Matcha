import { State, Status } from '../../types';

export const status = (state: State): Status => {
    return state.loginPage.user.status;
};

export const login = (state: State): string => {
    return state.loginPage.user.login;
};
