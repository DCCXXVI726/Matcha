import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, Backdrop } from '@material-ui/core';

import { ThemeWrapperContext } from '../../../../../../../components/theme';
import { Status, KeyValue } from '../../../../../../../__data__/types';

import {
    RegistrationModalStyled as OrientationModalStyled,
    AsideStyled,
    TypographyStyled
} from '../rules/index.style';
import { LOADING } from '../../../../../../../__data__/constants';
import { CircularProgressStyled } from '../../../../../../login/components/form/index.style';

import { ListComponent } from './list';

interface OrientationModalProps {
    open: boolean
    status: Status
    orientation: KeyValue[]
    handleClose?: () => void
}

export const OrientationModal = ({
    open,
    status,
    orientation,
    handleClose
}: OrientationModalProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);

    return (
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
                    style={{ minHeight: '20vh' }}
                    currentTheme={theme as string}
                >
                    <TypographyStyled
                        variant='h3'
                        padding='15px 0px'
                    >
                        {t('reg-form-sexual-orientation-my')}
                    </TypographyStyled>
                    {status === LOADING
                        ? <CircularProgressStyled />
                        : <ListComponent
                            orientation={orientation}
                        />
                    }
                </AsideStyled>
            </Fade>
        </OrientationModalStyled>
    );
};
