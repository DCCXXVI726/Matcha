import React, { FunctionComponent } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

export const Auth: FunctionComponent = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};
