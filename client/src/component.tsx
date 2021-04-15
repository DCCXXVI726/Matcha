import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';
import { Router as ReactRouter, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { createStore } from './__data__/index';

import { ThemeWrapper } from './theme';

import { Main } from './pages/main';
import { Login } from './pages/login';
import { Auth } from './pages/auth';
import { NotFound } from './pages/not-found';

import { MainContainerStyled } from './index.style';

export const store = createStore();

const history = createBrowserHistory();

const MainContainer = (): JSX.Element => (
    <Provider store={store}>
        <MainContainerStyled>
            <ReactRouter history={history}>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/login' component={Login} />
                    <Route path='/auth' component={Auth} />
                    <Route component={NotFound} />
                </Switch>
            </ReactRouter>
        </MainContainerStyled>
    </Provider>
);

export const Component = (): JSX.Element => (
    <ThemeWrapper>
        <MainContainer />
    </ThemeWrapper>
);
