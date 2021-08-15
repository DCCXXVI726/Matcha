import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    InfoBlockWrapperStyled,
    InfoBlockStyled,
    InfoBlockTypographyStyled
} from './info-block.style';

export const InfoBlock = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <InfoBlockWrapperStyled >
            <InfoBlockStyled />
            <InfoBlockTypographyStyled
                variant='h2'
                align='center'
                gutterBottom
            >
                {t('main.sidebar.start-pairs-search-title')}
            </InfoBlockTypographyStyled>
            <InfoBlockTypographyStyled
                align='center'
                gutterBottom
            >
                {t('main.sidebar.start-pairs-search-description')}
            </InfoBlockTypographyStyled>
        </InfoBlockWrapperStyled>
    );
};
