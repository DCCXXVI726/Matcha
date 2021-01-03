import styled from 'styled-components';
import {
    Typography,
    Button,
    Container,
} from '@material-ui/core';

import { white } from 'Styles/colors.config.style';

export const TypographyStyled = styled(Typography)`
    font-weight: bold;

`;

export const ButtonStyled = styled(Button)`
    background: linear-gradient(262deg, #ff7854, #fd267d);
    font-weight: bold;
    color: ${white};
    width: 260px;
    min-height: 55px;
    border-radius: 100px;
    margin: 20px auto 0 auto;

    &:hover {
        background: linear-gradient(262deg, #fe5f61, #fe5f61);
    }

`;

export const ContainerStyled = styled(Container)`
    max-width: unset;
    width: 100%;
    background-color: black;
    display: grid;
    padding: 20px 0px;
    color: ${white};

`;
