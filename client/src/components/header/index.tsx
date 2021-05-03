import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../theme';
import { ThemeToggle } from '../theme-toggle';

import { tinderIcon } from '../../assets/index';

import { LangChooser } from '../lang-choose';

import {
    HeaderStyled,
    LinkStyled,
    TypographyLogoStyled,
    WrapperStyled,
    LogoWrapperStyled
} from './index.style';

interface HeaderProps {
    fetchMultiLangContent: (lang: string) => Promise<void>
}

export const Header = ({
    fetchMultiLangContent
}: HeaderProps): JSX.Element => {
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
                <LangChooser
                    fetchMultiLangContent={(lang: string): Promise<void> => fetchMultiLangContent(lang)}
                />
            </WrapperStyled>
        </HeaderStyled>
    );
};
