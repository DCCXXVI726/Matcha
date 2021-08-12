import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, Backdrop } from '@material-ui/core';

import {
    RegistrationModalStyled as ChipsModalStyled,
    AsideStyled,
    TypographyStyled
} from '../rules/index.style';

import { ThemeWrapperContext } from './../../../../../components/theme';
import { Status, KeyValue } from './../../../../../__data__/types';
import { requestStatus } from './../../../../../components/request-status';
import { Chips } from './chips';

interface ChipsModalProps {
    open: boolean
    count: number
    status: Status
    interests: KeyValue[]
    handleClose?: () => void
}

export const ChipsModal = ({
    open,
    count,
    status,
    interests,
    handleClose
}: ChipsModalProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme] = useContext(ThemeWrapperContext);

    const chips = (
        <Chips
            count={count}
            interests={interests}
            handleClose={(): void => handleClose && handleClose()}
        />
    );

    return (
        <ChipsModalStyled
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
                    currentTheme={theme as string}
                >
                    <TypographyStyled
                        variant='h3'
                        padding='15px 0px'
                    >
                        {t('reg-form-interests')}
                    </TypographyStyled>
                    {requestStatus(chips)[status]}
                </AsideStyled>
            </Fade>
        </ChipsModalStyled>
    );
};
