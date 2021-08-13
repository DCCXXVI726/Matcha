import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Select, FormControl } from '@material-ui/core';

import { themeTypeCast } from '../../utils';

export const FormControlStyled = styled(FormControl)(({ theme }) => css`
    &.MuiFormControl-root {
        margin: auto 10px;
        padding: 6px 0;
    }

    & > .MuiOutlinedInput-inputMarginDense {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    & > .MuiOutlinedInput-root:hover > .MuiOutlinedInput-notchedOutline {
        border-color: ${themeTypeCast(theme).langChooseBorder};
    }
`);

export const SelectStyled = styled(Select)(({ theme }) => css`
    &.MuiInputBase-root {
        color: ${themeTypeCast(theme).secondary};
    }

    & > .MuiOutlinedInput-notchedOutline {
        border-color: ${themeTypeCast(theme).primary70A};
    }

    & .MuiSelect-root {
        color: ${themeTypeCast(theme).secondary};
    }

    & .MuiSvgIcon-root {
        color: ${themeTypeCast(theme).secondary};
    }

`);
