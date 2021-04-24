import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Card, Typography } from '@material-ui/core';

import { LIGHT, ThemeColors } from '../../../../../theme';
import { StyledProps } from './../../../index.style';

export const CardStyled = styled(Card)(({ theme, currentTheme }: StyledProps) => css`
    min-width: 400px;
    min-height: 300px;
    margin: 20px;
    padding: 10px;

    &.MuiPaper-root {   
        background-color: ${(theme as ThemeColors).primary};
        color: ${(theme as ThemeColors).secondary};
    }

    ${currentTheme === LIGHT
        ? 'box-shadow:  5px 5px 25px #f2f2f2, -5px -5px 25px #ffffff;'
        : 'box-shadow:  5px 5px 25px #242424, -5px -5px 25px #282828;'
}

`);

export const HeadlineStyled = styled.div(({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(theme as ThemeColors).secondary};
    padding-bottom: 0.1rem;

`);

export const DescriptionStyled = styled(Typography)`
    padding-top: 1rem;

`;
