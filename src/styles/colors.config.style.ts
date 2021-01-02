export const hex2rgba = (hex: string, alpha: number = 100): string => {
    const [r, g, b] = [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
    ];
    return `rgba(${r},${g},${b},${alpha / 100})`;
};

/* None */
export const noColor = 'transparent';

/* PINK */
export const pink0 = '#c73868';

/* WHITE */
export const white = '#ffffff';

/* BLACK */
export const black = '#000000';
