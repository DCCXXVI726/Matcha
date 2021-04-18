import React, { useState, useContext } from 'react';
import { History } from 'history';
import { useTranslation } from 'react-i18next';

import { ThemeToggle } from '../../components/theme-toggle';

import { SessionContext, setSessionCookie } from '../../session';
import { tinderIcon } from '../../assets/index';

import { FormStyled } from './index.style';

interface LoginComponentProps {
    history: History
}

export const LoginComponent = ({
    history
}: LoginComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const session = useContext(SessionContext);

    const [email, setEmail] = useState('');
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setSessionCookie({ email });
        history.push('/');
    };


    if (session?.email) {
        history.push('/');
    }

    return (
        <div>
            <header>
                <div>
                    <a href='/'>
                        <img src={tinderIcon} height={20} />
                        <p>{t('logo-title')}</p>
                    </a>
                </div>
                <ThemeToggle />
                <button>{t('auth-button')}</button>
            </header>
            <FormStyled onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter email address'
                    onChange={(e): void => setEmail(e.target.value)}
                />
                <input type='submit' value='Login' />
            </FormStyled>
        </div>
    );
};
