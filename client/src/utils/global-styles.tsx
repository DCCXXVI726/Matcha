import React, { useCallback } from 'react';
import { Global, css, SerializedStyles } from '@emotion/react';

export const GlobalStyles = (): JSX.Element => {
    const styles = useCallback((theme): SerializedStyles => css`
    body {
        background-color: ${theme.primary};
        background-image:
            linear-gradient(
                45deg,
                transparent 25%,
                ${theme.secondary} 25%,
                transparent 25%
            ),
            linear-gradient(
                -45deg,
                transparent 25%,
                ${theme.secondary} 25%,
                transparent 25%),
            linear-gradient(
                -45deg, transparent 75%,
                ${theme.secondary} 75%,
                transparent 0
            ),
            radial-gradient(
                gray 1px,
                transparent 0
            );
        background-size: 40px 40px, 40px 40px;
    }`, []);

    return <Global styles={styles} />;
};
