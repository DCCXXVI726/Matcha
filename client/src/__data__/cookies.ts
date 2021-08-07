import Cookies from 'js-cookie';

const COOKIE_NAME = 'keksion';

export const setSessionCookie = (token: string): void => {
    Cookies.remove(COOKIE_NAME);
    Cookies.set(COOKIE_NAME, token);
};

export const getSessionCookie = (): string | undefined => Cookies.get(COOKIE_NAME);
