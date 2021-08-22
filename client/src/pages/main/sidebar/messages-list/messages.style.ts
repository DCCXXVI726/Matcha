import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography } from '@material-ui/core';

import { themeTypeCast } from '../../../../utils';

export const MessagesListComponentStyled = styled.ul`
    margin: 0;
    padding: 0;
    overflow: scroll;

    & > li {
        list-style: none;
        padding: 10px;
        max-height: 60px;
    }

`;

export const MessagesListItemStyled = styled.li(({ theme }) => css`
    display: flex;
    width: 100%;
    overflow: hidden;

    &:hover, &:active {
        background-color: ${themeTypeCast(theme).primary8A};
    }

`);

export const MessagesListItemWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const MessagesListItemTypographyStyled = styled(Typography)(({ theme }) => css`
    align-self: center;
    padding: 0 10px;
    width: 100%;
    align-self: flex-start;

    &.message-title {
        font-weight: 600;
    }

    &.message-body {
        color: ${themeTypeCast(theme).primary70A};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: "...";
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        width: 80%;
    }

    &.MuiTypography-body1 {
        font-size: 1.2rem;
    }

    color: ${themeTypeCast(theme).secondary};

`);
