import React from 'react';
import { RadioGroup } from '@material-ui/core';

interface RenderRadioGroupProps {
    // eslint-disable-next-line
    input: any
}

export const RenderRadioGroup = ({
    input,
    ...rest
}: RenderRadioGroupProps): JSX.Element => (
    <RadioGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        // eslint-disable-next-line
        // @ts-ignore
        onChange={(event, value): void => input.onChange(value)}
    />
);
