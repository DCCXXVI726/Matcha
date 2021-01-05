import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { ForgotPassword } from '../ForgotPassword';
import { LoginButtons } from './components/LoginButtons';
import { Tittle } from './components/Tittle';

import {
    DialogStyled,
    DialogContentStyled,
    ButtonStyled,
    DialogWindowStyled,
} from './index.style';

export const DialogWindow: FunctionComponent = () => {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <DialogWindowStyled>
            <ButtonStyled variant='contained' onClick={handleClickOpen}>
                {t('auth.create')}
            </ButtonStyled>
            <DialogStyled onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
                <DialogContentStyled>
                    <Tittle />
                    <LoginButtons />
                    <ForgotPassword onClose={handleClose} />
                </DialogContentStyled>
            </DialogStyled>
        </DialogWindowStyled>
    );
};
