import React, { useContext } from 'react';
import { IconButton } from '@material-ui/core';

import { ThemeWrapperContext } from '../../theme';
import { darkMode, lightMode } from '../../assets';


export const ThemeToggle = (): JSX.Element => {
    const [theme, changeTheme] = useContext(ThemeWrapperContext);
    return (
        <IconButton
            onClick={changeTheme as () => void}
            size='medium'
        >
            <img src={theme === 'DARK' ? lightMode : darkMode} />
        </IconButton>
    );
};
