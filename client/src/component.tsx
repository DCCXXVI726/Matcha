import React, { Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import { PrivateRoute } from './utils';
import { createStore } from './__data__';

const Login = React.lazy(() => import(/* webpackChunkName: "pages: login" */ './pages/login').then(module => ({ default: module.Login })));
const OnBoarding = React.lazy(() => import(/* webpackChunkName: "pages: onboarding" */ './pages/onboarding').then(module => ({ default: module.OnBoarding })));
const NotFound = React.lazy(() => import(/* webpackChunkName: "pages: not-found" */ './pages/not-found').then(module => ({ default: module.NotFound })));

import { ThemeWrapper } from './components/theme';
import { SessionContext, getSessionCookie } from './session';
import { Disconnect } from './components/popup-messages/disconnect';
import { GlobalStyles } from './utils';

export const store = createStore();

export const history = createBrowserHistory();
import Cookies from 'js-cookie';
const MainContainer = (): JSX.Element => {
    const [session, setSession] = useState(getSessionCookie());
    window.kek = Cookies;
    // console.log(session)

    useEffect(() => {
        // console.log(session)
        // setSession(getSessionCookie());
        // console.log(session)
    }, []);

    return (
        <SessionContext.Provider value={session}>
            <Provider store={store}>
                <Suspense fallback={<></>}>
                    <Router history={history}>
                        <Switch>
                            <Route path='/login' component={Login} />
                            <Route path='/onboarding' component={OnBoarding} />
                            <PrivateRoute path='/main' component={() => <div>lox</div>} />
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
