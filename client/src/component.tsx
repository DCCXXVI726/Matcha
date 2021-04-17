import React, { useEffect, useState, useContext } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import Cookies from 'js-cookie';

import { SessionContext, getSessionCookie, setSessionCookie } from './session';

const history = createBrowserHistory();

const LoginHandler = ({ history }) => {
    const [email, setEmail] = useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        setSessionCookie({ email });
        history.push('/');
    };

    const session = useContext(SessionContext);

    if (session.email !== undefined) {
        history.push('/');
    }

    return (
        <div style={{ marginTop: '1rem' }}>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter email address'
                    //value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
};

const LogoutHandler = ({ history }: any) => {
    useEffect(
        () => {
            Cookies.remove('session');
            history.push('/login');
        },
        [history]
    );

    return <div>Logging out!</div>;
};

const ProtectedHandler = ({ history }) => {
    const session = useContext(SessionContext);
    if (session.email === undefined) {
        history.push('/login');
    }
    return (
        <div>
            <h6>Protected data for {session.email}</h6>
            <p>
                <Link to='/main'>main</Link>
            </p>
            <p>
                <Link to='/logout'>Logout here</Link>
            </p>
        </div>
    );
};

const Main = () => {
    return (
        <div>
            <h6>KEKEKKEKEKEKE</h6>
        </div>
    );
};

const PrivateRoute = ({ children, ...rest }): JSX.Element => {
    const session = useContext(SessionContext);

    if (session.email === undefined) {
        history.push('/login');
    }

    return (
        <Route {...rest} render={({ location }): JSX.Element => {
            return session.email !== undefined
                ? children
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }} />;
        }} />
    );
};


const Routes = () => {
    const [session, setSession] = useState(getSessionCookie());
    useEffect(
        () => {
            setSession(getSessionCookie());
        },
        [session]
    );

    return (
        <SessionContext.Provider value={session}>
            <Router history={history}>
                <div>
                    <h6>Nav Bar</h6>
                    <h6>
                        {session.email || 'No user is logged in'}
                    </h6>
                </div>
                <Switch>
                    <Route path='/login' component={LoginHandler} />
                    <Route path='/logout' component={LogoutHandler} />
                    <PrivateRoute path='/main'>
                        <Main />
                    </PrivateRoute>
                    <Route path='*' component={ProtectedHandler} />
                </Switch>
            </Router>
        </SessionContext.Provider>
    );
};

export const Component = (): JSX.Element => (
    <Routes />
);
