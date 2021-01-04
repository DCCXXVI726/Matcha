import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

import Logo from 'Public/assets/tinder-icon.svg';
import IconGoogle from 'Public/assets/google-icon.svg';
import Icon42 from 'Public/assets/42-icon.svg';
import IconInstagram from 'Public/assets/instagram-icon.svg';

import { ForgotPassword } from '../ForgotPassword';

import {
    TypographyStyled,
    ImageStyled,
    DialogStyled,
    DialogContentStyled,
    ButtonWithLogoStyled,
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
                <DialogContentStyled id='customized-dialog-title'>
                    <ImageStyled  src={Logo} alt='Logo' />
                    <TypographyStyled align='center' variant='h4'>
                        {t('auth.create')}
                    </TypographyStyled>
                </DialogContentStyled>

                <DialogContentStyled>
                    <Typography>{t('auth.text')}</Typography>
                    <ButtonWithLogoStyled fullWidth variant='contained' onClick={handleClickOpen}>
                        <ImageStyled  src={IconGoogle} alt='Logo' />
                        <Typography variant='button'>{t('auth.login.google')}</Typography>
                    </ButtonWithLogoStyled>

                    <ButtonWithLogoStyled fullWidth variant='contained' onClick={handleClickOpen}>
                        <ImageStyled  src={Icon42} alt='Logo' />
                        <Typography variant='button'>{t('auth.login.intra42')}</Typography>
                    </ButtonWithLogoStyled>

                    <ButtonWithLogoStyled fullWidth variant='contained' onClick={handleClickOpen}>
                        <ImageStyled  src={IconInstagram} alt='Logo' />
                        <Typography variant='button'>{t('auth.login.insta')}</Typography>
                    </ButtonWithLogoStyled>

                    <ForgotPassword onClose={handleClose} />
                </DialogContentStyled>
            </DialogStyled>
        </DialogWindowStyled>
    );
}
