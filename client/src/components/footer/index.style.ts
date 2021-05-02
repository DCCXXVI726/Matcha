import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography, Link } from '@material-ui/core';

import { ThemeColors } from '../theme';

export const FooterStyled = styled.footer(({ theme }) => css`
    & img {
        width: 48px;
        height: 100%;
    }

    display: flex;
    color: ${(theme as ThemeColors).secondary};
    justify-content: space-between;
    border-top: 1px solid ${(theme as ThemeColors).secondary};
    margin-right: 5rem;
    margin-left: 5rem;
    padding: 1rem;
`);

export const TypographyStyled = styled(Typography)`
    display: flex;

`;

export const LinkStyled = styled(Link)`
    margin-left: 1rem;

`;
