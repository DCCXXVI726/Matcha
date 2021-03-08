import 'regenerator-runtime/runtime';
import React from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { actions, createStore } from './__data__/index';

import { ThemeWrapper } from './theme';

import { Header } from './components/header';
import { Navbar } from './components/navbar';

import { Main } from './pages/main';
import { Auth } from './pages/auth';
import { NotFound } from './pages/not-found';

import { MainContainerStyled, MainStyled } from './index.style';

export const store = createStore();
window.store = store;
store.dispatch(actions.fetchLogin('alexey', 'drolyag'));
console.log(window.store.getState());

const history = createBrowserHistory();

const MainContainer = (): JSX.Element => (
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
);

export const Component = (): JSX.Element => (
    <ThemeWrapper>
        <MainContainer />
    </ThemeWrapper>
);
