import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TextField } from '@material-ui/core';

import { ThemeColors } from '../../theme';

export const TextFieldStyled = styled(TextField)(({ theme }) => css`
    & > .MuiInputBase-root {
        color: ${(theme as ThemeColors).secondary};
        border: 2px solid ${(theme as ThemeColors).secondary};
    }

    &.MuiFormControl-root {
        margin: 10px auto;
        display: block;
    }

    & > div > .MuiOutlinedInput-notchedOutline {
        border: none;
    }

`);
