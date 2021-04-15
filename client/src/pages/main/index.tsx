import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../../components/header';
import { Navbar } from '../../components/navbar';

import {
    MainStyled
} from './index.style';

export const Main = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <Navbar />
            <MainStyled>
                <p>{t('hello')}</p>
            </MainStyled>
        </>
    );
};
