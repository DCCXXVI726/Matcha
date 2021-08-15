import * as types from '../action-types';
import { Lang } from '../types';

interface LangAction {
    type: typeof types.CHANGE_LANG
    payload: 'ru' | 'en'
}

type Action = LangAction;

const initialState: Lang = {
    current: 'ru'
};

export default (state = initialState, action: Action): Lang => {
    switch (action.type) {
        case types.CHANGE_LANG:
            return { ...state, current: action.payload };

        default:
            return state;
    }
};
