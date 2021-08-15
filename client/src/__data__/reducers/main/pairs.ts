import * as types from '../../action-types';
import { ERROR, LOADING, SUCCESS } from '../../constants';
import { Pairs, Pair } from '../../types/main-types';

interface PairsFetchAction {
    type:
        typeof types.PAIRS_ERROR |
        typeof types.PAIRS_LOADING |
        typeof types.PAIRS_FETCH

    payload: Pair[]
}

export type Action = PairsFetchAction;

export const initialState: Pairs = {
    pairs: [],
    status: SUCCESS
};

export default (state = initialState, action: Action): Pairs => {
    switch (action.type) {
        case types.PAIRS_LOADING:
            return { ...state, status: LOADING };

        case types.PAIRS_FETCH:
            return { status: SUCCESS, pairs: action.payload };

        case types.PAIRS_ERROR:
            return { ...state, status: ERROR };

        default:
            return state;
    }
};
