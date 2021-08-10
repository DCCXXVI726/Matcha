import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Typography, Button, Modal } from '@material-ui/core';

import { LIGHT } from '../../components/theme';
import { themeTypeCast } from '../../utils';

export const FormStyled = styled.form(({ theme }) => css`
    background-color: ${themeTypeCast(theme).primary};

`);

interface TypographyStyledProps {
    theme?: Theme
    fontSize?: string
    padding?: string
}

export const TypographyStyled = styled(Typography)(({
    theme,
    fontSize,
    padding
}: TypographyStyledProps) => css`
    padding: ${padding || '20px 0'};
    text-align: center;
    display: block;
    color: ${themeTypeCast(theme).secondary};

    &:hover &:active {
        color: ${themeTypeCast(theme).secondary};
    }

    &.MuiTypography-body1 {
        font-size: ${fontSize};
        line-height: 1;
    }
`);

export const DescriptionStyled = styled(Typography)(({ theme }) => css`
    text-align: center;
    display: block;
    color: ${themeTypeCast(theme).secondary};

    &:hover &:active {
        color: ${themeTypeCast(theme).secondary};
    }

    &.MuiTypography-body1 {
        font-size: 1.2rem;
        line-height: 1;
    }
`);

export const HeadlineStyled = styled(Typography)(({ theme }) => css`
    background-color: ${themeTypeCast(theme).primary};
    color: ${themeTypeCast(theme).secondary};
`);


export const ButtonWrapper = styled(Button)`
    &.MuiButtonBase-root {
        display: block;
        margin: auto;
        font-size: 1.2rem;
    }
`;

export const ModalStyled = styled(Modal)(({ theme, currentTheme }: StyledProps) => css`
    .MuiBackdrop-root {
        ${currentTheme === LIGHT
        ? `background: ${themeTypeCast(theme).primary70A};`
        : `background: ${themeTypeCast(theme).primary8A};`
}
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
    min-height: '20vh';
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
        ? `box-shadow: 17px 17px 34px ${themeTypeCast(theme).primary40A}, -17px -17px 34px ${themeTypeCast(theme).primary40A};`
        : `box-shadow:  15px 15px 30px ${themeTypeCast(theme).primary8A}, -15px -15px 30px ${themeTypeCast(theme).primary8A};`
}
    background-color: ${themeTypeCast(theme).primary};
`);
