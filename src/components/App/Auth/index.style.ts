import styled from 'styled-components';

import { white, pink0 } from 'Styles/colors.config.style';
import {
    Button,
    Container,
    Link,
} from '@material-ui/core';

export const ButtonStyled = styled(Button)`
    background-color: ${white};
    color: ${pink0};

    &:hover {
        color: ${white};
        background: linear-gradient(262deg, #ff7854, #fd267d);
    }

`;

export const SvgStyled = styled.svg`
    fill: ${white};
    margin-right: 5px;

`;

export const LinkStyled = styled(Link)`
    color: ${white};
    display: flex;

    &:hover {
        color: ${pink0};

        & svg {
            fill: ${pink0};
        }
    }

`;

export const ContainerStyled = styled(Container)`
    background-color: black;
    display: flex;
    justify-content: space-around;
    padding: 20px;

`;
