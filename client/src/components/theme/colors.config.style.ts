/* eslint-disable no-magic-numbers */

const HEX_RADIX = 16;

const parseHex = (hex: string): number => parseInt(hex, HEX_RADIX);

export const hex2rgba = (hex: string, alpha = 100): string => {
    const cHex = hex.replace('#', '');
    const isShortHex = cHex.length === 3;

    const r = parseHex(isShortHex ? `${cHex[0]}${cHex[0]}` : `${cHex[0]}${cHex[1]}`);
    const g = parseHex(isShortHex ? `${cHex[1]}${cHex[1]}` : `${cHex[2]}${cHex[3]}`);
    const b = parseHex(isShortHex ? `${cHex[2]}${cHex[2]}` : `${cHex[4]}${cHex[5]}`);

    if (Number.isInteger(alpha) && alpha > 0 && alpha <= 100) {
        return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
    } else if (alpha === 0) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    return `rgb(${r}, ${g}, ${b})`;
};

/* BLACK */
export const black = '#000000';

/* WHITE */
export const white = '#ffffff';
export const white0A = hex2rgba(white, 0);
export const white4A = hex2rgba(white, 4);
export const white8A = hex2rgba(white, 8);
export const white16A = hex2rgba(white, 16);
export const white40A = hex2rgba(white, 40);
export const white70A = hex2rgba(white, 70);

/* COOl GRAY */
export const coolGray9 = '#e0e0e0';
export const coolGray8 = '#f5f7fa';
export const coolGray7 = '#2b2b2b';

/* GRAY */
export const gray9 = '#262626';
export const gray0A = hex2rgba(gray9, 0);
export const gray4A = hex2rgba(gray9, 4);
export const gray8A = hex2rgba(gray9, 8);
export const gray16A = hex2rgba(gray9, 16);
export const gray40A = hex2rgba(gray9, 40);
export const gray70A = hex2rgba(gray9, 70);

/* PINK */
export const pink = '#f50057';

export const orange = '#ff6c48';
