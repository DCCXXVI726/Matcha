import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button, TextField } from '@material-ui/core';

import { ThemeColors } from '../../../../theme';

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

export const ButtonStyled = styled(Button)(({ theme }) => css`
    &.MuiButtonBase-root {
        /* color: ${(theme as ThemeColors).primary}; */
        display: block;
        margin: auto;
    }
`);
