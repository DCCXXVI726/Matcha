import * as types from '../action-types';

export default (state = {}, action): any => {
    switch (action.type) {
        case types.AUTH_FETCH: {
            return { ...state, ...{ data: action.payload } };
        }
    }
    return state;
};
