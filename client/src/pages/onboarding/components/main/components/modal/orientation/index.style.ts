import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MenuItem, Theme } from '@material-ui/core';

import { ThemeColors } from '../../../../../../../components/theme';

export const MenuListStyled = styled.ul(({ theme }) => css`
    list-style: none;
    max-height: 30vh;
    overflow-y: auto;
    margin: 2vw;
    background-color: ${(theme as ThemeColors).primary};
    color: ${(theme as ThemeColors).secondary};

`);

interface MenuItemStyledProps {
    theme?: Theme
    isChecked: boolean
}

export const MenuItemStyled = styled(MenuItem)(({
    theme,
    isChecked
}: MenuItemStyledProps) => css`
    &.MuiButtonBase-root {
        margin: 1vh auto;
    }

    &.MuiMenuItem-root {
        border-radius: 10px;
        border: 1px solid ${(theme as ThemeColors).primary};
    }

    ${isChecked && css`
        &.MuiMenuItem-root {
            border-radius: 10px;
            color: ${(theme as ThemeColors).secondary};
            background-color: ${(theme as ThemeColors).primary};
            border: 1px solid ${(theme as ThemeColors).secondary};
        }

        &.MuiListItem-button:hover {
            color: ${(theme as ThemeColors).secondary};
            background-color: ${(theme as ThemeColors).primary};
        }
    `}
`);
