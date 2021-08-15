import { FormStateMap } from 'redux-form';

import { LoginPage } from './types/login-page';
import { RegPage } from './types/reg-page';
import { MainPage } from './types/main-types';

export interface Lang {
    current: 'ru' | 'en'
}

export {
    LoginPage,
    RegPage,
    MainPage
};

export interface State {
    loginPage: LoginPage
    regPage: RegPage
    mainPage: MainPage
    lang: Lang
    form: FormStateMap
}
