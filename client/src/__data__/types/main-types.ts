import { Status } from '../constants';

export interface MessagesListItem {
    id: number
    name: string
    avatar: string
    'last-message': string
    'is-last-message-your': boolean
}

export interface Pair {
    id: number
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
