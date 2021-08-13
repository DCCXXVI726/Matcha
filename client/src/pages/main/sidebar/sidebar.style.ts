import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { themeTypeCast } from '../../../utils';

export const sidebarWidth = '320px';

export const SidebarStyled = styled.aside(({ theme }: StyledProps) => css`
    width: ${sidebarWidth};
    border-color: ${themeTypeCast(theme).transparent};
    border-left-width: 1px;
    border-style: solid;
    background-color: ${themeTypeCast(theme).primary};

`);
