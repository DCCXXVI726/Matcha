import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { ThemeWrapperContext } from '../theme';

import { SnackbarStyled } from './index.style';

export const InternetSnackbar = (): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);
    const [open, setOpen] = React.useState(true);
    const [isOffline, setStatus] = useState<boolean>(false);

    const toggleStatus = (status: boolean): void => setStatus(status);

    const handleClose = (): void => {
        setOpen(false);
    };

    const networkHandler = useCallback((): void => {
        navigator.onLine ? setStatus(false) : setStatus(true);
        window.addEventListener('online', () => toggleStatus(false));
        window.addEventListener('offline', () => toggleStatus(true));
    }, []);

    useEffect(() => {
        window.addEventListener('load', () => networkHandler());
        return (): void => {
            window.removeEventListener('offline', () => toggleStatus(false));
            window.removeEventListener('online', () => toggleStatus(true));
            window.removeEventListener('load', () => networkHandler());
        };
    }, [networkHandler]);

    return (
        <>
            {isOffline ? (
                < SnackbarStyled
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
            ) : <></>}
        </>
    );
};
