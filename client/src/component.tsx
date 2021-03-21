import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';
import { Router as ReactRouter, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { createStore } from './__data__/index';

import { ThemeWrapper } from './theme';

import { Header } from './components/header';
import { Navbar } from './components/navbar';

import { Main } from './pages/main';
import { Auth } from './pages/auth';
import { NotFound } from './pages/not-found';

import { MainContainerStyled, MainStyled } from './index.style';

export const store = createStore();

const history = createBrowserHistory();

const MainContainer = (): JSX.Element => (
    <Provider store={store}>
        <MainContainerStyled>
            <Header />
            <Navbar />
            <MainStyled>
                <ReactRouter history={history}>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/auth' component={Auth} />
                        <Route component={NotFound} />
                    </Switch>
                </ReactRouter>
            </MainStyled>
        </MainContainerStyled>
    </Provider>
);

export const Component = (): JSX.Element => (
    <ThemeWrapper>
        <MainContainer />
    </ThemeWrapper>
);
