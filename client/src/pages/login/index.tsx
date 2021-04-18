import React, { useState, useContext } from 'react';
import { History } from 'history';
import { useTranslation } from 'react-i18next';

import { Typography } from '@material-ui/core';
import { ThemeWrapperContext } from '../../theme';
import { ThemeToggle } from '../../components/theme-toggle';

import { SessionContext, setSessionCookie } from '../../session';
import { tinderIcon } from '../../assets/index';

import { Header } from './header';
import { Main } from './main';

import {
    MainStyled,
    ButtonWrapper,
    SectionStyled,
    HeadlineStyled,
    ModalStyled
} from './index.style';

interface LoginComponentProps {
    history: History
}

export const LoginComponent = ({
    history
}: LoginComponentProps): JSX.Element => {
    const { t } = useTranslation();

    // const [theme,] = useContext(ThemeWrapperContext);
    // const session = useContext(SessionContext);

    // const [email, setEmail] = useState('');
    // const handleSubmit = (e: React.SyntheticEvent): void => {
    //     e.preventDefault();
    //     setSessionCookie({ email });
    //     history.push('/');
    // };


    // if (session?.email) {
    //     history.push('/');
    // }

    return (
        <>
            <Header />
            <Main />
            <footer></footer>
            {/* <FormStyled onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter email address'
                    onChange={(e): void => setEmail(e.target.value)}
                />
                <input type='submit' value='Login' />
            </FormStyled> */}
        </>
    );
};
