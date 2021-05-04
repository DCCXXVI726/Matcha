import * as types from '../../action-types';
import { ERROR, LOADING, SUCCESS } from '../../constants';
import { KeyValueStructure, KeyValue } from '../../types';

interface OrientationsFetchAction {
    type:
        typeof types.ORIENTATIONS_FETCH |
        typeof types.ORIENTATIONS_LOADING |
        typeof types.ORIENTATIONS_ERROR

    payload: KeyValue[]
}

export type Action = OrientationsFetchAction;

export const initialState: KeyValueStructure = {
    data: [],
    status: SUCCESS
};

export default (state = initialState, action: Action): KeyValueStructure => {
    switch (action.type) {
        case types.ORIENTATIONS_LOADING:
            return { ...state, status: LOADING };

        case types.ORIENTATIONS_FETCH:
            return { status: SUCCESS, data: action.payload };

        case types.ORIENTATIONS_ERROR:
            return { ...state, status: ERROR };

        default:
            return state;
    }
};
