import React, { FunctionComponent } from 'react';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import {
    TypographyStyled,
    DialogStyled,
    DialogContentStyled,
    DialogWindowStyled,
} from './index.style';

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
            <DialogStyled onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>

                <DialogContentStyled id='customized-dialog-title'>
                    {t('auth.login.insta')}
                </DialogContentStyled>
                <TextField id='standard-secondary' label='Standard secondary' color='secondary' />
            </DialogStyled>
        </DialogWindowStyled>
    );
}
