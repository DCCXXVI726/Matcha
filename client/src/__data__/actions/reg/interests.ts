import { Dispatch } from 'redux';
import { fetchWithTimeout } from '../../../utils';

import * as types from '../../action-types';
import { convertArgsToUrlParams } from '../../utils/convert-args-to-url-params';

export default (lang: string) => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch({
            type: types.INTERESTS_LOADING
        });

        const url = new URL('http://localhost:3030/api/interests');
        const params = convertArgsToUrlParams({ lang });
        url.search = new URLSearchParams(params).toString();

        try {
            const response = await fetchWithTimeout(url.toString()) as Response;

            if (!response.ok) {
                console.warn(`An error has occured: ${response.status}`);
                dispatch({
                    type: types.INTERESTS_ERROR
                });
            } else {
                const json = await response.json();
                dispatch({
                    type: types.INTERESTS_FETCH,
                    payload: json.interests
                });
            }
        } catch (error) {
            console.warn(`An error has occured: ${error}`);
            dispatch({
                type: types.INTERESTS_ERROR
            });
        }
    };
};
