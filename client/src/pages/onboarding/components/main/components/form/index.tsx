import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { actions, selectors } from '../../../../../../__data__';
import { State, Status } from '../../../../../../__data__/types';

import { RegistrationForm as MainRegistrationForm } from './container';

interface RegistrationFormContainerProps {
    status: Status
    genders: string[]
    fetchGenders: (lang: string) => Promise<void>
    accountCreate: () => void
}

export const RegistrationFormContainer = ({
    status,
    genders,
    fetchGenders,
    accountCreate
}: RegistrationFormContainerProps): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        fetchGenders(i18next.language);
    }, [fetchGenders]);

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        accountCreate();
    };

    return (
        <MainRegistrationForm
            handleSubmit={handleSubmit}
            status={status}
            genders={genders}
        />
    );
};

const mapStateToProps = (state: State): {
    status: Status
    genders: string[]
} => ({
    status: selectors.accountRecovery.status(state), //TODO: change to own status
    genders: selectors.genders.data(state)
});

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => ({
    fetchGenders: (lang: string): Promise<void> => {
        return dispatch(actions.fetchGenders(lang));
    },
    accountCreate: (): Promise<void> => { //TODO: change to own request
        return dispatch(actions.accountRecovery('password'));
    }
});

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer);
