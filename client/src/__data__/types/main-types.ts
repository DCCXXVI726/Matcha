import { Status } from '../constants';

export interface Pair {
    name: string
    avatar: string
}

export interface Pairs {
    status: Status
    pairs: Pair[]
}

export interface MainPage {
    pairs: Pairs
}
