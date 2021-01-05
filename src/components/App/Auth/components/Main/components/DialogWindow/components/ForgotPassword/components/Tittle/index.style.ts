import styled from 'styled-components';
import { Typography, Dialog } from '@material-ui/core';

import { gray7 } from 'Styles/colors.config.style';

export const ImageStyled = styled.img`
    display: block;
    margin: 30px auto 15px;
    width: 30px;

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
