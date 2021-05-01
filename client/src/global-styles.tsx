import React from 'react';
import { Global, css, SerializedStyles } from '@emotion/react';

import { ThemeColors } from './theme';

export const GlobalStyles = (): JSX.Element => {
    return (
        <Global styles={(theme): SerializedStyles => css`
        body {
            background-color: ${(theme as ThemeColors).primary};
            background-image:
                linear-gradient(
                    45deg,
                    transparent 25%,
                    ${(theme as ThemeColors).secondary} 25%,
                    transparent 25%
                ),
                linear-gradient(
                    -45deg,
                    transparent 25%,
                    ${(theme as ThemeColors).secondary} 25%,
                    transparent 25%),
                linear-gradient(
                    -45deg, transparent 75%,
                    ${(theme as ThemeColors).secondary} 75%,
                    transparent 0
                ),
                radial-gradient(
                    gray 1px,
                    transparent 0
                );
            background-size: 40px 40px, 40px 40px;
        }
    `} />
    );
};
