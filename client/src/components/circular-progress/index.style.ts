import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CircularProgress } from '@material-ui/core';

import { ThemeColors } from '../../components/theme';

export const CircularProgressStyled = styled(CircularProgress)(({ theme }) => css`
    margin: auto;

    &.MuiCircularProgress-colorPrimary {
        color: ${(theme as ThemeColors).secondary};
    }

    &.MuiCircularProgress-root {
        display: block;
    }
`);

