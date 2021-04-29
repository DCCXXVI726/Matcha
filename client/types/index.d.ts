import { Theme } from '@emotion/react';

declare global {
    interface StyledProps {
        theme?: Theme
        currentTheme: string
        children?: JSX.Element | JSX.Element[]
    }
}
