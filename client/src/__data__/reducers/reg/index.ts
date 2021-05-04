import { combineReducers } from 'redux';

import { RegPage } from '../../types';

import genders, {
    Action as GendersAction,
    initialState as gendersInitialState
} from './genders';

import interests, {
    Action as InterestsAction,
    initialState as interestsInitialState
} from './interests';

const reducers = combineReducers({
    genders,
    interests
});

type Action = GendersAction | InterestsAction

const initialState: RegPage = {
    genders: gendersInitialState,
    interests: interestsInitialState
};

export default (state = initialState, action: Action): RegPage => {
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
