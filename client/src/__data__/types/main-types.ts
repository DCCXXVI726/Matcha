import { Status } from '../constants';

export interface MessagesListItem {
    name: string
    avatar: string
    'last-message': string
}

export interface Pair {
    name: string
    avatar: string
}

export interface MessagesList {
    status: Status
    messages: MessagesListItem[]
}

export interface Pairs {
    status: Status
    pairs: Pair[]
}

export interface MainPage {
    pairs: Pairs
    messagesList: MessagesList
}
