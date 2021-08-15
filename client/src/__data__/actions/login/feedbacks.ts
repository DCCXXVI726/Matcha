import { Dispatch } from 'redux';

import { baseUrl, fetchWithTimeout } from '../../../utils';
import * as types from '../../action-types';
import { convertArgsToUrlParams } from '../../utils/convert-args-to-url-params';

export default (lang: string) => async (dispatch: Dispatch): Promise<void> => {
    dispatch({
        type: types.FEEDBACKS_LOADING
    });

    const url = new URL(`${baseUrl()}/static/feedbacks`);
    const params = convertArgsToUrlParams({ lang });
    url.search = new URLSearchParams(params).toString();

    try {
        const response = await fetchWithTimeout(url.toString()) as Response;
        if (!response.ok) {
            dispatch({
                type: types.FEEDBACKS_ERROR
            });
        } else {
            const json = await response.json();
            dispatch({
                type: types.FEEDBACKS_FETCH,
                payload: json.feedbacks
            });
        }
    } catch (error) {
        dispatch({
            type: types.FEEDBACKS_ERROR
        });
    }
};
