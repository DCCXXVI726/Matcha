import React, { useContext } from 'react';
import { IconButton, Button } from '@material-ui/core';

import { ThemeWrapperContext } from '../../theme';
import { darkMode, lightMode } from '../../assets';

import { HeaderStyled } from './index.style';

export const Header = (): JSX.Element => {
    const [theme, changeTheme] = useContext(ThemeWrapperContext);
    return (
        <HeaderStyled>
            {'Header'}
            <Button onClick={changeTheme}>Button</Button>
            {/* <Button onClick={changeTheme}> {theme === 'DARK' ? lightMode : darkMode} </Button> */}
            {/* <IconButton onClick={changeTheme} color='primary' aria-label='upload picture' component='span'> */}
                {/* {theme === 'DARK' ? lightMode : darkMode} */}
            {/* </IconButton> */}
        </HeaderStyled>
    );
};

// icon={theme === 'DARK' ? lightMode : darkMode}
