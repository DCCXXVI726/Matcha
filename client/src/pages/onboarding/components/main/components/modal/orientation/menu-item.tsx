import React from 'react';
import { Checkbox } from '@material-ui/core';

import { FormControlLabelStyled } from './index.style';

interface MenuItemProps {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    input: any
    label: string
    value: string
}

export const MenuItem = ({
    input,
    label,
    value
}: MenuItemProps): JSX.Element => (
    <li>
        <FormControlLabelStyled
            isChecked={input.value}
            {...input}
            name={value}
            control={
                <Checkbox
                    checked={input.value ? true : false}
                    /* eslint-disable-next-line */
                    /* @ts-ignore */
                    onCheck={input.onChange}
                />
            }
            label={label}
        />
    </li>
);
