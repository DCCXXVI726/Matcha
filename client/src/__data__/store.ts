import {
    createStore as createReduxStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from './reducers';

export const createReducer = () =>
    combineReducers({
        ...reducers
    });

export const createStore = () => {
    const reducer = createReducer();

    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                name: 'Matcha21'
            })
            : compose;

    return composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
        )
    )(createReduxStore)(reducer, {});
};

export default createStore();
