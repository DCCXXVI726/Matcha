import 'regenerator-runtime/runtime';
import React from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { Header } from './components/header';
import { Navbar } from './components/navbar';

import { Main } from './pages/main';
import { Auth } from './pages/auth';
import { NotFound } from './pages/not-found';

import { MainContainerStyled, MainStyled } from './index.style';

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
    <MainContainer />
);
