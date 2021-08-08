import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { themeTypeCast } from '../../../../utils';

export const MainStyled = styled.main(({ theme }) => css`
    color: ${themeTypeCast(theme).secondary};
    height: 100%;

`);

export const HeadlineWrapperStyled = styled.div(({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > .MuiTypography-h2 {
        display: inline-block;
        margin-top: 5.5rem;
        padding-bottom: 2rem;
        background-color: ${themeTypeCast(theme).primary};
    }
`);
