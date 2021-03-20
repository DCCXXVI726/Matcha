import { Dispatch } from 'redux';
import * as types from '../action-types';

export const fetchLogin = (login: string, password: string) => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch({
            type: types.AUTH_LOADING
        });
        const response = await fetch('/api/login', {
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
        });

        if (!response.ok) {
            console.warn(`An error has occured: ${response.status}`);
            dispatch({
                type: types.AUTH_ERROR
            });
        } else {
            const json = await response.json();
            dispatch({
                type: types.AUTH_FETCH,
                payload: json
            });
        }
    };
};
