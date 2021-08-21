import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Snackbar, SnackbarProps } from '@material-ui/core';

import { themeTypeCast } from '../../utils';

export const SnackbarStyled = styled(Snackbar)(({ theme }: StyledProps & SnackbarProps) => css`
    & > .MuiSnackbarContent-root {
        background-color: ${themeTypeCast(theme).primary};
        color: ${themeTypeCast(theme).secondary};
        font-size: 1.2rem;
    }
`);
