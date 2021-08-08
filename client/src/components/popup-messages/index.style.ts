import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Snackbar, SnackbarProps } from '@material-ui/core';

import { LIGHT } from '../theme';
import { themeTypeCast } from '../../utils';

export const SnackbarStyled = styled(Snackbar)(({ theme, currentTheme }: StyledProps & SnackbarProps) => css`
    ${currentTheme === LIGHT
        ? 'box-shadow:  5px 5px 10px #e3e3e3, -5px -5px 10px #ffffff;'
        : 'box-shadow:  5px 5px 10px #222222, -5px -5px 10px #2a2a2a;'
}
    & > .MuiSnackbarContent-root {
        background-color: ${themeTypeCast(theme).primary};
        color: ${themeTypeCast(theme).secondary};
        font-size: 1.2rem;
    }
`);
