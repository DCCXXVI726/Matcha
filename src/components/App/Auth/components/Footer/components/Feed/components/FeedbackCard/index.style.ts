import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import {
    Typography,
    Card,
} from '@material-ui/core';

import { black, coolGray1, coolGray5 } from 'Styles/colors.config.style';

export const SvgIconStyled = styled(CreateIcon)`
    position: absolute;
    right: 0;
    top: -2px;

`;

export const TypographyStyled = styled(Typography)`
    color: ${black};
    font-weight: bold;
    font-size: 1.3rem;
    border-bottom: 1px solid ${coolGray1};
    margin-bottom: 10px;

`;

export const DescriptionStyled = styled(Typography)`
    color: ${coolGray5};

`;

export const TittleStyled = styled.div`
    position: relative;

`;

export const CardStyled = styled(Card)`
    user-select: none;
    box-shadow: 0 2px 6px 0 rgba(112,125,134,0.14);
    margin: 20px;
    border: 1px solid ${coolGray1};

`;
