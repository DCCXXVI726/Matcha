import { combineReducers } from 'redux';

import { MainPage } from '../../types/main-types';

import pairs, {
    Action as PairsAction,
    initialState as pairsInitialState
} from './pairs';
// import {} from './messages-by-user';
import messagesList, {
    Action as MessagesListAction,
    initialState as messagesInitialState
} from './messages-list';

const reducers = combineReducers({
    pairs,
    messagesList
});

type Action =
    PairsAction |
    MessagesListAction

const initialState: MainPage = {
    pairs: pairsInitialState,
    messagesList: messagesInitialState
};

export default (state = initialState, action: Action): MainPage => {
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
