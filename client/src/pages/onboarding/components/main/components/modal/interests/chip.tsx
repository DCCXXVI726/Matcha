import React from 'react';
import { Checkbox } from '@material-ui/core';

import { FormControlLabelStyled } from './index.style';

interface ChipComponentProps {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    input: any
    label: string
    value: string
}

export const ChipComponent = ({
    input,
    label,
    value
}: ChipComponentProps): JSX.Element => (
    <FormControlLabelStyled
        isChecked={input.value}
        {...input}
        name={value}
        control={
            <Checkbox
                checked={!!input.value}
                /* eslint-disable-next-line react/jsx-handler-names */
                onCheck={input.onChange}
            />
        }
        label={label}
    />
);
