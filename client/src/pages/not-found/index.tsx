import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const NotFound = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Card>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant='h5' component='h2'>
                    Word of the Day
                </Typography>
                <Typography color='textSecondary'>
                    adjective
                </Typography>
                <Typography variant='body2' component='p'>
                    well meaning and kindly.
                </Typography>
            </CardContent>
        </Card>
        // {t('not-found')}
        // <Link to='/'>{t('back-to-home')}</Link>
    );
};
