// import axios from 'axios';
import * as types from '../action-types';

export const fetchLogin = (login: string, password: string): void => {
    return (dispatch): void => {;
        dispatch({
            type: types.AUTH_LOADING
        });
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    login: login,
                    password: password
                }
            })
        })
            .then(res => res.json())
            .then(res => dispatch({
                type: types.AUTH_FETCH,
                payload: res
            }))
            .catch(() => dispatch({
                type: types.AUTH_ERROR,
            }));
    };
};
