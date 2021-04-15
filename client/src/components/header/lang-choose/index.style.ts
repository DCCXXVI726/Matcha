import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Select } from '@material-ui/core';

export const SelectStyled = styled(Select)(({ theme }) => css`
    & .MuiSelect-root {
        color: ${theme.secondary};
    }

    & .MuiSvgIcon-root {
        color: ${theme.secondary};
    }

`);
