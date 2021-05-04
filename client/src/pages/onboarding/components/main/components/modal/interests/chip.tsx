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

interface ChipComponentProps {
    label: string
    value: string
}

export const ChipComponent = ({
    label,
    value
}: ChipComponentProps): JSX.Element => {
    const [state,] = useState<string>(value);
    const [variant, setVariant] = useState<'default' | 'outlined'>('outlined');

    const handleClick = (): void => {
        console.log(state);
        variant === 'outlined'
            ? setVariant('default')
            : setVariant('outlined');
    };

    return (
        <Chip
            variant={variant}
            onClick={handleClick}
            label={label}
            clickable
            color='secondary'
        />
    );
};
