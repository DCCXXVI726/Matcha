import { Status } from '../../constants';
import { State } from '../../types';

export const status = (state: State): Status => state.loginPage.user.status;

export const login = (state: State): string => state.loginPage.user.login;
