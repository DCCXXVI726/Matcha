import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '@material-ui/core';

import { ThemeColors } from '../../../../../../components/theme';

export const FormStyled = styled.form(({ theme }) => css`
    background-color: ${(theme as ThemeColors).primary};
    width: 50%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

`);

export const ButtonStyled = styled(Button)`
    &.MuiButtonBase-root {
        margin: auto;
    }
`;
