import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    FormStyled
} from '../../index.style';

import {
    TextFieldStyled,
    ButtonStyled
} from './index.style';

export const Form = (): JSX.Element => {
    const { t } = useTranslation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <TextFieldStyled
                type='email'
                variant='outlined'
                color='primary'
                size='small'
                fullWidth
                placeholder={t('auth.email-placeholder')}
                onChange={(e): void => { setEmail(e.target.value); }}
                required
            />
            <TextFieldStyled
                type='password'
                variant='outlined'
                color='primary'
                size='small'
                minlength={6}
                maxLength={100}
                fullWidth
                placeholder={t('auth.password-placeholder')}
                onChange={(e): void => { setPassword(e.target.value); }}
                required
            />

            <ButtonStyled
                type='submit'
                variant='contained'
                color='primary'
            >
                {t('auth-button')}
            </ButtonStyled>
        </FormStyled>
    );
};
