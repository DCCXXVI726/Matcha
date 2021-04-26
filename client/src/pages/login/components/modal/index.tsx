import React, { useState, useCallback, useContext } from 'react';
import { Fade, Backdrop } from '@material-ui/core';
import { ThemeWrapperContext } from '../../../../theme';

import { tinderIcon } from '../../../../assets';

import {
    TypographyStyled,
    ModalStyled,
    AsideStyled
} from '../../index.style';

import { Header } from './components/header';
import { AccountRecovery } from './components/account-recovery-modal';
import { DefaulModal } from './components/default-modal';
import { Footer } from './components/footer';

import { SectionStyled, LogoWrapperStyled } from './index.style';

const TIMEOUT = 400;

interface ModalProps {
    isLogin?: boolean
    title: string
    open: boolean
    handleClose: () => void
}

export const Modal = ({
    isLogin = false,
    title,
    open,
    handleClose
}: ModalProps): JSX.Element => {
    const [theme,] = useContext(ThemeWrapperContext);
    const [isRecovery, setRecovery] = useState<boolean>(false);

    const handleRecoveryOpen = useCallback((): void => {
        setRecovery(true);
    }, []);

    const handleRecoveryClose = useCallback((): void => {
        setRecovery(false);
    }, []);

    const closeAll = useCallback((): void => {
        handleClose();
        setTimeout(() => {
            handleRecoveryClose();
        }, TIMEOUT);
    }, [handleClose, handleRecoveryClose]);
    return (
        <ModalStyled
            currentTheme={theme as string}
            className='modal'
            open={open}
            onClose={(): void => closeAll()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
            aria-labelledby='modal-title'
            aria-describedby='modal-description'
        >
            <Fade in={open}>
                <AsideStyled currentTheme={theme as string}>
                    <Header handleClose={handleClose} />
                    <SectionStyled>
                        <LogoWrapperStyled src={tinderIcon} />
                        {isRecovery ? (
                            <AccountRecovery />
                        ) : (<>
                            <TypographyStyled>
                                {title}
                            </TypographyStyled>
                            <DefaulModal
                                isLogin={isLogin}
                                handleRecoveryOpen={handleRecoveryOpen}
                            />
                        </>)}
                        <Footer />
                    </SectionStyled>
                </AsideStyled>
            </Fade>
        </ModalStyled>
    );
};
