import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../../theme';
import { Snackbar } from '../snackbar';

export const FetchError = (): JSX.Element => {
    const { t } = useTranslation();
    const [theme] = useContext(ThemeWrapperContext);
    const [open, setOpen] = React.useState(true);

    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <Snackbar
            theme={theme as string}
            open={open}
            handleClose={handleClose}
            message={t('fetch-error')}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
        />
    );
};
