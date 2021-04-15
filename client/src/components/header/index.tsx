import React, { useContext } from 'react';
import { IconButton } from '@material-ui/core';

import { LangChooser } from './lang-choose';

import { ThemeWrapperContext } from '../../theme';
import { darkMode, lightMode } from '../../assets';

import { HeaderStyled } from './index.style';

export const Header = (): JSX.Element => {
    const [theme, changeTheme] = useContext(ThemeWrapperContext);
    return (
        <HeaderStyled>
            <LangChooser />
            <IconButton onClick={changeTheme}>
                <img src={theme === 'DARK' ? lightMode : darkMode} />
            </IconButton>
        </HeaderStyled>
    );
};
