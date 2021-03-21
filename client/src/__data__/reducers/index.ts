import * as types from '../action-types';
import { ERROR, LOADING, SUCCESS } from '../constants';
import { User } from '../types';

const initialState = {
// const initialState: User = {
    user: {
        status: LOADING,
        login: ''
    }
};

export default (state = initialState, action): any => {
    switch (action.type) {
        case types.AUTH_FETCH:
            return {
                ...state, user: { status: SUCCESS, login: action.payload }
            };

        case types.AUTH_ERROR:
            return {
                ...state,
                user: {
                    ...state.user,
                    status: ERROR
                }
            };
    }
    return state;
};
