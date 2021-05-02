import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Grid, Typography, Card } from '@material-ui/core';

import { LIGHT, ThemeColors } from '../../components/theme';

export const CardStyld = styled(Card)(({ theme, currentTheme }: StyledProps) => css`
    &.MuiPaper-root {
        background-color: ${(theme as ThemeColors).primary};
        color: ${(theme as ThemeColors).secondary};
    }

    ${currentTheme === LIGHT
        ? 'box-shadow: 17px 17px 34px #c7c7c7, -17px -17px 34px #f9f9f9;'
        : 'box-shadow:  15px 15px 30px #202020, -15px -15px 30px #2c2c2c;'
}
    background-color: ${(theme as ThemeColors).primary};
`);
