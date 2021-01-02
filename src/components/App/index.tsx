import React, { FunctionComponent } from 'react';
// import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link
//   } from 'react-router-dom';


import { Auth } from './Auth';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import {Button} from '@material-ui/core';
// import {
    // RootContainerStyled,
    // ButtonStyled,
// } from './index.style';

// const theme = createMuiTheme({});

export const App: FunctionComponent = () => {
        return (
            // <ThemeProvider theme={theme}>
            <>
                <svg viewBox='0 0 24 24' width='24px' height='24px' focusable='false' aria-hidden='true' role='presentation'><path fill='' d='M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'></path></svg>
                <Auth />
            </>
        // </ThemeProvider>
    );
};
