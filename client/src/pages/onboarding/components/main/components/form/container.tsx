import React from 'react';
import { connect } from 'react-redux';

import { actions, selectors } from '../../../../../../__data__';
import { State, Status } from '../../../../../../__data__/types';

import { RegistrationForm as RegistrationForm1 } from './index';

interface FormContainerProps {
    lol?: string
}

export const RegistrationFormContainer = ({
}: FormContainerProps): JSX.Element => {
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
    };

    return (
        <RegistrationForm1
            handleSubmit={handleSubmit}
        />
    );
};

export const RegistrationForm = connect(null, null)(RegistrationFormContainer);
