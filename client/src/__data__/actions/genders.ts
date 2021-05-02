import { Dispatch } from 'redux';

import * as types from '../action-types';
import { convertArgsToUrlParams } from '../utils/convert-args-to-url-params';

export default (lang: string ) => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch({
            type: types.GENDERS_LOADING
        });

        const url = new URL('http://localhost:3030/api/genders');
        const params = convertArgsToUrlParams({ lang });
        url.search = new URLSearchParams(params).toString();
        const response = await fetch(url.toString());

        if (!response.ok) {
            console.warn(`An error has occured: ${response.status}`);
            dispatch({
                type: types.GENDERS_ERROR
            });
        } else {
            const json = await response.json();
            dispatch({
                type: types.GENDERS_FETCH,
                payload: json.genders
            });
        }
    };
};
