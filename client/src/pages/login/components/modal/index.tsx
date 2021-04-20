import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, Backdrop, SvgIcon, IconButton } from '@material-ui/core';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import AndroidSharpIcon from '@material-ui/icons/AndroidSharp';
import AppleIcon from '@material-ui/icons/Apple';

import { ThemeWrapperContext } from '../../../../theme';

import { tinderIcon, googleLogo as GoogleLogo } from '../../../../assets';

import { Form } from '../form/form';

import {
    TypographyStyled,
    ModalStyled,
    AsideStyled
} from '../../index.style';

import {
    SectionStyled,
    LogoWrapperStyled,
    LoginButtonStyled,
    IconButtonStyled,
    LoginBlockStyled,
    FooterStyled,
    HeadlineStyled,
    AppLinkStyled,
    LinkStyled
} from './index.style';

interface ModalProps {
    open: boolean
    handleClose: () => void
}

export const Modal = ({
    open,
    handleClose
}: ModalProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <ModalStyled
            currentTheme={theme as string}
            className='modal'
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            aria-labelledby='modal-title'
            aria-describedby='modal-description'
        >
            <Fade in={open}>
                <AsideStyled
                    currentTheme={theme as string}
                >
                    <header>
                        <IconButtonStyled
                            onClick={handleClose}
                        >
                            <HighlightOffRoundedIcon />
                        </IconButtonStyled>
                    </header>
                    <SectionStyled>
                        <LogoWrapperStyled src={tinderIcon} />
                        <TypographyStyled>
                            {t('create-account')}
                        </TypographyStyled>
                        <LoginBlockStyled>
                            <LoginButtonStyled
                                size='large'
                                variant='contained'
                                color='primary'
                                fullWidth
                            >
                                {t('login.with-google')}
                            </LoginButtonStyled>
                            <LoginButtonStyled
                                size='large'
                                variant='contained'
                                color='primary'
                                fullWidth
                            >
                                {t('login.with-42')}
                            </LoginButtonStyled>
                            <LinkStyled
                                component='button'
                                variant='body1'
                                onClick={(): void => {
                                    setShowForm(!showForm);
                                }}
                            >
                                {t('login.additional-button')}
                            </LinkStyled>
                            {showForm && <Form />}
                        </LoginBlockStyled>
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
                    </SectionStyled>
                </AsideStyled>
            </Fade>
        </ModalStyled>
    );
}
