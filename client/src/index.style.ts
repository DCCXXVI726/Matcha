import styled from '@emotion/styled';

export const MainContainerStyled = styled.div`
    display: grid;
    height: 100%;
    grid-template-areas:
        'header header header'
        'nav main main';
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
`;

export const MainStyled = styled.div`
    grid-area: main;
    background-color: green;
`;
