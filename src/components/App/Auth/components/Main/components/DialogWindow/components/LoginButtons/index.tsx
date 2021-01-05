import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

import IconGoogle from 'Public/assets/google-icon.svg';
import Icon42 from 'Public/assets/42-icon.svg';
import IconInstagram from 'Public/assets/instagram-icon.svg';

import {
    ImageStyled,
    ButtonWithLogoStyled,
} from './index.style';

export const LoginButtons: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <ButtonWithLogoStyled fullWidth variant='contained'>
                <ImageStyled  src={IconGoogle} alt='Logo' />
                <Typography variant='button'>{t('auth.login.google')}</Typography>
            </ButtonWithLogoStyled>

            <ButtonWithLogoStyled fullWidth variant='contained'>
                <ImageStyled  src={Icon42} alt='Logo' />
                <Typography variant='button'>{t('auth.login.intra42')}</Typography>
            </ButtonWithLogoStyled>

            <ButtonWithLogoStyled fullWidth variant='contained'>
                <ImageStyled  src={IconInstagram} alt='Logo' />
                <Typography variant='button'>{t('auth.login.insta')}</Typography>
            </ButtonWithLogoStyled>
        </>
    );
};
