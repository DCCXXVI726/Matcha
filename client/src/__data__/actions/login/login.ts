import { Dispatch } from 'redux';
import * as types from '../../action-types';

export const fetchLogin = (email: string, password: string) => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch({
            type: types.AUTH_LOADING
        });

        const response = await fetch('/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            console.warn(`An error has occured: ${response.status}`);
            dispatch({
                type: types.AUTH_ERROR
            });
        } else {
            // console.dir(response.headers);
            const json = await response.json();
            // console.dir(json);
            /* eslint-disable-next-line no-console */
            dispatch({
                type: types.AUTH_FETCH,
                payload: json
            });
        }
    };
};
