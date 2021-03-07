import 'regenerator-runtime/runtime';
import React from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { Main } from './pages/main';

const history = createBrowserHistory();

const MainContainer = (): JSX.Element => (
    <ReactRouter history={history}>
        <Switch>
            <Route component={Main} />
        </Switch>
    </ReactRouter>
);

export const Component = (): JSX.Element => (
    <MainContainer />
);
