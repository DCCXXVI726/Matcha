import styled from 'styled-components';
import {
    Typography,
    Button,
    Dialog,
    DialogTitle,
} from '@material-ui/core';

import { white, black, gray7 } from 'Styles/colors.config.style';

export const TypographyStyled = styled(Typography)`
    font-weight: bold;
    font-style: italic;

`;

export const ImageStyled = styled.img`
    display: block;
    margin: 30px auto 15px;
    width: 30px;

`;

export const DialogTitleStyled = styled(DialogTitle)``;

const paper = 'DialogPaper';
export const DialogStyled = styled(Dialog).attrs({
    classes: { paper }
})`
    .${paper} {
        height: 500px;
        padding-left: 44px;
        padding-right: 44px;
        width: 440px;
        user-select: none;
        text-transform: uppercase;
    }

`;

export const DialogContentStyled = styled.div`
    p {
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 0.8rem;
        font-weight: lighter;
    }

`;

export const ButtonWithLogoStyled = styled(Button)`
    border-radius: 100px;
    background-color: ${white};
    box-shadow: none;
    border: 2px solid ${gray7};
    color: ${gray7};
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


export const DialogWindowStyled = styled.div`
    display: flex;

`;
