import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, Backdrop } from '@material-ui/core';

import {
    RegistrationModalStyled as OrientationModalStyled,
    AsideStyled,
    TypographyStyled
} from '../rules/index.style';

import { Status } from './../../../../../__data__/constants';
import { requestStatus } from './../../../../../components/request-status';
import { ThemeWrapperContext } from './../../../../../components/theme';
import { List } from './menu';

interface OrientationModalProps {
    open: boolean
    count: number
    status: Status
    orientations: KeyValue[]
    handleClose?: () => void
}

export const OrientationModal = ({
    open,
    count,
    status,
    orientations,
    handleClose
}: OrientationModalProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme] = useContext(ThemeWrapperContext);

    const list = (
        <List
            count={count}
            orientations={orientations}
            handleClose={(): void => handleClose && handleClose()}
        />
    );

    return (
        <div>
            <OrientationModalStyled
                currentTheme={theme as string}
                className='modal'
                open={open}
                closeAfterTransition
                onClose={handleClose}
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
                aria-labelledby='modal-Orientation'
            >
                <Fade in={open}>
                    <AsideStyled
                        currentTheme={theme as string}
                    >
                        <TypographyStyled
                            variant='h3'
                            padding='15px 0px'
                        >
                            {t('reg-form-sexual-orientation-my')}
                        </TypographyStyled>
                        {requestStatus(list)[status]}
                    </AsideStyled>
                </Fade>
            </OrientationModalStyled>
        </div>
    );
};
