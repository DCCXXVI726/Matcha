import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ThemeColors } from '../../../../components/theme';

export const MainStyled = styled.main(({ theme }) => css`
    color: ${(theme as ThemeColors).secondary};
    height: 100%;

    & > .MuiTypography-h2 {
        margin-top: 5.5rem;
        padding-bottom: 2rem;
        background-color: ${(theme as ThemeColors).primary};
    }
`);
