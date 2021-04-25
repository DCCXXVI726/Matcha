import React from 'react';
import { connect } from 'react-redux';

import { actions, selectors } from '../../../../__data__';
import { State, Status } from '../../../../__data__/types';

import { RecoveryForm } from '../form/account-recovery-form';

interface FormContainerProps {
    status: Status
    password: string
    accountRecovery: (password: string) => Promise<void>
}

export const AccountRecoveryFormContainer = ({
    status,
    password,
    accountRecovery
}: FormContainerProps): JSX.Element => {
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        accountRecovery(password);
    };

    return (
        <RecoveryForm
            handleSubmit={handleSubmit}
            status={status}
        />
    );
};

const mapStateToProps = (state: State): {
    status: Status
    password: string
} => ({
    status: selectors.accountRecovery.status(state),
    password: selectors.accountRecovery.email(state)
});

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => {
    return {
        accountRecovery: (password: string): Promise<void> => {
            return dispatch(actions.accountRecovery(password));
        }
    };
};

export const AccountRecoveryForm = connect(mapStateToProps, mapDispatchToProps)(AccountRecoveryFormContainer);
