import * as types from '../../action-types';
import { ERROR, LOADING, SUCCESS } from '../../constants';
import { Feedbacks, Feedback } from '../../types';

interface FeedbacksFetchAction {
    type:
        typeof types.FEEDBACKS_ERROR |
        typeof types.FEEDBACKS_LOADING |
        typeof types.FEEDBACKS_FETCH

    payload: Feedback[]
}

export type Action = FeedbacksFetchAction;

export const initialState: Feedbacks = {
    data: [],
    status: SUCCESS
};

export default (state = initialState, action: Action): Feedbacks => {
    switch (action.type) {
        case types.FEEDBACKS_LOADING:
            return { ...state, status: LOADING };

        case types.FEEDBACKS_FETCH:
            return { status: SUCCESS, data: action.payload };

        case types.FEEDBACKS_ERROR:
            return { ...state, status: ERROR };

        default:
            return state;
    }
};
