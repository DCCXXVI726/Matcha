import React, { useContext } from 'react';
import { Fade, Backdrop, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../../../../../../../components/theme';
import { tinderIcon } from '../../../../../../../assets';

import { Chips } from './chips';

import {
    RegistrationModalStyled,
    AsideStyled,
    RegistrationSectionStyled,
    LogoWrapperStyled,
    TypographyStyled,
    DescriptionStyled,
    FooterStyled
} from '../rules/index.style';

interface ChipsModalProps {
    open: boolean
    handleClose?: () => void
}

export const ChipsModal = ({
    open,
    handleClose
}: ChipsModalProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);

    return (
        <RegistrationModalStyled
            currentTheme={theme as string}
            className='modal'
            open={open}
            closeAfterTransition
            onClose={handleClose}
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
            aria-labelledby='modal-chips'
        >
            <Fade in={open}>
                <AsideStyled currentTheme={theme as string}>
                    <Chips />
                </AsideStyled>
            </Fade>
        </RegistrationModalStyled>
    );
};
