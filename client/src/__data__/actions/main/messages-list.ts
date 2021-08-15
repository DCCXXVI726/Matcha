import { Dispatch } from 'redux';

import { baseUrl, fetchWithTimeout } from '../../../utils';
import * as types from '../../action-types';
import { convertArgsToUrlParams } from '../../utils/convert-args-to-url-params';

export const fetchMessagesList = () => async (dispatch: Dispatch): Promise<void> => {
    dispatch({
        type: types.MESSAGES_LIST_LOADING
    });

    baseUrl();
    const url = new URL(`${baseUrl()}/api/messages-list`);
    // TODO: add pagination
    const params = convertArgsToUrlParams({});
    url.search = new URLSearchParams(params).toString();

    try {
        const response = await fetchWithTimeout(url.toString()) as Response;
        if (!response.ok) {
            dispatch({
                type: types.MESSAGES_LIST_ERROR
            });
        } else {
            const json = await response.json();
            dispatch({
                type: types.MESSAGES_LIST_FETCH,
                payload: json
            });
        }
    } catch (error) {
        dispatch({
            type: types.MESSAGES_LIST_ERROR
        });
    }
};
