import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { actions, selectors } from '../../../../__data__';
import { State } from '../../../../__data__/types';
import { Status, SUCCESS } from '../../../../__data__/constants';
import { getSessionCookie } from '../../../../__data__/cookies';
import { navigation } from '../../../../navigation';

import { ReduxLoginForm } from './login-form';

interface FormContainerProps {
    email: string
    password: string
    status: Status
    fethLogin: (email: string, password: string) => Promise<void>
}

export const FormContainer = ({
    email = '',
    password = '',
    status,
    fethLogin
}: FormContainerProps): JSX.Element => {
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        fethLogin(email, password);
    };

    if (status === SUCCESS && getSessionCookie()) {
        return <Redirect to={{ pathname: navigation.index }} />;
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
    status: Status
} => ({
    email: formValueSelector('login-form')(state, 'email'),
    password: formValueSelector('login-form')(state, 'password'),
    status: selectors.loginPage.user.status(state)
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapDispatchToProps = (dispatch: MatchaDispatch) => ({
    fethLogin: (email: string, password: string): Promise<void> => dispatch(actions.loginPage.fetchLogin(email, password))
});

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormContainer);
