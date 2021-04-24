import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { LIGHT } from '../../../../theme';
import { StyledProps } from './../../index.style';

export const MainStyled = styled.main`
    height: 100%;
`;

export const LoginSectionStyled = styled.section(({ theme, currentTheme }: StyledProps) => css`
    display: flex;
    height: 100%;
    justify-content: center;
 
    ${currentTheme === LIGHT
        ? 'box-shadow:  7px 7px 14px #e3e3e3, -7px -7px 14px #ffffff;'
        : 'box-shadow:  7px 7px 14px #222222, -7px -7px 14px #2a2a2a;'
}
`);


export const SectionStyled = styled.section`
    margin: auto;
`;

export const CarouselStyled = styled.section`
    display: flex;
    overflow-x: clip;

`;
