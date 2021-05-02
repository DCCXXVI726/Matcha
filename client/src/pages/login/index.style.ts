import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography, Button, Modal } from '@material-ui/core';

import { LIGHT, ThemeColors } from '../../components/theme';

export const FormStyled = styled.form(({ theme }) => css`
    background-color: ${(theme as ThemeColors).primary};

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
