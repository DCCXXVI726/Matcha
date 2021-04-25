import React from 'react';
import { useTranslation } from 'react-i18next';

import { AccountRecoveryForm } from '../../../form/account-recovery-container';

import { TypographyStyled, DescriptionStyled } from '../../../../index.style';

import { LoginBlockStyled } from '../../index.style';

export const AccountRecovery = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <TypographyStyled>
                {t('login-account-recovery-title')}
            </TypographyStyled>
            <DescriptionStyled>
                {t('login-account-recovery-description')}
            </DescriptionStyled>
            <LoginBlockStyled>
                <AccountRecoveryForm />
            </LoginBlockStyled>
        </>
    );
};
