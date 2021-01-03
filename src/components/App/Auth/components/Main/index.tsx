import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { DialogWindow } from './components/DialogWindow';

import {
    ContainerStyled,
    TypographyStyled,
} from './index.style';

export const Main: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <ContainerStyled>
            <TypographyStyled align='center' noWrap variant='h1'>
                {t('auth.slogan')}
            </TypographyStyled>
            <DialogWindow />
        </ContainerStyled>
    );
};
