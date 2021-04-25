import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../../../../theme';
import { ThemeToggle } from '../../../../components/theme-toggle';

import { tinderIcon } from '../../../../assets/index';

import { LangChooser } from '../../../../components/lang-choose';

import { Modal } from '../modal';

import {
    HeaderStyled,
    LinkStyled,
    TypographyLogoStyled,
    WrapperStyled,
    LogoWrapperStyled,
    ButtonLoginWrapper
} from '../../index.style';

export const Header = (): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

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
                    onClick={handleOpen}
                >
                    {t('auth-button')}
                </ButtonLoginWrapper>
                <Modal
                    isLogin
                    title={t('login.begin')}
                    open={open}
                    handleClose={handleClose}
                />
            </WrapperStyled>
        </HeaderStyled>
    );
};
