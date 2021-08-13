import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { themeTypeCast } from '../../../utils';

export const ContentStyled = styled.section(({ theme }: StyledProps) => css`
    background-color: ${theme.matchaContentBackground};
    width: 100%;
`);
