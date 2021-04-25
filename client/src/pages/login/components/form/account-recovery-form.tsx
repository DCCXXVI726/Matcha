import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { LOADING } from '../../../../__data__/constants';
import { Status } from '../../../../__data__/types';

import { renderTextField } from '../../../../components/render-text-field';

import { FormStyled } from '../../index.style';

import { ButtonStyled, CircularProgressStyled } from './index.style';

interface RecoveryFormComponentProps {
    handleSubmit: (e: React.SyntheticEvent) => void,
    status: Status
}

export const RecoveryFormComponent = ({
    handleSubmit,
    status
}: RecoveryFormComponentProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <FormStyled onSubmit={handleSubmit}>
            <Field
                name={'email'}
                type={'email'}
                isRequired={true}
                minlength={0}
                maxLength={100}
                placeholder={t('auth.email-placeholder')}
                component={renderTextField}
            />
            {status === LOADING
                ? <CircularProgressStyled />
                : <ButtonStyled
                    type='submit'
                    variant='contained'
                    color='primary'
                >
                    {t('auth-button')}
                </ButtonStyled>
            }
        </FormStyled>
    );
};


export const RecoveryForm = reduxForm<null, RecoveryFormComponentProps>({
    form: 'account-recovery',
})(RecoveryFormComponent);
