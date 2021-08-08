import React from 'react';
import { RadioGroup } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Input = any

interface RenderRadioGroupProps {
    input: Input
}

export const RenderRadioGroup = ({ input, ...rest }: RenderRadioGroupProps): JSX.Element => (
    <RadioGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(_event, value): void => input.onChange(value)}
    />
);
