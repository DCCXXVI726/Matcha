import * as types from '../../action-types';
import { ERROR, LOADING, SUCCESS } from '../../constants';
import { MessagesList, MessagesListItem } from '../../types/main-types';

interface MessagesListFetchAction {
    type:
        typeof types.MESSAGES_LIST_ERROR |
        typeof types.MESSAGES_LIST_LOADING |
        typeof types.MESSAGES_LIST_FETCH

    payload: MessagesListItem[]
}

export type Action = MessagesListFetchAction;

export const initialState: MessagesList = {
    messages: [],
    status: SUCCESS
};

export default (state = initialState, action: Action): MessagesList => {
    switch (action.type) {
        case types.MESSAGES_LIST_LOADING:
            return { ...state, status: LOADING };

        case types.MESSAGES_LIST_FETCH:
            return { status: SUCCESS, messages: action.payload };

        case types.MESSAGES_LIST_ERROR:
            return { ...state, status: ERROR };

        default:
            return state;
    }
};
