export const hex2rgba = (hex: string, alpha = 100): string => {
    const [r, g, b] = hex?.match(/\w\w/g)?.map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha / 100})`;
};

/* BLACK */
export const black = '#000000';

/* WHITE */
export const white = '#ffffff';
export const white0A = hex2rgba(white, 0);
export const white4A = hex2rgba(white, 4);
export const white8A = hex2rgba(white, 8);
export const white16A = hex2rgba(white, 16);

/* COOl GRAY */
export const coolGray9 = '#e0e0e0';

/* GRAY */
export const gray9 = '#262626';
export const gray0A = hex2rgba(gray9, 0);
export const gray4A = hex2rgba(gray9, 4);
export const gray8A = hex2rgba(gray9, 8);
export const gray16A = hex2rgba(gray9, 16);
