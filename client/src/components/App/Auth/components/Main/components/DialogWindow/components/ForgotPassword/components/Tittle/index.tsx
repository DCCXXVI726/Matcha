import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from 'Public/assets/tinder-icon.svg';

import {
    ImageStyled,
    TypographyDescriptionStyled,
    TypographyTittleStyled,
} from './index.style';

export const Tittle: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <ImageStyled  src={Logo} alt='Logo' />
            <TypographyTittleStyled align='center'>
                {t('auth.problems.tittle')}
            </TypographyTittleStyled>

            <TypographyDescriptionStyled align='center'>
                {t('auth.problems.description')}
            </TypographyDescriptionStyled>
        </>
    );
};
