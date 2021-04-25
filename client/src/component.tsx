import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Global, css, SerializedStyles } from '@emotion/react';
import { Link } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import Cookies from 'js-cookie';

import { createStore } from './__data__';


import { Login } from './pages/login';
import { NotFound } from './pages/not-found';

import { ThemeWrapper, ThemeColors } from './theme';
import { SessionContext, getSessionCookie } from './session';
import { InternetSnackbar } from './components/internet-snackbar';

export const store = createStore();

export const history = createBrowserHistory();

interface Props {
    history: History
}

const LogoutHandler = ({ history }: Props): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        Cookies.remove('session');
        history.push('/login');
    }, [history]);

    return <p>{t('logout')}</p>;
};

const ProtectedHandler = ({ history }: Props): JSX.Element => {
    const { t } = useTranslation();
    const session = useContext(SessionContext);

    if (session.email === undefined) {
        history.push('/login');
    }

    console.warn(session.email);

    return (
        <div>
            <p>
                <Link to='/kek'>main</Link>
            </p>
            <p>
                <Link to='/logout'>{t('logout')}</Link>
            </p>
        </div>
    );
};

const PrivateRoute = ({ ...rest }): JSX.Element => {
    const session = useContext(SessionContext);

    return (
        session.email
            ? <Route {...rest} />
            : <Redirect to={{ pathname: '/login' }} />
    );
};

const MainContainer = (): JSX.Element => {
    const [session, setSession] = useState(getSessionCookie());
    const [isOffline, setStatus] = useState<boolean>(false);

    const toggleStatus = (status: boolean): void => setStatus(status);

    const networkHandler = useCallback((): void => {
        navigator.onLine ? setStatus(false) : setStatus(true);
        window.addEventListener('online', () => toggleStatus(false));
        window.addEventListener('offline', () => toggleStatus(true));
    }, []);

    useEffect(() => {
        setSession(getSessionCookie());
    }, [session]);

    useEffect(() => {
        window.addEventListener('load', () => networkHandler());
        return (): void => {
            window.removeEventListener('offline', () => toggleStatus(false));
            window.removeEventListener('online', () => toggleStatus(true));
            window.removeEventListener('load', () => networkHandler());
        };
    }, [networkHandler]);

    return (
        <SessionContext.Provider value={session}>
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/logout' component={LogoutHandler} />
                        <PrivateRoute exact path='/' component={ProtectedHandler} />
                        <PrivateRoute path='*' component={NotFound} />
                    </Switch>
                </Router>
                {isOffline && <InternetSnackbar />}
            </Provider>
        </SessionContext.Provider>
    );
};

const GlobalStyles = (): JSX.Element => {
    return (
        <Global styles={(theme): SerializedStyles => css`
        body {
            background-color: ${(theme as ThemeColors).primary};
            background-image:
                linear-gradient(45deg, transparent 25%, ${(theme as ThemeColors).secondary} 25%, transparent 25%),
                linear-gradient(-45deg, transparent 25%, ${(theme as ThemeColors).secondary} 25%, transparent 25%),
                linear-gradient(-45deg, transparent 75%, ${(theme as ThemeColors).secondary} 75%, transparent 0),
                radial-gradient(gray 1px, transparent 0);
            background-size: 40px 40px, 40px 40px;
        }
    `} />
    );
};

export const Component = (): JSX.Element => (
    <ThemeWrapper>
        <GlobalStyles />
        <MainContainer />
    </ThemeWrapper>
);
