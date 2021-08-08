import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';

import { actions, selectors } from '../../../../../../__data__';
import { State, Status } from '../../../../../../__data__/types';

import { RegistrationForm as MainRegistrationForm } from './container';

interface RegistrationFormContainerProps {
    status: Status
    genders: string[]
    fetchGenders: (lang: string) => Promise<void>
    fetchInterests: (lang: string) => Promise<void>
    fetchOrientations: (lang: string) => Promise<void>
    getLocation: () => Promise<void>
    accountCreate: () => void
}

export const RegistrationFormContainer = ({
    status,
    genders,
    fetchGenders,
    fetchInterests,
    fetchOrientations,
    getLocation,
    accountCreate
}: RegistrationFormContainerProps): JSX.Element => {

    useEffect(() => {
        fetchGenders(i18next.language);
        fetchInterests(i18next.language);
        fetchOrientations(i18next.language);
        getLocation();
    }, [fetchGenders, fetchInterests, fetchOrientations, getLocation]);

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
    status: selectors.loginPage.accountRecovery.status(state), // TODO: change to own status
    genders: selectors.regPage.genders.data(state)
});

/* eslint-disable-next-line */
const mapDispatchToProps = (dispatch: any) => ({
    fetchGenders: (lang: string): Promise<void> => dispatch(actions.regPage.fetchGenders(lang)),

    fetchInterests: (lang: string): Promise<void> => dispatch(actions.regPage.fetchInterests(lang)),

    fetchOrientations: (lang: string): Promise<void> => dispatch(actions.regPage.fetchOrientations(lang)),

    getLocation: (): Promise<void> => dispatch(actions.regPage.getLocation()),

    accountCreate: (): Promise<void> => // TODO: change to own request
        dispatch(actions.loginPage.accountRecovery('password'))
    
});

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer);
