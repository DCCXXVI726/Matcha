import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography } from '@material-ui/core';

import { themeTypeCast } from '../../../../utils';

const infoBlockWidth = '120px';
const infoBlockHeight = '180px';

export const InfoBlockWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 2rem;

`;

export const InfoBlockStyled = styled.div(({ theme }: StyledProps) => css`
    width: ${infoBlockWidth};
    height: ${infoBlockHeight};
    background: linear-gradient(90deg, ${themeTypeCast(theme).matchaPink} 35%, ${themeTypeCast(theme).matchaOrange} 98%); 
    align-self: center;
    border-radius: 16px;
    margin-bottom: 0.35em;

`);

export const InfoBlockTypographyStyled = styled(Typography)(({ theme }) => css`
    color: ${themeTypeCast(theme).secondary};

    &.MuiTypography-h2 {
        font-size: 1.75rem;
    }

`);
