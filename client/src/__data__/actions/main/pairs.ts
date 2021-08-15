import { Dispatch } from 'redux';

import { baseUrl, fetchWithTimeout } from '../../../utils';
import * as types from '../../action-types';
// import { convertArgsToUrlParams } from '../../utils/convert-args-to-url-params';

export const fetchPairs = () => async (dispatch: Dispatch): Promise<void> => {
    dispatch({
        type: types.PAIRS_LOADING
    });

    baseUrl();
    const url = new URL(`${baseUrl()}/dummy/pairs`);
    // TODO: add pagination
    // const params = convertArgsToUrlParams({});
    url.search = new URLSearchParams().toString();
    // url.search = new URLSearchParams(params).toString();

    try {
        const response = await fetchWithTimeout(url.toString()) as Response;
        if (!response.ok) {
            dispatch({
                type: types.PAIRS_ERROR
            });
        } else {
            const json = await response.json();
            dispatch({
                type: types.PAIRS_FETCH,
                payload: json.pairs
            });
        }
    } catch (error) {
        dispatch({
            type: types.PAIRS_ERROR
        });
    }
};
