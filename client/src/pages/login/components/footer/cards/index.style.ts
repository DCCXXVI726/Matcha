import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Grid, Typography, Card } from '@material-ui/core';

import { LIGHT } from '../../../../../components/theme';
import { themeTypeCast } from '../../../../../utils';

export const GridStyled = styled(Grid)(({ theme, currentTheme }: StyledProps) => css`
    min-height: 20rem;
    min-width: 16rem;
    margin: 20px;
    padding: 10px;

    &.MuiPaper-root {   
        background-color: ${themeTypeCast(theme).primary};
        color: ${themeTypeCast(theme).secondary};
    }

    &.MuiGrid-grid-xs-4 {
        flex-grow: 0;
        max-width: calc(33.333333% - 40px);
        flex-basis: calc(33.333333% - 40px);
    }

    ${currentTheme === LIGHT
        ? 'box-shadow:  5px 5px 25px #f2f2f2, -5px -5px 25px #ffffff;'
        : 'box-shadow:  5px 5px 25px #181818, -5px -5px 25px #343434;'
}

`);

export const HeadlineStyled = styled.div(({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${themeTypeCast(theme).secondary};
    padding-bottom: 0.1rem;

`);

export const DescriptionStyled = styled(Typography)`
    padding-top: 1rem;

`;

export const CardStyld = styled(Card)(({ theme }) => css`
    &.MuiPaper-root {
        background-color: ${themeTypeCast(theme).primary};
        color: ${themeTypeCast(theme).secondary};
    }
`);
