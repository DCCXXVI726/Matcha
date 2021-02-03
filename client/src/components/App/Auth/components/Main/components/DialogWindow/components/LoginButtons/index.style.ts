import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { white, black, gray6 } from 'Styles/colors.config.style';

export const ImageStyled = styled.img`
    display: block;
    margin: 30px auto 15px;
    width: 30px;

`;

export const ButtonWithLogoStyled = styled(Button)`
    border-radius: 100px;
    background-color: ${white};
    box-shadow: none;
    border: 1px solid ${gray6};
    color: ${gray6};
    margin-bottom: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-around;

    & span {
        justify-content: normal;
        font-size: 1.1rem;
        font-weight: bold;
    }

    & ${ImageStyled} {
        margin: 0 30px 0 0;
    }

    &:hover {
        box-shadow: none;
        color: ${black};
        border-color: ${black};
        background-color: ${white};
    }

`;
