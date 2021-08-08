import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

import { DARK, ThemeWrapperContext } from '../theme';
import { madeInRussiaIconWhite, madeInRussiaIconBlack } from '../../assets';

import {
    FooterStyled,
    LinkStyled,
    TypographyStyled
} from './index.style';

export const Footer = (): JSX.Element => {
    const { t } = useTranslation();
    const [theme] = useContext(ThemeWrapperContext);

    return (
        <FooterStyled>
            <img
                src={theme === DARK ? madeInRussiaIconWhite : madeInRussiaIconBlack}
                alt='madeInRussiaIcon'
            />
            <TypographyStyled>
                <Typography>
                    {t('footer-year')}
                </Typography>
                <LinkStyled
                    color='inherit'
                    href='https://github.com/sleonia/Matcha'
                    target='_blank'
                >
                    {t('footer-title')}
                </LinkStyled>
            </TypographyStyled>
        </FooterStyled>
    );
};
