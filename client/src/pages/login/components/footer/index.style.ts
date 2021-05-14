import { LIGHT } from './../../../../components/theme/index';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography, Link } from '@material-ui/core';

import { ThemeColors } from '../../../../components/theme';

export const FooterStyled = styled.footer`
    margin-right: 5rem;
    margin-left: 5rem;
    padding: 1rem;

`;

export const TypographyStyled = styled(Typography)(({ theme }) => css`
    color: ${(theme as ThemeColors).secondary};
    background-color: ${(theme as ThemeColors).primary};
    display: flex;

`);

export const LinkStyled = styled(Link)`
    margin-left: 1rem;

`;

export const BasementStyled = styled.div(({ theme }) => css`
    & img {
        width: 48px;
        height: 100%;
        background-color: ${(theme as ThemeColors).primary};
    }

    display: flex;
    color: ${(theme as ThemeColors).secondary};
    padding-top: 1rem;
    justify-content: space-between;
    border-top: 1px solid ${(theme as ThemeColors).secondary};

`);

export const Skeletons = styled.div(({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    background-color: ${(theme as ThemeColors).primary};
`);

export const Skeleton = styled.div(({ theme, currentTheme }: StyledProps) => css`
    background-color: ${(theme as ThemeColors).primary8A};
    min-height: 20rem;
    min-width: 16rem;
    margin: 20px;
    padding: 10px;
    flex-grow: 0;
    max-width: calc(33.333333% - 40px);
    flex-basis: calc(33.333333% - 40px);
    animation: placeholderAnimation 2s linear infinite;

    @keyframes placeholderAnimation {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.4;
        }
        100% {
            opacity: 1;
        }
    }

    ${currentTheme === LIGHT
        ? 'box-shadow:  5px 5px 25px #f2f2f2, -5px -5px 25px #ffffff;'
        : 'box-shadow:  5px 5px 25px #181818, -5px -5px 25px #343434;'
}
`);
