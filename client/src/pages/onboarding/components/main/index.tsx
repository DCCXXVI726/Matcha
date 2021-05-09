import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

import { RegistrationForm } from './components/form';
import { RegistrationModal } from './components/modal/rules';

import { MainStyled, HeadlineWrapperStyled } from './index.style';

export const Main = (): JSX.Element => {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(true);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <MainStyled>
            <HeadlineWrapperStyled>
                <Typography
                    variant='h2'
                    align='center'
                >
                    {t('create-account')}
                </Typography>
            </HeadlineWrapperStyled>
            <RegistrationModal
                open={open}
                handleClose={handleClose}
            />
            <RegistrationForm />
        </MainStyled>
    );
};
