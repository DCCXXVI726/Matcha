import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import { white, coolGray0 } from 'Styles/colors.config.style';

import { ButtonStyled } from '../../../../index.style';

interface ButtonProps {
    disabled?: boolean;
}

export const Button = styled(ButtonStyled)<ButtonProps>`
    transition: background .5s;
    ${(props: ButtonProps) => props.disabled
        ? ` background: ${coolGray0} !important;
            color: ${white} !important;
            font-size: 1.1rem;
            text-transform: none;`
        : `background: linear-gradient(262deg, #ff7854, #fd267d)`
    };
    margin-top: 100px;
    font-weight: normal;
    width: auto;
    min-width: 260px;

`;


export const TextFieldStyled = styled(TextField)`
    & input {
        background: #f5f7fa !important;
    }

    & .MuiFilledInput-underline:before {
        display: none;
    }

    & .MuiFilledInput-underline:after {
        display: none;
    }

    margin-top: 50px;
    text-transform: none;

`;
