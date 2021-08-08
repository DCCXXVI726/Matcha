import { State, Status } from '../../types';

export const status = (state: State): Status => state.loginPage.accountRecovery.status;

export const email = (state: State): string => state.form['account-recovery']?.values?.email || '';
