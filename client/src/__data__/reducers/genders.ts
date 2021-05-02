import * as types from '../action-types';
import { ERROR, LOADING, SUCCESS } from '../constants';
import { Genders } from '../types';

interface FeedbacksFetchAction {
    type:
        typeof types.GENDERS_ERROR |
        typeof types.GENDERS_LOADING |
        typeof types.GENDERS_FETCH

    payload: string[]
}

type Action = FeedbacksFetchAction;

const initialState: Genders = {
    data: [],
    status: SUCCESS
};

export default (state = initialState, action: Action): Genders => {
    switch (action.type) {
        case types.GENDERS_LOADING:
            return { ...state, status: LOADING };

        case types.GENDERS_FETCH:
            return { status: SUCCESS, data: action.payload };

        case types.GENDERS_ERROR:
            return { ...state, status: ERROR };

        default:
            return state;
    }
};
