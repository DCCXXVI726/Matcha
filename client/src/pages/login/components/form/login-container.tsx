import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { actions, selectors } from '../../../../__data__';
import { State, Status } from '../../../../__data__/types';

import { ReduxLoginForm } from './login-form';
import { SUCCESS } from '../../../../__data__/constants';
import { SessionContext } from '../../../../session';

interface FormContainerProps {
    email: string
    password: string
    coockie: string
    status: Status
    fethLogin: (email: string, password: string) => Promise<void>
}

import Cookies from 'js-cookie';

export const FormContainer = ({
    email = '',
    password = '',
    status,
    fethLogin
}: FormContainerProps): JSX.Element => {
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        // fethLogin('linuxize@example.com', '1asfasf23456789');
        fethLogin(email, password);
    };

    if (status === SUCCESS && Cookies.get('keksion')) {
        return <Redirect to={{ pathname: '/main' }} />;
    }

    return (
        <ReduxLoginForm
            handleSubmit={handleSubmit}
            status={status}
        />
    );
};

const mapStateToProps = (state: State): {
    email: string
    password: string
    coockie: string
    status: Status
} => ({
    email: formValueSelector('login-form')(state, 'email'),
    password: formValueSelector('login-form')(state, 'password'),
    coockie: selectors.loginPage.user.login(state),
    status: selectors.loginPage.user.status(state)
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapDispatchToProps = (dispatch) => ({
    fethLogin: (email: string, password: string): Promise<void> => {
        return dispatch(actions.loginPage.fetchLogin(email, password));
    }
});

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormContainer);
