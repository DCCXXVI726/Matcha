import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography } from '@material-ui/core';

import { themeTypeCast } from '../../../../utils';

export const PairsListStyled = styled.ul`
    margin: 0;
    padding: 0;
    overflow: scroll;

    & > li {
        list-style: none;
        margin: 10px;
    }
`;

export const PairsItemStyled = styled.li(({ theme }) => css`
    display: flex;
    &:hover, &:active {
        background-color: ${themeTypeCast(theme).primary8A};
    }

`);

export const PairsTypographyStyled = styled(Typography)(({ theme }) => css`
    align-self: center;

    &.MuiTypography-body1 {
        font-size: 1.5rem;
    }

    &.MuiTypography-root {
        margin-left: 10px;
    }
    color: ${themeTypeCast(theme).secondary};

`);
