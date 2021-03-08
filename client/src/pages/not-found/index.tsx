import React from 'react';
import { useTranslation } from 'react-i18next';

export const NotFound = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>{t('not-found')}</>
    );
};
