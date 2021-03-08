import axios from 'axios';
import * as types from '../action-types';

export const fetchLogin = (): void => {
    return (dispatch): void => {
        dispatch({
            type: types.AUTH_LOADING
        });
        axios.get('/api/login')
            .then((response) => dispatch({
                type: types.AUTH_FETCH,
                payload: response.data
            }))
            .catch((e) => {
                console.error(e);
                dispatch({ type: types.AUTH_ERROR });
            });
    };
};
