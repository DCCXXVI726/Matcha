import { Dispatch } from 'redux';

import { baseUrl, fetchWithTimeout } from '../../../utils';
import * as types from '../../action-types';
import { convertArgsToUrlParams } from '../../utils/convert-args-to-url-params';

export const fetchInterests = (lang: string) => async (dispatch: Dispatch): Promise<void> => {
    dispatch({
        type: types.INTERESTS_LOADING
    });

    const url = new URL(`${baseUrl()}/static/interests`);
    const params = convertArgsToUrlParams({ lang });
    url.search = new URLSearchParams(params).toString();

    try {
        const response = await fetchWithTimeout(url.toString()) as Response;

        if (!response.ok) {
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
        dispatch({
            type: types.INTERESTS_ERROR
        });
    }
};
