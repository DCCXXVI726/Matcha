import React from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, Backdrop, IconButton } from '@material-ui/core';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

import { tinderIcon } from '../../../../assets/index';

import {
    LogoWrapperStyled,
    TypographyStyled,
    ModalStyled,
    AsideStyled
} from '../../index.style';

import {
    IconButtonStyled
} from './index.style';

interface ModalProps {
    open: boolean
    handleOpen: () => void
    handleClose: () => void
}

export const Modal = ({
    open,
    handleOpen,
    handleClose
}: ModalProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <ModalStyled
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
                <AsideStyled>
                    <header>
                        <IconButton
                            onClick={handleClose}
                        >
                            <HighlightOffRoundedIcon />
                        </IconButton>
                        <div>
                            <LogoWrapperStyled src={tinderIcon} />
                            <TypographyStyled>
                                {t('create-account')}
                            </TypographyStyled>
                        </div>
                    </header>
                    <div>asdasdasdadadasd</div>
                    <div>asdasdasdadadasdsdadasd</div>
                    <div>asdasdasdadadasdsdadasd</div>
                </AsideStyled>
            </Fade>
        </ModalStyled>
    );
}
