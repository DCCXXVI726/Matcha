import 'regenerator-runtime/runtime';
import React from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { Main } from './pages/main';
import { Auth } from './pages/auth';
import { NotFound } from './pages/not-found';

const history = createBrowserHistory();

const MainContainer = (): JSX.Element => (
    <ReactRouter history={history}>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/auth' component={Auth} />
            <Route component={NotFound} />
        </Switch>
    </ReactRouter>
);

export const Component = (): JSX.Element => (
    <MainContainer />
);
