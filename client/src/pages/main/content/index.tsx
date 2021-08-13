import React from 'react';
import { useTranslation } from 'react-i18next';

import { ContentStyled } from './content.style';

export const Content = (): JSX.Element => {
    const { t } = useTranslation();
    
    return (
        <ContentStyled>
            <p>{t('hello')}</p>
        </ContentStyled>
    );
};
