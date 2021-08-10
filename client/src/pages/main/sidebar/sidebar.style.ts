import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { themeTypeCast } from '../../../utils';

export const SidebarStyled = styled.aside(({ theme }: StyledProps) => css`
    width: 320px;
    border-color: ${themeTypeCast(theme).transparent};
    border-right-width: 1px;
    border-style: solid;
    background-color: ${themeTypeCast(theme).primary};

`);
