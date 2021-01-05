import styled from 'styled-components';
import { Button, Dialog } from '@material-ui/core';

import { white } from 'Styles/colors.config.style';

const paper = 'DialogPaper';
export const DialogStyled = styled(Dialog).attrs({
    classes: { paper }
})`
    .${paper} {
        height: 520px;
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
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    }

`;


export const DialogWindowStyled = styled.div`
    display: flex;

`;
