import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    fontFamily: 'ProximaNova,sans-serif',
                    lineHeight: '1.3125',
                    wordWrap: 'break-word',
                },
            },
        },
    },
});
