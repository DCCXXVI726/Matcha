import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FormControlLabel, Theme } from '@material-ui/core';

import { ThemeColors } from '../../../../../../../components/theme';

export const MenuListStyled = styled.ul(({ theme }) => css`
    list-style: none;
    max-height: 30vh;
    overflow-y: auto;
    margin: 2vw;
    background-color: ${theme as ThemeColors.primary};
    color: ${theme as ThemeColors.secondary};
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
        border: 1px solid ${theme as ThemeColors.primary};
    }

    &.MuiButtonBase-root {
        margin: 1vh auto;
    }

    ${isChecked && css`
        &.MuiFormControlLabel-root {
            color: ${theme as ThemeColors.secondary};
            background-color: ${theme as ThemeColors.primary};
            border: 1px solid ${theme as ThemeColors.secondary};
        }

        &:hover {
            color: ${theme as ThemeColors.secondary};
            background-color: ${theme as ThemeColors.primary};
        }
    `}

    &:hover {
        color: ${theme as ThemeColors.secondary};
        border: 1px solid ${theme as ThemeColors.secondary};
    }

    & > .MuiButtonBase-root {
        display: none;
    }

    & > .MuiTypography-body1 {
        font-size: 1.3rem;
        margin: auto auto auto 1rem;
    }
`);
