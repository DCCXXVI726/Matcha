import * as types from '../../action-types';
import { UserLocation } from '../../types';

interface UserLocationFetchAction {
    type:
        typeof types.GET_LOCATION_LEGAL |
        typeof types.GET_LOCATION_ILLEGAL |
        typeof types.GET_LOCATION_ERROR

    payload: UserLocation
}

export type Action = UserLocationFetchAction;

export const initialState: UserLocation = {
    lat: 0,
    lon: 0,
    center: {
        lat: 0,
        lon: 0
    }
};

export default (state = initialState, action: Action): UserLocation => {
    switch (action.type) {
        case types.GET_LOCATION_LEGAL:
        case types.GET_LOCATION_ILLEGAL:
            return { ...state, ...action.payload };

        case types.GET_LOCATION_ERROR:
            return { ...state };

        default:
            return state;
    }
};
