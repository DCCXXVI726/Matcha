import { Theme } from '@emotion/react';

// @ts-ignore
export const themeTypeCast = (theme: Theme | undefined): ThemeColors => theme as ThemeColors;
