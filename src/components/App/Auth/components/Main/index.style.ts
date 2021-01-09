import styled from 'styled-components';
import {
    Typography,
    Container,
} from '@material-ui/core';

import { white } from 'Styles/colors.config.style';

export const TypographyStyled = styled(Typography)`
    font-weight: bold;

`;

export const ContainerStyled = styled(Container)`
    max-width: unset;
    width: 100%;
    background-color: black;
    display: grid;
    padding: 20px 0px;
    color: ${white};
    user-select: none;

`;
