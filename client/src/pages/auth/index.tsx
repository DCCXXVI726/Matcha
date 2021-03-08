import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { FormStyled } from './index.style';

export const Auth = (): JSX.Element => {
    return (
        <>
            <FormStyled>
                <TextField
                    type='input'
                    placeholder='login'
                />
                <TextField
                    type='input'
                    placeholder='password'
                />
                <Button
                    variant='contained'
                >
                    Login
                </Button>
            </FormStyled>
        </>
    );
};
