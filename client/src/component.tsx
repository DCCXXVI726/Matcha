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
import { Disconnect } from './components/popup-messages/disconnect';
import { GlobalStyles } from './utils';

export const store = createStore();

export const history = createBrowserHistory();

const MainContainer = (): JSX.Element => {
    const [session, setSession] = useState(getSessionCookie());

    useEffect(() => {
        setSession(getSessionCookie());
    }, [session]);

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
                <Disconnect />
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
