import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button, TextField, CircularProgress } from '@material-ui/core';

import { ThemeColors } from '../../../../components/theme';

export const TextFieldStyled = styled(TextField)(({ theme }) => css`
    & > .MuiInputBase-root {
        color: ${(theme as ThemeColors).secondary};
        border: 2px solid ${(theme as ThemeColors).secondary};
    }

    &.MuiFormControl-root {
        margin: 10px auto;
        display: block;
    }

`);

export const ButtonStyled = styled(Button)`
    &.MuiButtonBase-root {
        display: block;
        margin: auto;
    }
`;

export const CircularProgressStyled = styled(CircularProgress)(({ theme }) => css`
    margin: auto;

    &.MuiCircularProgress-colorPrimary {
        color: ${(theme as ThemeColors).secondary};
    }

    &.MuiCircularProgress-root {
        display: block;
    }
`);
