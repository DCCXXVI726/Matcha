import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router';

import { getSessionCookie } from '../__data__/cookies';

export const PrivateRoute = ({ ...rest }: RouteProps): JSX.Element => {
    const sessionCookie = getSessionCookie();

    return sessionCookie ? <Route {...rest} /> : <Redirect to={{ pathname: '/login' }} />;
};
