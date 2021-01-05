import styled from 'styled-components';
import { TextField } from '@material-ui/core';

// import { gray7 } from 'Styles/colors.config.style';

import { ButtonStyled } from '../../../../index.style';

interface ButtonProps {
    disabled?: boolean;
}

export const Button = styled(ButtonStyled)<ButtonProps>`
    background: ${(props: ButtonProps) => props.disabled ? `linear-gradient(262deg, #ff7854, #fd267d)` : 'blue'};

`;


export const TextFieldStyled = styled(TextField)`
    text-transform: none;

`;
