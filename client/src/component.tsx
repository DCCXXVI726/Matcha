import React, { Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import { createStore } from './__data__';

const Login = React.lazy(() => import(/* webpackChunkName: "pages: login" */ './pages/login').then(module => ({ default: module.Login })));
const OnBoarding = React.lazy(() => import(/* webpackChunkName: "pages: onboarding" */ './pages/onboarding').then(module => ({ default: module.OnBoarding })));
const NotFound = React.lazy(() => import(/* webpackChunkName: "pages: not-found" */ './pages/not-found').then(module => ({ default: module.NotFound })));
const Main = React.lazy(() => import(/* webpackChunkName: "pages: main" */ './pages/main').then(module => ({ default: module.Main })));

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
                <Suspense fallback='<div>...</div>'>
                    <Router history={history}>
                        <Switch>
                            <Route path='/login' component={Login} />
                            <Route path='/onboarding' component={OnBoarding} />
                            <Route exact path='/' component={Main} />
                            <Route path='*' component={NotFound} />
                        </Switch>
                    </Router>
                </Suspense>
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
