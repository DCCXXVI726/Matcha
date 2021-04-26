import React from 'react';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

import { IconButtonStyled } from '../../index.style';

interface HeaderProps {
    handleClose: () => void
}
export const Header = ({ handleClose }: HeaderProps): JSX.Element => {
    return (
        <header>
            <IconButtonStyled
                onClick={(): void => handleClose()}
            >
                <HighlightOffRoundedIcon />
            </IconButtonStyled>
        </header>
    );
};
