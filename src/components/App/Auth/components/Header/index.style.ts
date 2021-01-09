import styled from 'styled-components';
import { Button, Container, Link, Paper } from '@material-ui/core';

import { white, pink0, noColor } from 'Styles/colors.config.style';

export const PaperStyled = styled(Paper)`
    background-color: ${noColor};

    & img {
        width: 20px;
    }
`;


export const LogoStyled = styled(Container)`
    display: flex;
    align-items: center;
    user-select: none;

`;

export const ContolStyled = styled(Container)`
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;

`;

export const ButtonStyled = styled(Button)`
    background-color: ${white};
    font-weight: bold;
    color: ${pink0};

    &:hover {
        color: ${white};
        background: linear-gradient(262deg, #ff7854, #fd267d);
    }

`;

export const SvgStyled = styled.svg`
    fill: ${white};
    margin-right: 5px;
    margin-bottom: 3px;
    width: 16px;

`;

export const LinkStyled = styled(Link)`
    color: ${white};
    display: flex;
    align-items: center;
    margin-right: 20px;

    &:hover {
        color: ${pink0};

        & svg {
            fill: ${pink0};
        }
    }

`;

export const ContainerStyled = styled(Container)`
    max-width: unset;
    width: 100%;
    background-color: black;
    display: flex;
    padding: 20px 0px;
    color: ${white};
    user-select: none;

`;
