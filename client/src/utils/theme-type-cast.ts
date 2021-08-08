import { Theme } from '@emotion/react';

import { ThemeColors } from '../components/theme';

export const themeTypeCast = (theme: Theme | undefined): ThemeColors => theme as ThemeColors;
