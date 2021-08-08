import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Form } from '../../../form/login-container';
import { LoginButtonStyled, LinkStyled } from '../../index.style';

interface DefaulModalProps {
    handleRecoveryOpen: () => void
}

export const DefaulModal = ({ handleRecoveryOpen }: DefaulModalProps): JSX.Element => {
    const { t } = useTranslation();
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <>
            <LoginButtonStyled
                size='large'
                variant='contained'
                color='primary'
                fullWidth
            >
                {t('login.with-google')}
            </LoginButtonStyled>
            <LoginButtonStyled
                size='large'
                variant='contained'
                color='primary'
                fullWidth
            >
                {t('login.with-42')}
            </LoginButtonStyled>
            <LinkStyled
                component='button'
                variant='body1'
                onClick={(): void => setShowForm(!showForm)}
            >
                {t('login.additional-button')}
            </LinkStyled>
            {showForm && (
                <>
                    <Form />
                    <LinkStyled
                        type='button'
                        component='button'
                        variant='body1'
                        onClick={(): void => handleRecoveryOpen()}
                    >
                        {t('login-problems')}
                    </LinkStyled>
                </>
            )}
        </>
    );
};
