import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { FormControlLabel, Button, Chip } from '@material-ui/core';

import { ThemeColors } from '../../../../../../../components/theme';
import { white } from '../../../../../../../components/theme/colors.config.style';

export const ChipStyled = styled(Chip)(({ theme }) => css`
    &.MuiChip-root {
        margin: 0.3rem;
        transition: none;
    }

    &.MuiChip-outlined {
        background-color: ${theme as ThemeColors.primary};
        color: ${theme as ThemeColors.secondary};
    }

    &.MuiChip-colorSecondary {
        border: 1px solid #f50057;
    }
`);

export const ChipsWrapperStyled = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0 1.5rem 1.5rem 1.5rem;

`;

interface ButtonContinueStyledProps {
    isDisable: boolean
}

export const ButtonContinueStyled = styled(Button)(({
    isDisable
}: ButtonContinueStyledProps) => css`
    &.MuiButtonBase-root {
        margin: auto auto 1rem;
        display: block;
    }

    ${isDisable && css`
        &.MuiButtonBase-root {
            cursor: default;
        }
    `}

`);

interface FormControlLabelStyledProps {
    theme: Theme
    isChecked: boolean
}

export const FormControlLabelStyled = styled(FormControlLabel)(({
    theme,
    isChecked
}: FormControlLabelStyledProps) => css`
    cursor: pointer;
    height: 32px;
    display: inline-flex;
    outline: 0;
    padding: 0;
    font-size: 0.8125rem;
    box-sizing: border-box;
    align-items: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    white-space: nowrap;
    border-radius: 16px;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    border: 1px solid ${theme as ThemeColors.brand};
    overflow: hidden;
    white-space: nowrap;
    padding-left: 12px;
    padding-right: 12px;
    text-overflow: ellipsis;

    &.MuiFormControlLabel-root {
        margin: 0.3rem;
        user-select: none;
    }

    ${isChecked
        ? css`
            background-color: ${theme as ThemeColors.brand};;
            color: ${white};
        `
        : css`
            background-color: ${theme as ThemeColors.primary};
            color: ${theme as ThemeColors.brand};
        `
}

    & > .MuiButtonBase-root {
        display: none;
    }
`);
