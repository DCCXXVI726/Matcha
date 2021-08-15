import * as types from '../../action-types';
import { ERROR, LOADING, SUCCESS } from '../../constants';
import { KeyValueStructure } from '../../types/reg-page';

interface FeedbacksFetchAction {
    type:
        typeof types.INTERESTS_FETCH |
        typeof types.INTERESTS_LOADING |
        typeof types.INTERESTS_ERROR

    payload: KeyValue[]
}

export type Action = FeedbacksFetchAction;

export const initialState: KeyValueStructure = {
    data: [],
    status: SUCCESS
};

export default (state = initialState, action: Action): KeyValueStructure => {
    switch (action.type) {
        case types.INTERESTS_LOADING:
            return { ...state, status: LOADING };

        case types.INTERESTS_FETCH:
            return { status: SUCCESS, data: action.payload };

        case types.INTERESTS_ERROR:
            return { ...state, status: ERROR };

        default:
            return state;
    }
};
