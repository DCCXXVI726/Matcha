import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    UserProfileStyled,
    UserProfileTypographyStyled,
    UserProfileAvatarStyled
} from './user-profile.style';

export const UserProfile = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <UserProfileStyled>
            <UserProfileAvatarStyled
                alt='User avatar'
            >
                {'N'}
            </UserProfileAvatarStyled>
            <UserProfileTypographyStyled
                variant='h2'
            >
                {t('main.sidebar.my-profile')}
            </UserProfileTypographyStyled>
        </UserProfileStyled>
    );
};
