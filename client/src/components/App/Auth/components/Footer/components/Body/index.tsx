import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

import Logo from 'Public/assets/made-in-russia.svg';

import {
    LinkStyled,
    CopyrightStyled,
    ListStyled,
    BodyStyled,
    LogoStyled,
} from './index.style';

export const Body: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <BodyStyled>
            <ListStyled>
                <li>
                    <LinkStyled href='#'>{t('auth.footer.company')}</LinkStyled>
                </li>
                <li>
                    <LinkStyled href='#'>{t('auth.footer.community')}</LinkStyled>
                </li>
                <li>
                    <LinkStyled href='#'>{t('auth.footer.partners')}</LinkStyled>
                </li>
                <li>
                    <LinkStyled href='#'>{t('auth.footer.legal')}</LinkStyled>
                </li>
            </ListStyled>
            <CopyrightStyled>
                <LogoStyled src={Logo} />
                <Typography>{t('copyright')}</Typography>
            </CopyrightStyled>
        </BodyStyled>
    );
};
