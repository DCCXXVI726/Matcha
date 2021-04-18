import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import Cookies from 'js-cookie';

import { LoginComponent } from './pages/login';
import { NotFound } from './pages/not-found';

import { ThemeWrapper } from './theme';
import { SessionContext, getSessionCookie } from './session';

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

    useEffect(() => {
        setSession(getSessionCookie());
    }, [session]);

    return (
        <SessionContext.Provider value={session}>
            <Router history={history}>
                <Switch>
                    <Route path='/login' component={LoginComponent} />
                    <Route path='/logout' component={LogoutHandler} />
                    <PrivateRoute exact path='/' component={ProtectedHandler} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
        </SessionContext.Provider>
    );
};

export const Component = (): JSX.Element => (
    <ThemeWrapper>
        <MainContainer />
    </ThemeWrapper>
);
