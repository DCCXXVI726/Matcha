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

    const composeEnhancers = compose;

    return composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
    )(createReduxStore)(reducer, {});
};

export default createStore();
