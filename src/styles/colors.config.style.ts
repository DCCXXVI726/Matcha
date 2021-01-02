export const hex2rgba = (hex: string, alpha: number = 100): string => {
    const [r, g, b] = [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
    ];
    return `rgba(${r},${g},${b},${alpha / 100})`;
};

/* PINK */

export const pink2 = '#eaadc1';
export const pink1 = '#f4d6e0';
export const pink0 = '#f9eaef';

/* WHITE */
export const white = '#ffffff';

/* BLACK */
export const black = '#000000';
