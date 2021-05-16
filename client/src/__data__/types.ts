import { FormStateMap } from 'redux-form';
import { ERROR, LOADING, SUCCESS } from './constants';

export type Status = typeof ERROR | typeof LOADING | typeof SUCCESS

export type KeyValue = {
    [key: string]: string
}

export interface UserLocation {
    lat: number
    lon: number
    center: {
        lat: number
        lon: number
    }
}

export interface Lang {
    current: 'ru' | 'en'
}

export interface Feedback {
    title: string
    description: string
}

export interface Feedbacks {
    data: Feedback[]
    status: Status
}

export interface Genders {
    data: string[]
    status: Status
}

export interface KeyValueStructure {
    data: KeyValue[]
    status: Status
}

export interface User {
    status: Status
    login: string
}

export interface AccountRecovery {
    status: Status
}

export interface LoginPage {
    user: User
    feedbacks: Feedbacks
    accountRecovery: AccountRecovery
}

export interface RegPage {
    genders: Genders
    interests: KeyValueStructure
    orientations: KeyValueStructure
    location: UserLocation
}

export interface State {
    loginPage: LoginPage
    regPage: RegPage
    lang: Lang
    form: FormStateMap
}
