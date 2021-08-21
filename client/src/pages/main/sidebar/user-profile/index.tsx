import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@material-ui/icons/Home';

import { navigation } from '../../../../navigation';

import {
    UserProfileStyled,
    WrapperStyled,
    UserProfileTypographyStyled,
    UserProfileAvatarStyled,
    UserProfileNavLinkStyled
} from './user-profile.style';

export const UserProfile = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <UserProfileStyled>
            <WrapperStyled>
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
            </WrapperStyled>
            <UserProfileNavLinkStyled
                to={navigation.profile}
            >
                <HomeIcon />
            </UserProfileNavLinkStyled>
        </UserProfileStyled>
    );
};
