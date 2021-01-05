import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

import {
    TextFieldStyled,
    TypographyStyled,
    DialogContentStyled,
    DialogWindowStyled,
} from './index.style';

import {
    DialogStyled,
} from '../DialogWindow/index.style';

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

                <TypographyStyled align='center'>
                    {t('auth.problems.tittle')}
                </TypographyStyled>

                <DialogContentStyled id='customized-dialog-title'>
                    <TypographyStyled align='center'>
                        {t('auth.problems.description')}
                    </TypographyStyled>
                </DialogContentStyled>

                <TextFieldStyled id='standard-secondary' label={t('auth.problems.placeholder')} />
                <Button variant='contained'>
                    {t('auth.problems.button')}
                </Button>

            </DialogStyled>
        </DialogWindowStyled>
    );
};
