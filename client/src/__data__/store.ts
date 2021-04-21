import {
    createStore as createReduxStore,
    combineReducers,
    applyMiddleware,
    compose,
    Store
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from './reducers';

export const createReducer = () =>
    combineReducers({
        ...reducers
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
