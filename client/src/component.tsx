import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import { PrivateRoute, GlobalStyles } from './utils';
import { createStore } from './__data__';
import { ThemeWrapper } from './components/theme';
import { Disconnect } from './components/popup-messages/disconnect';
import { navigation } from './navigation';
import { Main } from './pages/main';
import { Messages } from './pages/messages';

const Login = React.lazy(() => import(/* webpackChunkName: "pages: login" */ './pages/login').then((module) => ({ default: module.Login })));
const OnBoarding = React.lazy(() => import(/* webpackChunkName: "pages: onboarding" */ './pages/onboarding').then((module) => ({ default: module.OnBoarding })));
const NotFound = React.lazy(() => import(/* webpackChunkName: "pages: not-found" */ './pages/not-found').then((module) => ({ default: module.NotFound })));

export const store = createStore();

export const history = createBrowserHistory();

const MainContainer = (): JSX.Element => (
    <Provider store={store}>
        <Suspense fallback={<></>}>
            <Router history={history}>
                <Switch>
                    <Route path={navigation.login} component={Login} />
                    <Route path={navigation.onboarding} component={OnBoarding} />
                    <PrivateRoute path={[navigation.messages, navigation.message]} component={Messages} />
                    <PrivateRoute exact path={navigation.index} component={Main} />
                    <PrivateRoute path='*' component={NotFound} />
                </Switch>
            </Router>
        </Suspense>
        <Disconnect />
    </Provider>
);

export const Component = (): JSX.Element => (
    <ThemeWrapper>
        <GlobalStyles />
        <MainContainer />
    </ThemeWrapper>
);
