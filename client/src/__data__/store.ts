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
    Feedbacks
} from './types';

import {
    user,
    feedbacks
} from './reducers';

export const createReducer = (): Reducer<CombinedState<{
    user: User
    feedbacks: Feedbacks
    form: FormStateMap
}>> => combineReducers({
    user,
    feedbacks,
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
