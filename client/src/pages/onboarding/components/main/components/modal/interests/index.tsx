import React, { useContext } from 'react';
import { Fade, Backdrop } from '@material-ui/core';

import { ThemeWrapperContext } from '../../../../../../../components/theme';
import { Status, KeyValue } from '../../../../../../../__data__/types';

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
import { LOADING } from '../../../../../../../__data__/constants';
import { CircularProgressStyled } from '../../../../../../login/components/form/index.style';

interface ChipsModalProps {
    open: boolean
    status: Status
    interests: KeyValue[]
    handleClose?: () => void
}

export const ChipsModal = ({
    open,
    status,
    interests,
    handleClose
}: ChipsModalProps): JSX.Element => {
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
                    {status === LOADING ? <CircularProgressStyled /> : <Chips interests={interests} /> }
                </AsideStyled>
            </Fade>
        </RegistrationModalStyled>
    );
};
