import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { ThemeWrapperContext } from '../../theme';

import { SnackbarStyled } from './index.style';

export const InternetSnackbar = (): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);
    const [open, setOpen] = React.useState(true);

    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <SnackbarStyled
            currentTheme={theme as string}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={null}
            message={t('internet-snackbar')}
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
};
