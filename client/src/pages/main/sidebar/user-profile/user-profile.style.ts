import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { Avatar, Typography } from '@material-ui/core';

import { themeTypeCast } from '../../../../utils';

export const UserProfileStyled = styled.div(({ theme }: StyledProps) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 64px;
    background: ${themeTypeCast(theme).matchaPink};
    background: linear-gradient(90deg, ${themeTypeCast(theme).matchaPink} 35%, ${themeTypeCast(theme).matchaOrange} 98%); 

`);

export const WrapperStyled = styled.div`
    display: flex;
    align-items: center;

`;

export const UserProfileAvatarStyled = styled(Avatar)`
    margin: 0 10px;
`;

export const UserProfileTypographyStyled = styled(Typography)(({ theme }) => css`
    color: ${themeTypeCast(theme).sidebarTitle};

    &.MuiTypography-h2 {
        font-size: 1.75rem;
        margin-right: 10px;
    }

`);

export const UserProfileNavLinkStyled = styled(NavLink)(({ theme }) => css`
    display: flex;

    & > svg {
        color: ${themeTypeCast(theme).sidebarTitle};
    }
    
`);
