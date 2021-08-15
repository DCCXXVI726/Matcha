import * as types from '../../action-types';
import { ERROR, LOADING, SUCCESS } from '../../constants';
import { User } from '../../types/login-page';

interface UserFetchAction {
    type:
        typeof types.AUTH_LOADING |
        typeof types.AUTH_ERROR |
        typeof types.AUTH_FETCH

    payload: string
}

export type Action = UserFetchAction;

export const initialState: User = {
    status: SUCCESS,
    login: ''
};

export default (state = initialState, action: Action): User => {
    switch (action.type) {
        case types.AUTH_LOADING:
            return { ...state, status: LOADING };

        case types.AUTH_FETCH:
            return { status: SUCCESS, login: action.payload };

        case types.AUTH_ERROR:
            return { ...state, status: ERROR };

        default:
            return state;
    }
};
