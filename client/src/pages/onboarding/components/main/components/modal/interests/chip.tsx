import React, { useState } from 'react';

import { ChipStyled } from './index.style';

interface ChipComponentProps {
    label: string
    value: string
    handlePush: (value: string) => void
    handleFilter: (value: string) => void
}

export const ChipComponent = ({
    label,
    value,
    handlePush,
    handleFilter
}: ChipComponentProps): JSX.Element => {
    const [state,] = useState<string>(value);
    const [variant, setVariant] = useState<'default' | 'outlined'>('outlined');

    const handleClick = (): void => {
        if (variant === 'outlined') {
            setVariant('default');
            handlePush(state);
        } else {
            handleFilter(state);
            setVariant('outlined');
        }
    };

    return (
        <ChipStyled
            variant={variant}
            onClick={handleClick}
            label={label}
            clickable
            color='secondary'
        />
    );
};
