import React, { useContext, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../theme';
import { ThemeToggle } from '../theme-toggle';
import { tinderIcon } from '../../assets';
import { LangChooser } from '../lang-choose';
import { asyncNoop } from '../../utils';

import {
    HeaderStyled,
    LinkStyled,
    TypographyLogoStyled,
    WrapperStyled,
    LogoWrapperStyled
} from './index.style';

interface HeaderProps {
    fetchMultiLangContent?: (lang: string) => Promise<void> | void
}

export const Header = ({
    fetchMultiLangContent = asyncNoop
}: HeaderProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme] = useContext(ThemeWrapperContext);

    const handleFetchMultiLangContent = useCallback((lang: string): Promise<void> | void => {
        fetchMultiLangContent(lang);
    }, [fetchMultiLangContent]);

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
                    fetchMultiLangContent={handleFetchMultiLangContent}
                />
            </WrapperStyled>
        </HeaderStyled>
    );
};
