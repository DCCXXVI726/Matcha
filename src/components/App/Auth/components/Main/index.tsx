import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
// import { Typography } from '@material-ui/core';

import {
    ContainerStyled,
    ButtonStyled,
    TypographyStyled,
} from './index.style';

export const Main: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <ContainerStyled>
            <TypographyStyled align='center' noWrap variant='h1'>
                {t('auth.slogan')}
            </TypographyStyled>
            <ButtonStyled variant='contained'>
                {t('auth.create')}
            </ButtonStyled>
        </ContainerStyled>
    );
};
