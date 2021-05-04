import * as types from '../../action-types';
import { ERROR, LOADING, SUCCESS } from '../../constants';
import { AccountRecovery } from '../../types';

interface FeedbacksFetchAction {
    type:
        typeof types.ACCOUNT_RECOVERY_FETCH |
        typeof types.ACCOUNT_RECOVERY_LOADING |
        typeof types.ACCOUNT_RECOVERY_ERROR
}

export type Action = FeedbacksFetchAction;

export const initialState: AccountRecovery = {
    status: SUCCESS
};

export default (state = initialState, action: Action): AccountRecovery => {
    switch (action.type) {
        case types.ACCOUNT_RECOVERY_LOADING:
            return { ...state, status: LOADING };

        case types.ACCOUNT_RECOVERY_FETCH:
            return { ...state, status: SUCCESS };

        case types.ACCOUNT_RECOVERY_ERROR:
            return { ...state, status: ERROR };

        default:
            return state;
    }
};
