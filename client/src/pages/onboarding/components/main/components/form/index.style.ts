import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Typography, Button, Modal } from '@material-ui/core';

import { LIGHT, ThemeColors } from '../../../../../../components/theme';

export const FormStyled = styled.form(({ theme }) => css`
    background-color: ${(theme as ThemeColors).primary};
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

`);
