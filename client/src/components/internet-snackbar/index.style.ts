import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Snackbar, SnackbarProps } from '@material-ui/core';

import { StyledProps } from './../../pages/login/index.style';
import { LIGHT, ThemeColors } from '../../theme';


export const SnackbarStyled = styled(Snackbar)(({ theme, currentTheme }: StyledProps & SnackbarProps) => css`
    ${currentTheme === LIGHT
        ? 'box-shadow:  5px 5px 20px #a1a1a1, -5px -5px 20px #ffffff;'
        : 'box-shadow:  5px 5px 20px #181818, -5px -5px 20px #343434;'
}
    & > .MuiSnackbarContent-root {
        background-color: ${(theme as ThemeColors).primary};
        color: ${(theme as ThemeColors).secondary};
        font-size: 1.2rem;
    }
`);
