import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    FormStyled
} from '../../index.style';

import {
    TextFieldStyled
} from './index.style';

export const Form = (): JSX.Element => {
    const { t } = useTranslation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <TextFieldStyled
                type='email'
                variant='outlined'
                size='small'
                fullWidth
                placeholder={t('auth.email-placeholder')}
                onChange={(e): void => { setEmail(e.target.value); }}
                value={email}
            />
            <TextFieldStyled
                type='password'
                variant='outlined'
                size='small'
                fullWidth
                placeholder={t('auth.password-placeholder')}
                onChange={(e): void => { setPassword(e.target.value); }}
                value={password}
            />
            <input type='submit' value='Login' />
        </FormStyled>
    );
};
