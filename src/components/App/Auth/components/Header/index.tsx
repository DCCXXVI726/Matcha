import React, { FunctionComponent, useState } from 'react';
import i18next from 'I18n';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

import { LangChooser } from './components/LangChooser';
import Logo from 'Public/assets/tinder-icon.svg';
import {
    ContainerStyled,
    LinkStyled,
    SvgStyled,
    ButtonStyled,
    LogoStyled,
    ContolStyled,
    PaperStyled,
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
        <ContainerStyled>
            <LogoStyled>
                <PaperStyled variant='outlined'>
                    <img  src={Logo} alt='Logo' />
                </PaperStyled>
                <Typography variant='h4'>
                    {t('logo')}
                </Typography>
            </LogoStyled>
            <ContolStyled>
                {/* <LinkStyled underline='none' href='#'> */}
                <LinkStyled underline='none'>
                    <SvgStyled viewBox='0 0 24 24' width='24px' height='24px' focusable='false' aria-hidden='true' role='presentation'><path d='M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'></path></SvgStyled>
                    <LangChooser />
                </LinkStyled>
                <ButtonStyled onClick={toggleLang}>
                    {t('auth.login')}
                </ButtonStyled>
            </ContolStyled>
        </ContainerStyled>
    );
};
