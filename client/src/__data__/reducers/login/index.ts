import { combineReducers } from 'redux';

import { LoginPage } from '../../types';

import accountRecovery, {
    Action as AccountRecoveryAction,
    initialState as accountRecoveryInitialState
} from './account-recovery';

import feedbacks, {
    Action as FeedbacksAction,
    initialState as feedbacksInitialState
} from './feedbacks';

import user, {
    Action as UserAction,
    initialState as userInitialState
} from './user';

const reducers = combineReducers({
    accountRecovery,
    feedbacks,
    user
});

type Action =
    AccountRecoveryAction |
    FeedbacksAction |
    UserAction

const initialState: LoginPage = {
    accountRecovery: accountRecoveryInitialState,
    feedbacks: feedbacksInitialState,
    user: userInitialState
};

export default (state = initialState, action: Action): LoginPage => {
    let prefetched;
    switch (action.type) {
        default:
            prefetched = {
                ...state
            };
    }

    return {
        ...prefetched,
        ...reducers(prefetched, action)
    };
};
