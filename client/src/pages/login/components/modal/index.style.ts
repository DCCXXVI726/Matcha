import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button, IconButton, Typography, Link } from '@material-ui/core';

import { ThemeColors } from '../../../../components/theme';

export const IconButtonStyled = styled(IconButton)(({ theme }) => css`
    display: block;
    float: right;

    & > .MuiIconButton-label > .MuiSvgIcon-root {
        fill: ${theme as ThemeColors.secondary}
    }
`);

export const SectionStyled = styled.section`
    padding: 2rem;

`;

export const LogoWrapperStyled = styled.img`
    height: 3rem;
    margin: auto;
    display: block;

`;

export const LoginButtonStyled = styled(Button)`
    &.MuiButtonBase-root {
        display: block;
        margin: 10px auto;
    }
`;

export const LoginBlockStyled = styled.div`
    padding: 20px;
`;

export const FooterStyled = styled.footer(({ theme }) => css`
    border-top: 1px solid ${theme as ThemeColors.secondary};
`);

export const HeadlineStyled = styled(Typography)(({ theme }) => css`
    color: ${theme as ThemeColors.secondary};
    text-align: center;
    padding-top: 10px;
    font-style: italic;

    &.MuiTypography-h3 {
        font-size: 1.5rem;
    }
`);

export const AppLinkStyled = styled.div(({ theme }) => css`
    display: flex;
    justify-content: space-around;

    & > a > .MuiIconButton-label > .MuiSvgIcon-root {
        fill: ${theme as ThemeColors.secondary}
    }
`);

export const LinkStyled = styled(Link)(({ theme }) => css`
    &.MuiTypography-colorPrimary {
        margin: 10px auto;
        display: block;
        text-decoration: underline;
        color: ${theme as ThemeColors.secondary};
    }
`);
