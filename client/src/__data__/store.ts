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
    Lang,
    LoginPage,
    RegPage
} from './types';
import {
    loginPage,
    regPage,
    lang
} from './reducers';

export const createReducer = (): Reducer<CombinedState<{
    loginPage: LoginPage
    regPage: RegPage
    lang: Lang
    form: FormStateMap
}>> => combineReducers({
    loginPage,
    regPage,
    lang,
    form: formReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const createStore = (): Store => {
    const reducer = createReducer();

    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
    )(createReduxStore)(reducer, {});
};

export default createStore();
