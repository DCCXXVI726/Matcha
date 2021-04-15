import { ERROR, LOADING, SUCCESS } from './constants';

export type Status = typeof ERROR | typeof LOADING | typeof SUCCESS

export interface User {
    status: Status
    login: string
}

export interface State {
    user: User
}
