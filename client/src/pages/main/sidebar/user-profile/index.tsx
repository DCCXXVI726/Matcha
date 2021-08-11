import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    UserProfileStyled,
    TypographyStyled,
    SidebarAvatarStyled
} from './user-profile.style';

export const UserProfile = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <UserProfileStyled>
            <SidebarAvatarStyled
                alt='User avatar'
            >
                {'N'}
            </SidebarAvatarStyled>
            <TypographyStyled
                variant='h2'
            >
                {t('main.header.my-profile')}
            </TypographyStyled>
        </UserProfileStyled>
    );
};
