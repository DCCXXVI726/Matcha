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

export const LIGHT = 'LIGHT';
export const DARK = 'DARK';

export interface ThemeColors {
    primary: string
    secondary: string
    transparent: string
    brand: string
    primary8A: string
}

interface Theme {
    LIGHT: ThemeColors
    DARK: ThemeColors
}

const theme: Theme = {
    LIGHT: LIGHT_THEME,
    DARK: DARK_THEME
};

interface ThemeWrapperProps {
    children?: ReactNode | ReactNodeArray
}

export const ThemeWrapperContext = createContext([{}, (): void => {}]);

export const ThemeWrapper = ({ children }: ThemeWrapperProps): JSX.Element => {
    const isUserThemeLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const [themeColor, setThemeColor] = useState(isUserThemeLight ? LIGHT : DARK);

    const changeTheme = useCallback((): void => {
        setThemeColor(themeColor === DARK ? LIGHT : DARK);
    }, [themeColor]);

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

