import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@material-ui/core';
import AndroidSharpIcon from '@material-ui/icons/AndroidSharp';
import AppleIcon from '@material-ui/icons/Apple';

import { FooterStyled, HeadlineStyled, AppLinkStyled } from '../../index.style';

export const Footer = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <FooterStyled>
            <HeadlineStyled
                variant='h3'
            >
                {t('login.download-title')}
            </HeadlineStyled>
            <AppLinkStyled>
                <IconButton
                    href='#'
                >
                    <AppleIcon />
                </IconButton>
                <IconButton
                    href='#'
                >
                    <AndroidSharpIcon />
                </IconButton>
            </AppLinkStyled>
        </FooterStyled>

    );
};
