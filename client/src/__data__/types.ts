import { ERROR, LOADING, SUCCESS } from './constants';

export interface User {
    status: typeof ERROR | typeof LOADING | typeof SUCCESS
    login: string
}

export interface State {
    user: User
}
