import { Dispatch } from 'redux';

import { fetchWithTimeout } from '../../../utils';
import * as types from '../../action-types';
import { convertArgsToUrlParams } from '../../utils/convert-args-to-url-params';

export const fetchOrientations = (lang: string) => async (dispatch: Dispatch): Promise<void> => {
    dispatch({
        type: types.ORIENTATIONS_LOADING
    });

    const url = new URL('http://localhost:3030/static/orientations');
    const params = convertArgsToUrlParams({ lang });
    url.search = new URLSearchParams(params).toString();

    try {
        const response = await fetchWithTimeout(url.toString()) as Response;

        if (!response.ok) {
            dispatch({
                type: types.ORIENTATIONS_ERROR
            });
        } else {
            const json = await response.json();
            dispatch({
                type: types.ORIENTATIONS_FETCH,
                payload: json.orientations
            });
        }
    } catch (error) {
        dispatch({
            type: types.ORIENTATIONS_ERROR
        });
    }
};
