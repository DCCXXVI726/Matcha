import React from 'react';

import { TextFieldStyled } from './index.style';

interface RenderTextFieldProps {
    input: unknown,
    label: unknown,
    meta: {
        touched: unknown,
        error: unknown
    },
    type: string
    isRequired: boolean
    minlength: number
    maxLength: number
    placeholder: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?: (...args: any[]) => any
}

export const RenderTextField = ({
    input,
    label,
    meta: {
        touched,
        error
    },
    type,
    isRequired,
    minlength,
    maxLength,
    placeholder,
    onChange
}: RenderTextFieldProps): JSX.Element => (
    <TextFieldStyled
        variant='outlined'
        color='primary'
        size='small'
        fullWidth
        type={type}
        required={isRequired}
        minlength={minlength}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
    />
);
