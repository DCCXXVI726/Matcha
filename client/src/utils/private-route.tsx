import React, { useContext } from 'react';
import { Route, RouteProps, Redirect } from 'react-router';

import { SessionContext } from '../session';

export const PrivateRoute = ({ ...rest }: RouteProps): JSX.Element => {
    const session = useContext(SessionContext);

    return (
        session
            ? <Route {...rest} />
            : <Redirect to={{ pathname: '/login' }} />
    );
};
