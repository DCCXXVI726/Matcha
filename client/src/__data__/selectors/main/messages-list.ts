import { Status } from '../../constants';
import { State } from '../../types';
import { MessagesListItem } from '../../types/main-types';

export const status = (state: State): Status => state.mainPage.messagesList.status;

export const messagesList = (state: State): MessagesListItem[] => state.mainPage.messagesList.messages;
