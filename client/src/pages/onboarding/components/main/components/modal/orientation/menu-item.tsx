import React, { ReactNode, useState } from 'react';

import { MenuItemStyled } from './index.style';

interface MenuItemProps {
    children: ReactNode
    label: string
    value: string
    handlePush: (value: string) => void
    handleFilter: (value: string) => void
}

export const MenuItem = ({
    label,
    value,
    handlePush,
    handleFilter
}: MenuItemProps): JSX.Element => {
    const [isChecked, setChecked] = useState<boolean>(false);

    const handleChecked = (): void => {
        isChecked ? handleFilter(value) : handlePush(value);
        setChecked(!isChecked);
    };

    return (
        <MenuItemStyled
            onClick={handleChecked}
            isChecked={isChecked}
            value={value}
        >
            {label}
        </MenuItemStyled>
    );
};
