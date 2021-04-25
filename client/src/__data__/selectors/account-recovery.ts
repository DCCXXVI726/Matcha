import { State, Status } from '../types';

export const status = (state: State): Status => {
    return state.accountRecovery.status;
};

export const email = (state: State): string => {
    return state.form['account-recovery']?.values?.email || '';
};
