import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Typography, Button, Modal, Link } from '@material-ui/core';

import { LIGHT, ThemeColors } from '../../theme';

export interface StyledProps {
    theme?: Theme
    currentTheme: string
    children: JSX.Element | JSX.Element[]
}

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

export const FormStyled = styled.form(({ theme }) => css`
    background-color: ${(theme as ThemeColors).primary};

`);

export const LinkStyled = styled(Link)`
    display: block;
    padding-top: 10px;

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

export const TypographyStyled = styled(Typography)(({ theme }) => css`
    padding: 20px 0;
    text-align: center;
    display: block;
    color: ${(theme as ThemeColors).secondary};

    &:hover &:active {
        color: ${(theme as ThemeColors).secondary};
    }

    &.MuiTypography-body1 {
        font-size: 2.5rem;
        line-height: 1;
    }
`);

export const DescriptionStyled = styled(Typography)(({ theme }) => css`
    text-align: center;
    display: block;
    color: ${(theme as ThemeColors).secondary};

    &:hover &:active {
        color: ${(theme as ThemeColors).secondary};
    }

    &.MuiTypography-body1 {
        font-size: 1.2rem;
        line-height: 1;
    }
`);

export const WrapperStyled = styled.div`
    margin: auto 0;
`;

export const LogoWrapperStyled = styled.img`
    height: 3rem;
    margin: 0 10px 0;

`;

export const ButtonLoginWrapper = styled(Button)`
    &.MuiButtonBase-root {
        font-size: 1.2rem;
        margin: 0 20px;
    }
`;

export const HeadlineStyled = styled(Typography)(({ theme }) => css`
    background-color: ${(theme as ThemeColors).primary};
    color: ${(theme as ThemeColors).secondary};
`);


export const ButtonWrapper = styled(Button)`
    &.MuiButtonBase-root {
        display: block;
        margin: auto;
        font-size: 1.2rem;
    }
`;

export const ModalStyled = styled(Modal)(({ theme }: StyledProps) => css`
    .MuiBackdrop-root {
        background: ${(theme as ThemeColors).transparent};
    }

    &.modal {
        display: flex;
        align-items: center;
        justify-content: center;
        inset: unset;
        outline: none;
    }

    .paper {
        outline: none;
        inset: unset;
        position: absolute;
        margin: auto;
        width: 350px;
        z-index: 1;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 450px;
        border-radius: 10px;
    }
`);

export const AsideStyled = styled.aside(({ theme, currentTheme }: StyledProps) => css`
    outline: none;
    inset: unset;
    margin: auto;
    width: 400px;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;

    ${currentTheme === LIGHT
        ? 'box-shadow: 17px 17px 34px #c7c7c7, -17px -17px 34px #f9f9f9;'
        : 'box-shadow:  15px 15px 30px #202020, -15px -15px 30px #2c2c2c;'
}
    background-color: ${(theme as ThemeColors).primary};
`);
