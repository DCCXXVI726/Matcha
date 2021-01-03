import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

import Logo from 'Public/assets/tinder-icon.svg';
import IconGoogle from 'Public/assets/google-icon.svg';
import Icon42 from 'Public/assets/42-icon.svg';
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
                    <Typography gutterBottom>
                        {t('auth.text')}
                    </Typography>
                    <ButtonWithLogoStyled fullWidth variant='contained' onClick={handleClickOpen}>
                        <ImageStyled  src={IconGoogle} alt='Logo' />
                        {t('auth.login.google')}
                    </ButtonWithLogoStyled>
                    <ButtonWithLogoStyled fullWidth variant='contained' onClick={handleClickOpen}>
                        <ImageStyled  src={Icon42} alt='Logo' />
                        {t('auth.login.intra42')}
                    </ButtonWithLogoStyled>
                    <Typography gutterBottom> //create new window
                        {t('auth.login.problems')}
                    </Typography>
                </DialogContentStyled>
            </DialogStyled>
        </DialogWindowStyled>
    );
}
