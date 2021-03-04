import React from 'react';
import { useTranslation } from 'react-i18next';

export const Main = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div>{t('hello')}</div>
    );
};
