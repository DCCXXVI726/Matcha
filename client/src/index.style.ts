import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MainContainerStyled = styled.div(({ theme }) => css`
    display: grid;
    height: 100%;
    grid-template-areas:
        'header header header'
        'nav main main';
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    background-color: ${theme.primary};
`);

export const MainStyled = styled.main`
    grid-area: main;
`;
