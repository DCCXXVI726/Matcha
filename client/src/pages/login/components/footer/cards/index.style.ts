import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Card, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import { LIGHT, ThemeColors } from '../../../../../theme';
import { StyledProps } from '../../../index.style';

export const CarouselStyled = styled(Carousel)`
.Banner {
    height: 400px;
    position: relative;
}

.Banner .Media {
    background-color: white;
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: 300ms;
    cursor: pointer;
}

.Banner .Media .MediaCaption {
    text-overflow: ellipsis;
    position: absolute;
    bottom: 0;
    padding: 15px;
    background-color: black;
    color: white;
    opacity: 0.6;
    width: 100%;
    height: 10%;
    font-size: 25px;
    font-weight: 200;
    transition: 300ms;
    cursor: pointer;
}

.Banner .Media .MediaCaption:hover {
    opacity: 0.8;
}

.Banner .Media:hover {
    filter: brightness(115%);
}

.Banner .BannerGrid {
    height: 100%;
    position: relative;
}

.Banner .Content {
    color: white;
    background-color: #771818;
    height: 100%;
    position: relative;
    cursor: pointer;
    padding: 30px;
    transition: 300ms;
}

.Banner .Content:hover,
.Banner .Content:active {
    background-color: #571111;
}

.Banner .Content:hover .ViewButton,
.Banner .Content:active .ViewButton {
    background-color: #f1f1f1;
    color: #771818;
}

.Banner .Content .Title {
    font-size: 40px;
    font-weight: 500;
}

.Banner .Content .Caption {
    margin-top: 10px;
    font-size: 21px;
}

.Banner .Content .ViewButton {
    margin-top: 40px;
    color: white;
    font-size: 25px;
    border: 3px solid white;
    text-transform: capitalize;
    transition: 200ms;
}
`;

export const CardStyled = styled(Card)(({ theme, currentTheme }: StyledProps) => css`
    min-width: 400px;
    min-height: 300px;
    margin: 20px;
    padding: 10px;

    &.MuiPaper-root {   
        background-color: ${(theme as ThemeColors).primary};
        color: ${(theme as ThemeColors).secondary};
    }

    ${currentTheme === LIGHT
        ? 'box-shadow:  5px 5px 25px #f2f2f2, -5px -5px 25px #ffffff;'
        : 'box-shadow:  5px 5px 25px #242424, -5px -5px 25px #282828;'
}

`);

export const HeadlineStyled = styled.div(({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(theme as ThemeColors).secondary};
    padding-bottom: 0.1rem;

`);

export const DescriptionStyled = styled(Typography)`
    padding-top: 1rem;

`;
