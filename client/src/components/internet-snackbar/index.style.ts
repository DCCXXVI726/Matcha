import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Snackbar, SnackbarProps } from '@material-ui/core';

import { StyledProps } from './../../pages/login/index.style';
import { LIGHT, ThemeColors } from '../../theme';


export const SnackbarStyled = styled(Snackbar)(({ theme, currentTheme }: StyledProps & SnackbarProps) => css`
    ${currentTheme === LIGHT
        ? 'box-shadow:  5px 5px 10px #e3e3e3, -5px -5px 10px #ffffff;'
        : 'box-shadow:  5px 5px 10px #222222, -5px -5px 10px #2a2a2a;'
}
    & > .MuiSnackbarContent-root {
        background-color: ${(theme as ThemeColors).primary};
        color: ${(theme as ThemeColors).secondary};
        font-size: 1.2rem;
    }
`);
