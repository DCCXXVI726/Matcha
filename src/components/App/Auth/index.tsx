import React, { FunctionComponent } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import { AuthStyled } from './index.style';

export const Auth: FunctionComponent = () => {
    return (
        <AuthStyled>
            <Header />
            <Main />
            <Footer />
        </AuthStyled>
    );
};
