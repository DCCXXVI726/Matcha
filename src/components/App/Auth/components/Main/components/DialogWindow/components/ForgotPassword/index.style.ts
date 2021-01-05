import styled from 'styled-components';
import {
    Typography,
    // Button,
    Dialog,
    TextField,
    // DialogTitle,
} from '@material-ui/core';

// import { white, black, gray7 } from 'Styles/colors.config.style';

export const TextFieldStyled = styled(TextField)`
    text-transform: none;

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

export const DialogContentStyled = styled.div``;

export const DialogWindowStyled = styled.div``;
