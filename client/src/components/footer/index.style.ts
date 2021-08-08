import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography, Link } from '@material-ui/core';

import { themeTypeCast } from '../../utils';

export const FooterStyled = styled.footer(({ theme }) => css`
    margin-top: auto;
    display: flex;
    color: ${themeTypeCast(theme).secondary};
    justify-content: space-between;
    border-top: 1px solid ${themeTypeCast(theme).secondary};
    margin-right: 5rem;
    margin-left: 5rem;
    padding: 1rem;

    & img {
        width: 48px;
        height: 100%;
    }
`);

export const TypographyStyled = styled(Typography)`
    display: flex;

`;

export const LinkStyled = styled(Link)`
    margin-left: 1rem;

`;
