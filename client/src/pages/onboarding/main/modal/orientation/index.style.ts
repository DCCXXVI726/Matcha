import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FormControlLabel, Theme } from '@material-ui/core';

import { themeTypeCast } from './../../../../../utils';

export const MenuListStyled = styled.ul(({ theme }) => css`
    list-style: none;
    max-height: 30vh;
    overflow-y: auto;
    margin: 2vw;
    background-color: ${themeTypeCast(theme).primary};
    color: ${themeTypeCast(theme).secondary};
    padding: 0;

    & li {
        list-style-type: none;
        margin: 1rem auto;
    }

`);

interface FormControlLabelStyledProps {
    theme: Theme
    isChecked: boolean
}

export const FormControlLabelStyled = styled(FormControlLabel)(({
    theme,
    isChecked
}: FormControlLabelStyledProps) => css`
    width: auto;
    overflow: hidden;
    box-sizing: border-box;
    min-height: 48px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    padding-top: 6px;
    white-space: nowrap;
    letter-spacing: 0.00938em;
    padding-bottom: 6px;

    &.MuiFormControlLabel-root {
        margin: 0.3rem;
        display: block;
        border-radius: 10px;
        border: 1px solid ${themeTypeCast(theme).primary};
    }

    &.MuiButtonBase-root {
        margin: 1vh auto;
    }

    ${isChecked && css`
        &.MuiFormControlLabel-root {
            color: ${themeTypeCast(theme).secondary};
            background-color: ${themeTypeCast(theme).primary};
            border: 1px solid ${themeTypeCast(theme).secondary};
        }

        &:hover {
            color: ${themeTypeCast(theme).secondary};
            background-color: ${themeTypeCast(theme).primary};
        }
    `}

    &:hover {
        color: ${themeTypeCast(theme).secondary};
        border: 1px solid ${themeTypeCast(theme).secondary};
    }

    & > .MuiButtonBase-root {
        display: none;
    }

    & > .MuiTypography-body1 {
        font-size: 1.3rem;
        margin: auto auto auto 1rem;
    }
`);
