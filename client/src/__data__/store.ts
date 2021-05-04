import {
    createStore as createReduxStore,
    combineReducers,
    applyMiddleware,
    compose,
    Reducer,
    CombinedState,
    Store
} from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import {
    User,
    Feedbacks,
    Genders,
    Interests,
    Lang,
    AccountRecovery
} from './types';

import {
    user,
    feedbacks,
    genders,
    interests,
    lang,
    accountRecovery
} from './reducers';

export const createReducer = (): Reducer<CombinedState<{
    user: User
    feedbacks: Feedbacks
    genders: Genders
    interests: Interests
    lang: Lang
    accountRecovery: AccountRecovery
    form: FormStateMap
}>> => combineReducers({
    user,
    feedbacks,
    genders,
    interests,
    lang,
    accountRecovery,
    form: formReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const createStore = (): Store => {
    const reducer = createReducer();

    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

    return composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
    )(createReduxStore)(reducer, {});
};

export default createStore();
