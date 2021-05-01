import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../../theme';
import { ThemeToggle } from '../theme-toggle';

import { tinderIcon } from '../../assets/index';

import { LangChooser } from '../lang-choose';

import {
    HeaderStyled,
    LinkStyled,
    TypographyLogoStyled,
    WrapperStyled,
    LogoWrapperStyled,
    ButtonLoginWrapper
} from './index.style';

export const Header = (): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);

    return (
        <HeaderStyled
            currentTheme={theme as string}
        >
            <WrapperStyled>
                <LinkStyled to='/'>
                    <LogoWrapperStyled src={tinderIcon} />
                    <TypographyLogoStyled>
                        {t('logo-title')}
                    </TypographyLogoStyled>
                </LinkStyled>
            </WrapperStyled>
            <WrapperStyled>
                <ThemeToggle />
                <LangChooser />
                <ButtonLoginWrapper
                    variant='contained'
                    color='primary'
                    size='small'
                >
                    {t('auth-button')}
                </ButtonLoginWrapper>
            </WrapperStyled>
        </HeaderStyled>
    );
};
