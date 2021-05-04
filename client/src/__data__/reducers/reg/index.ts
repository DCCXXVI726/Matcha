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

import orientations, {
    Action as OrientationsAction,
    initialState as orientationsInitialState
} from './orientations';

const reducers = combineReducers({
    genders,
    interests,
    orientations
});

type Action = GendersAction | InterestsAction | OrientationsAction

const initialState: RegPage = {
    genders: gendersInitialState,
    interests: interestsInitialState,
    orientations: orientationsInitialState
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
