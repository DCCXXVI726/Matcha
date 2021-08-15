import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Avatar, Typography } from '@material-ui/core';

import { themeTypeCast } from '../../../../utils';

export const UserProfileStyled = styled.div(({ theme }: StyledProps) => css`
    display: flex;
    align-items: center;
    height: 64px;
    background: ${themeTypeCast(theme).pink};
    background: linear-gradient(90deg, ${themeTypeCast(theme).matchaPink} 35%, ${themeTypeCast(theme).matchaOrange} 98%); 

`);

export const UserProfileAvatarStyled = styled(Avatar)`
    margin: 0 10px;
`;

export const UserProfileTypographyStyled = styled(Typography)(({ theme }) => css`
    color: ${themeTypeCast(theme).sidebarTitle};

    &.MuiTypography-h2 {
        font-size: 1.75rem;
    }

`);
