import { Dispatch } from 'redux';
import * as types from '../action-types';

export const changeLang = (lang: string) => {
    return (dispatch: Dispatch): void => {
        dispatch({
            type: types.CHANGE_LANG,
            payload: lang
        });

    };
};
