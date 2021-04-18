import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NotFound = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            {t('not-found')}
            <Link to='/'>{t('back-to-home')}</Link>
        </>
    );
};
