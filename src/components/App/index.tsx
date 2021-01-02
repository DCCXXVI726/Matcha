import React, { FunctionComponent } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Auth } from './Auth';

import {
    theme,
} from './index.style';

export const App: FunctionComponent = () => {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Auth />
            </ThemeProvider>
    );
};
