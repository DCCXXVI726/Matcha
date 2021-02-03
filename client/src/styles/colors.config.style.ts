export const hex2rgba = (hex: string, alpha: number = 100): string => {
    const [r, g, b] = [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
    ];
    return `rgba(${r},${g},${b},${alpha / 100})`;
};

/* COOl GRAY */
export const coolGray9 = '#131618';
export const coolGray8 = '#262c31';
export const coolGray7 = '#3a424a';
export const coolGray6 = '#4d5862';
export const coolGray5 = '#616e7c';
export const coolGray4 = '#808b95';
export const coolGray3 = '#a0a8b0';
export const coolGray2 = '#bfc5ca';
export const coolGray1 = '#dfe2e4';
export const coolGray0 = '#e0e4e9';

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
export const pink1 = '#fd5068';
export const pink0 = '#c73868';
/* WHITE */
export const white = '#ffffff';

/* BLACK */
export const black = '#000000';
