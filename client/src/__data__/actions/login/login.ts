import { Dispatch } from 'redux';

import { setSessionCookie } from '../../cookies';
import { fetchWithTimeout } from '../../../utils';
import * as types from '../../action-types';

export const fetchLogin = (email: string, password: string) => async (dispatch: Dispatch): Promise<void> => {
    dispatch({
        type: types.AUTH_LOADING
    });

    try {
        const response = await fetchWithTimeout('/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }) as Response;

        if (!response.ok) {
            dispatch({
                type: types.AUTH_ERROR
            });
        } else {
            const json = await response.json();
            setSessionCookie(json);
            dispatch({
                type: types.AUTH_FETCH,
                payload: json
            });
        }
    } catch (error) {
        dispatch({
            type: types.AUTH_ERROR
        });
    }
};
