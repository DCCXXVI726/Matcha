export const hex2rgba = (hex: string, alpha: number = 100): string => {
    const [r, g, b] = [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
    ];
    return `rgba(${r},${g},${b},${alpha / 100})`;
};

/* GRAY */
export const gray9 = '#262626';
export const gray8 = '#4D4D4D';
export const gray7 = '#737373';
export const gray6 = '#909090';
export const gray5 = '#adadad';
export const gray4 = '#C2C2C2';
export const gray3 = '#d6d6d6';
export const gray2 = '#EBEBEB';
export const gray1 = '#F2F2F2';
export const gray0 = '#FAFAFA';


/* GRAPHITE */
export const graphite9 = '#121212';
export const graphite8 = '#1e1e1e';
export const graphite7 = '#222222';
export const graphite6 = '#242424';
export const graphite5 = '#272727';
export const graphite4 = '#2c2c2c';
export const graphite3 = '#2e2e2e';
export const graphite2 = '#323232';
export const graphite1 = '#353535';
export const graphite0 = '#383838';

/* None */
export const noColor = 'transparent';

/* PINK */
export const pink0 = '#c73868';

/* WHITE */
export const white = '#ffffff';

/* BLACK */
export const black = '#000000';
