import React, {
    useState,
    useCallback,
    createContext,
    ReactNode,
    ReactNodeArray
} from 'react';
import { ThemeProvider } from '@emotion/react';

import * as LIGHT_THEME from './light.theme.style';
import * as DARK_THEME from './dark.theme.style';

const theme = {
    LIGHT: LIGHT_THEME,
    DARK: DARK_THEME,
};

interface ThemeWrapperProps {
    children?: ReactNode | ReactNodeArray
}

export const ThemeWrapper = ({ children }: ThemeWrapperProps): JSX.Element => {
    const [themeColor, setThemeColor] = useState('LIGHT');

    const changeTheme = useCallback((): void => {
        setThemeColor(themeColor === 'DARK' ? 'LIGHT' : 'DARK');
    }, [themeColor]);

    console.log(themeColor);
    console.log(theme[themeColor]);

    return (
        <ThemeWrapperContext.Provider
            value={[
                themeColor,
                changeTheme
            ]}
        >
            <ThemeProvider theme={theme[themeColor]}>
                { children }
            </ThemeProvider>
        </ThemeWrapperContext.Provider>
    );
};

/* eslint-disable-next-line @typescript-eslint/no-empty-function */
export const ThemeWrapperContext = createContext([{}, (): void => {}]);
