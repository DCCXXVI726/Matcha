import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Fade, Backdrop, IconButton } from '@material-ui/core';

export const IconButtonStyled = styled(IconButton)(({ theme }) => css`
    display: block;
    float: right;
`);
