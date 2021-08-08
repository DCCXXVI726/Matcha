import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CircularProgress } from '@material-ui/core';

import { themeTypeCast } from '../../utils';

export const CircularProgressStyled = styled(CircularProgress)(({ theme }) => css`
    margin: auto;

    &.MuiCircularProgress-colorPrimary {
        color: ${themeTypeCast(theme).secondary};
    }

    &.MuiCircularProgress-root {
        display: block;
    }
`);

