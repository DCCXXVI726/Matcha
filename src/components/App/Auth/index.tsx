import React, { FunctionComponent, useState } from 'react';
import i18next from 'I18n';
import { useTranslation } from 'react-i18next';
import {
    Button,
    Container,
} from '@material-ui/core';

import {
    LinkStyled
} from './index.style';

export const Header: FunctionComponent = () => {
    const { t } = useTranslation();
    const [lang, changeLang] = useState('ru');

    const toggleLang = () => {
        if (lang === 'ru') {
            i18next.changeLanguage('en');
            changeLang('en');
        } else {
            i18next.changeLanguage('ru');
            changeLang('ru');
        }
    };

    return (
        <Container>
            <LinkStyled underline='none' href='#'>
                {t('auth.lang')}
            </LinkStyled>
            <Button onClick={toggleLang}>
                {t('auth.login')}
            </Button>
        </Container>
    );
};

export const Auth: FunctionComponent = () => {
    return (
        <Container maxWidth='lg'>
            <Header />
        </Container>
    );
};
