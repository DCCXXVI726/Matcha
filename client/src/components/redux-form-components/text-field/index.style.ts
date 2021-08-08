import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TextField } from '@material-ui/core';

import { themeTypeCast } from '../../../utils';

export const TextFieldStyled = styled(TextField)(({ theme }) => css`
    & > .MuiInputBase-root {
        color: ${themeTypeCast(theme).secondary};
        border: 2px solid ${themeTypeCast(theme).secondary};
    }

    &.MuiFormControl-root {
        margin: 10px auto;
        display: block;
    }

    & > div > .MuiOutlinedInput-notchedOutline {
        border: none;
    }

`);
