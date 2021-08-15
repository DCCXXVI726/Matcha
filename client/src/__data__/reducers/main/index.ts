import { combineReducers } from 'redux';

import { MainPage } from '../../types/main-types';

import pairs, {
    Action as PairsAction,
    initialState as pairsInitialState
} from './pairs';
// import {} from './messages-by-user';
// import {} from './messages-list';

const reducers = combineReducers({
    pairs
});

type Action =
    PairsAction

const initialState: MainPage = {
    pairs: pairsInitialState
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
