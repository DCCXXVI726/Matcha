import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5)
        },
    },
}));

const ChipComponent = (): JSX.Element => {
    const [variant, setVariant] = useState<'default' | 'outlined'>('outlined');

    const handleClick = (): void => {
        variant === 'outlined'
            ? setVariant('default')
            : setVariant('outlined');
    };

    return (
        <Chip
            variant={variant}
            onClick={handleClick}
            label='Primary clickable'
            clickable
            color='secondary'
        />
    );
};


export const Chips = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <ChipComponent key={i} />
            ))}
        </div>
    );
};
