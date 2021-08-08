import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../../theme';
import { Snackbar } from '../snackbar';

export const Disconnect = (): JSX.Element => {
    const { t } = useTranslation();
    const [theme] = useContext(ThemeWrapperContext);
    const [open, setOpen] = React.useState(true);
    const [isOffline, setStatus] = useState<boolean>(false);

    const toggleStatus = (status: boolean): void => setStatus(status);

    const handleClose = (): void => {
        setOpen(false);
    };

    const networkHandler = useCallback((): void => {
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
                <Snackbar
                    theme={theme as string}
                    open={open}
                    handleClose={handleClose}
                    message={t('disconnect')}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                />
            ) : <></>}
        </>
    );
};
