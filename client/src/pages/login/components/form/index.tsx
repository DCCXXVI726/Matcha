import React from 'react';
import { connect } from 'react-redux';

import { actions, selectors } from '../../../../__data__';
import { State, Status } from '../../../../__data__/types';

import { ReduxLoginForm } from './login-form';

interface FormContainerProps {
    coockie: string
    status: Status
    fethLogin: (email: string, password: string) => Promise<void>
}

export const FormContainer = ({
    coockie,
    status,
    fethLogin
}: FormContainerProps): JSX.Element => {
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        fethLogin('email', 'password');
    };

    return (
        <ReduxLoginForm
            handleSubmit={handleSubmit}
            status={status}
        />
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapStateToProps = (state: State) => ({
    coockie: selectors.user.login(state),
    status: selectors.user.status(state)
});

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => {
    return {
        fethLogin: (email: string, password: string): Promise<void> => {
            return dispatch(actions.fetchLogin(email, password));
        }
    };
};

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormContainer);
