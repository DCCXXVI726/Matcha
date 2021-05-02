import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import { createStore } from './__data__';

import { Login } from './pages/login';
import { OnBoarding } from './pages/onboarding';
import { NotFound } from './pages/not-found';

import { ThemeWrapper } from './components/theme';
import { SessionContext, getSessionCookie } from './session';
import { InternetSnackbar } from './components/internet-snackbar';
import { GlobalStyles } from './utils/global-styles';
import { CircularProgress } from '@material-ui/core';

export const store = createStore();

export const history = createBrowserHistory();

const MainContainer = (): JSX.Element => {
    const [session, setSession] = useState(getSessionCookie());

    useEffect(() => {
        setSession(getSessionCookie());
    }, [session]);

    useEffect(() => {
        // return <CircularProgress />;
    }, []);

    return (
        <SessionContext.Provider value={session}>
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/onboarding' component={OnBoarding} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Router>
                <InternetSnackbar />
            </Provider>
        </SessionContext.Provider>
    );
};

export const Component = (): JSX.Element => (
    <ThemeWrapper>
        <GlobalStyles />
        <MainContainer />
    </ThemeWrapper>
);
