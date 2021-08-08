import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { themeTypeCast } from '../../utils';

export const MainStyled = styled.main(({ theme }) => css`
    color: ${themeTypeCast(theme).secondary};
    margin: auto;
    width: 70%;

    & h1,h2,h3,h4,h5,h6 {
        background-color: ${themeTypeCast(theme).primary};
        display: inline-block;
        margin: auto;
    }

    & a  {
        margin: 2vh 0px;
        text-decoration: underline;
        display: block;
        color: ${themeTypeCast(theme).secondary};
    }
`);

export const FlexWrapper = styled.div`
    display: flex;
`;

export const ImgStyled = styled.img`
    width: 50%;
    display: block;
    margin: auto;

`;
