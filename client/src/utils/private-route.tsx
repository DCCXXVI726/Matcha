import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router';

import { SessionContext } from '../session';

export const PrivateRoute = ({ ...rest }): JSX.Element => {
    const session = useContext(SessionContext);

    return (
        session.email
            ? <Route {...rest} />
            : <Redirect to={{ pathname: '/login' }} />
    );
};
