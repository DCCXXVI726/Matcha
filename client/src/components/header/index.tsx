import React from 'react';

import { ThemeToggle } from '../theme-toggle';

import { LangChooser } from '../lang-choose';
import { HeaderStyled } from './index.style';

export const Header = (): JSX.Element => {
    return (
        <HeaderStyled>
            <LangChooser />
            <ThemeToggle />
        </HeaderStyled>
    );
};
