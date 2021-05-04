import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, Backdrop, Typography } from '@material-ui/core';

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
                <AsideStyled
                    style={{ minHeight: '20vh' }}
                    currentTheme={theme as string}
                >
                    <TypographyStyled
                        variant='h3'
                        padding='15px 0px'
                    >
                        {t('reg-form-interests')}
                    </TypographyStyled>
                    {status === LOADING
                        ? <CircularProgressStyled />
                        : <Chips interests={interests} />
                    }
                </AsideStyled>
            </Fade>
        </RegistrationModalStyled>
    );
};
