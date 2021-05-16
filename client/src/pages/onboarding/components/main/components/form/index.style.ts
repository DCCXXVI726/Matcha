import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '@material-ui/core';

import { ThemeColors } from '../../../../../../components/theme';

export const FormStyled = styled.form(({ theme }) => css`

    & .MuiInputBase-root, .MuiFormControlLabel-root, .MuiTypography-root {
        background-color: ${(theme as ThemeColors).primary};
    }

    width: 50%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

`);

export const ButtonStyled = styled(Button)`
    &.MuiButtonBase-root {
        margin: 5vh auto 0;
        display: block;
    }
`;

export const FormDividerStyled = styled.div(({ theme }) => css`
    grid-column: 1 / span 2;

    & > p:nth-child(1) {
        font-style: italic;
    }

    & > p:nth-child(1)::after, & > p:nth-child(1)::before {
        background-color: ${(theme as ThemeColors).secondary};
        width: 28%;
        height: 1px;
        display: inline-block;
        vertical-align: middle;
        margin: 6px;
        content: '';
    }

`);

export const SplitterStyled = styled.div`
    margin: 1vh auto;
`;

export const ChipsWrapperStyled = styled.div`
    margin: 1vh auto;

`;

export const ImageStyled = styled.img`
    margin: 2rem auto;

`;
