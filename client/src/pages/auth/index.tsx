import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export const Auth = (): JSX.Element => {
    return (
        <>
            <TextField type='input' />
            <TextField type='input' />
            <Button variant='contained'>Login</Button>
        </>
    );
};
