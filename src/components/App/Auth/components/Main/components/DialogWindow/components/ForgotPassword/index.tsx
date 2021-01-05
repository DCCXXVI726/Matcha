import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import {TypographyStyled, DialogWindowStyled } from './index.style';

import { Mail } from './components/Mail';
import { Tittle } from './components/Tittle';

import { DialogStyled } from '../../index.style';

interface ForgotPasswordProps {
    onClose: any;
}

export const ForgotPassword: FunctionComponent<ForgotPasswordProps> = ({ onClose }) => {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    return (
        <DialogWindowStyled>
            <TypographyStyled align='center' onClick={handleClickOpen}>
                {t('auth.login.problems')}
            </TypographyStyled>
            <DialogStyled
                onClose={handleClose}
                aria-labelledby='customized-dialog-title'
                open={open}
            >
                <Tittle />
                <Mail />
            </DialogStyled>
        </DialogWindowStyled>
    );
};
