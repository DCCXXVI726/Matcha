import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Select, FormControl } from '@material-ui/core';

import { ThemeColors } from '../../theme';

export const FormControlStyled = styled(FormControl)`
    &.MuiFormControl-root {
        margin: auto 0 auto 10px;
        padding: 6px 0;
    }

    & > .MuiOutlinedInput-inputMarginDense {
        padding-top: 10px;
        padding-bottom: 10px;
    }
`;

export const SelectStyled = styled(Select)(({ theme }) => css`
    &.MuiInputBase-root {
        color: ${(theme as ThemeColors).secondary};
    }

    & > .MuiOutlinedInput-notchedOutline {
        border-color: ${(theme as ThemeColors).secondary};
    }

    & .MuiSelect-root {
        color: ${(theme as ThemeColors).secondary};
    }

    & .MuiSvgIcon-root {
        color: ${(theme as ThemeColors).secondary};
    }

`);
