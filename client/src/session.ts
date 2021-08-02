import React from 'react';
import Cookies from 'js-cookie';

export const setSessionCookie = (session: any): void => {
    // TODO: change
    Cookies.remove('keksion');
    Cookies.set('keksion', session, { expires: 14 });
};

export const getSessionCookie: any = () => {
    // fetch на бек
    const sessionCookie = Cookies.get('keksion');

    if (sessionCookie === undefined) {
        return null;
    } else {
        return JSON.parse(sessionCookie);
    }
};

export const SessionContext = React.createContext(getSessionCookie());
