import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Link } from 'react-router-dom';

import { ThemeColors } from '../../theme/index';
import { Typography, Button, Modal } from '@material-ui/core';

interface HeaderStyledProps {
    theme?: Theme
    currentTheme: string
    children: JSX.Element[]
}

export const HeaderStyled = styled.header(({ theme, currentTheme }: HeaderStyledProps) => css`
    ${currentTheme === 'LIGHT'
        ? 'box-shadow:  20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;'
        : 'box-shadow:  20px 20px 60px #202020, -20px -20px 60px #2c2c2c;'
    }
    background-color: ${(<ThemeColors>theme).primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`);

export const FormStyled = styled.form(({ theme }) => css`
    background-color: ${(<ThemeColors>theme).primary};
    display: grid;
    justify-content: center;

`);

export const LinkStyled = styled(Link)`
    display: block;
    padding-top: 10px;

`;

export const TypographyStyled = styled(Typography)(({ theme }) => css`
    display: inline-block;
    color: ${(<ThemeColors>theme).secondary};

    &:hover &:active {
        color: ${(<ThemeColors>theme).secondary};
    }

    &.MuiTypography-body1 {
        font-size: 3rem;
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
    background-color: ${(<ThemeColors>theme).primary};
    color: ${(<ThemeColors>theme).secondary};
`);


export const ButtonWrapper = styled(Button)`
    &.MuiButtonBase-root {
        display: block;
        margin: auto;
        font-size: 1.2rem;
    }
`;

export const ModalStyled = styled(Modal)(({ theme }) => css`
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
        width: 400px;
        z-index: 1;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 500px;
        /* {theme} */
        border-radius: 10px;
        /* background: ${(theme as ThemeColors).primary}; */
        background: white;
        box-shadow: 17px 17px 34px #c7c7c7, -17px -17px 34px #f9f9f9;
    }
`);

export const AsideStyled = styled.aside(({ theme }) => css`
    outline: none;
    inset: unset;
    position: absolute;
    margin: auto;
    width: 400px;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 500px;
    border-radius: 10px;
    /* background: ${(theme as ThemeColors).primary}; */
    background: white;
    box-shadow: 17px 17px 34px #c7c7c7, -17px -17px 34px #f9f9f9;
`);
