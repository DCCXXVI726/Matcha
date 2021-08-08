import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { SnackbarOrigin } from '@material-ui/core';

import { SnackbarStyled } from './index.style';

interface SnackbarProps {
    theme: string
    open: boolean
    handleClose: () => void
    message: string
    anchorOrigin: SnackbarOrigin
}

export const Snackbar = ({
    theme,
    open,
    handleClose,
    message,
    anchorOrigin
}: SnackbarProps): JSX.Element => (
    <SnackbarStyled
        currentTheme={theme}
        anchorOrigin={anchorOrigin}
        open={open}
        autoHideDuration={null}
        message={message}
        action={
            <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleClose}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        }
    />
);
