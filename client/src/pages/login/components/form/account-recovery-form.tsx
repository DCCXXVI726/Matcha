import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Status } from '../../../../__data__/types';

import { RenderTextField } from '../../../../components/render-text-field';

import { FormStyled } from '../../index.style';
import { ButtonStyled } from './index.style';
import { requestStatus } from '../../../../components/request-status';

interface RecoveryFormComponentProps {
    handleSubmit: (e: React.SyntheticEvent) => void,
    status: Status
}

export const RecoveryFormComponent = ({
    handleSubmit,
    status
}: RecoveryFormComponentProps): JSX.Element => {
    const { t } = useTranslation();

    const submitButton = (
        <ButtonStyled
            type='submit'
            variant='contained'
            color='primary'
        >
            {t('auth-button')}
        </ButtonStyled>
    );

    return (
        <FormStyled onSubmit={handleSubmit}>
            <Field
                name={'email'}
                type={'email'}
                isRequired={true}
                minlength={0}
                maxLength={100}
                placeholder={t('auth.email-placeholder')}
                component={RenderTextField}
            />
            {requestStatus(submitButton)[status]}
        </FormStyled>
    );
};


export const RecoveryForm = reduxForm<null, RecoveryFormComponentProps>({
    form: 'account-recovery',
})(RecoveryFormComponent);
