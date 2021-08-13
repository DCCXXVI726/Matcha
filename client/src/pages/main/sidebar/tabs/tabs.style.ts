import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Tab } from '@material-ui/core';

import { themeTypeCast } from '../../../../utils';

export const SidebarTabStyled = styled(Tab)(({ theme }: StyledProps) => css`
    &:not(.Mui-selected) > .MuiTab-wrapper {
        color: ${themeTypeCast(theme).secondary};
    }
`);
