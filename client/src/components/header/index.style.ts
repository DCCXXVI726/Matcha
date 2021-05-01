import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { LIGHT, ThemeColors } from '../../theme';

export const LogoWrapperStyled = styled.img`
    height: 3rem;
    margin: 0 10px 0;

`;

export const ButtonLoginWrapper = styled(Button)`
    &.MuiButtonBase-root {
        font-size: 1.2rem;
        margin: 0px 20px 0px 10px;
    }
`;


export const WrapperStyled = styled.div`
    margin: auto 0;
`;

export const TypographyLogoStyled = styled(Typography)(({ theme }) => css`
    display: inline-block;
    color: ${(theme as ThemeColors).secondary};

    &:hover &:active {
        color: ${(theme as ThemeColors).secondary};
    }

    &.MuiTypography-body1 {
        font-size: 2.5rem;
    }
`);

export const LinkStyled = styled(Link)`
    display: block;
    padding-top: 10px;

`;

export const HeaderStyled = styled.header(({ theme, currentTheme }: StyledProps) => css`
    ${currentTheme === LIGHT
        ? 'box-shadow:  20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;'
        : 'box-shadow:  20px 20px 60px #202020, -20px -20px 60px #2c2c2c;'
}
    background-color: ${(theme as ThemeColors).primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`);
