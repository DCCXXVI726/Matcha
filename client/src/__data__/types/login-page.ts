import { Status } from '../constants';

export interface User {
    status: Status
    login: string
}

export interface Feedback {
    title: string
    description: string
}

export interface Feedbacks {
    data: Feedback[]
    status: Status
}

export interface AccountRecovery {
    status: Status
}

export interface LoginPage {
    user: User
    feedbacks: Feedbacks
    accountRecovery: AccountRecovery
}
