import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { LOADING } from '../../../../__data__/constants';
import { Status } from '../../../../__data__/types';

import { RenderTextField } from '../../../../components/redux-form-components/text-field';
import { CircularProgressStyled } from '../../../../components/circular-progress/index.style';

import { FormStyled } from '../../index.style';

import { ButtonStyled } from './index.style';

interface LoginFormComponentProps {
    handleSubmit: (e: React.SyntheticEvent) => void,
    status: Status
}

export const LoginFormComponent = ({
    handleSubmit,
    status
}: LoginFormComponentProps): JSX.Element => {
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
                component={RenderTextField}
            />
            <Field
                type={'password'}
                isRequired={true}
                minlength={6}
                maxLength={100}
                placeholder={t('auth.password-placeholder')}
                component={RenderTextField}
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


export const ReduxLoginForm = reduxForm<null, LoginFormComponentProps>({
    form: 'form',
})(LoginFormComponent);
