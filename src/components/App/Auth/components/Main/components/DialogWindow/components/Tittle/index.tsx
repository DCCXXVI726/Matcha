import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

import Logo from 'Public/assets/tinder-icon.svg';

import {
    TypographyStyled,
    ImageStyled,
} from './index.style';

export const Tittle: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <ImageStyled  src={Logo} alt='Logo' />
            <TypographyStyled align='center' variant='h4'>
                {t('auth.create')}
            </TypographyStyled>
            <Typography>{t('auth.text')}</Typography>
        </>
    );
};
