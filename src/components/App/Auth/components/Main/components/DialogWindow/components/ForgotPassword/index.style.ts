import styled from 'styled-components';
import {
    Typography,
    Dialog,
    TextField,
} from '@material-ui/core';

import { gray7 } from 'Styles/colors.config.style';

import { ButtonStyled } from '../../index.style';

interface ButtonProps {
    disabled?: boolean;
}

export const Button = styled(ButtonStyled)<ButtonProps>`
    background: ${(props: ButtonProps) => props.disabled
        ? `linear-gradient(262deg, #ff7854, #fd267d)`
        : 'blue'
    };

`;

export const ImageStyled = styled.img`
    display: block;
    margin: 30px auto 15px;
    width: 30px;

`;

export const TextFieldStyled = styled(TextField)`
    text-transform: none;

`;

export const TypographyTittleStyled = styled(Typography)`
    font-weight: bold;
    font-style: italic;
    text-transform: none;
    font-size: 1.5rem;

`;

export const TypographyDescriptionStyled = styled(Typography)`
    text-transform: none;
    margin-top: 30px;
    color: ${gray7};
    font-size: 1.2rem;
    font-weight: lighter;

`;

export const TypographyStyled = styled(Typography)`
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;

`;

const paper = 'DialogPaper';
export const DialogStyled = styled(Dialog).attrs({
    classes: { paper }
})`
    .${paper} {
        padding-left: 44px;
        padding-right: 44px;
        width: 440px;
        user-select: none;
        text-transform: uppercase;
    }

`;

export const DialogWindowStyled = styled.div``;
