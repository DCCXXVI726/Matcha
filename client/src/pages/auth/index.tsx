import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { FormStyled } from './index.style';

export const Auth = (): JSX.Element => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleClick = (login1: string, password1: string): void => {
        //
    };

    return (
        <>
            <FormStyled>
                <TextField
                    type='input'
                    placeholder='login'
                    onChange={(e): void => setLogin(e.target.value)}
                />
                <TextField
                    type='input'
                    placeholder='password'
                    onChange={(e): void => setPassword(e.target.value)}
                />
                <Button
                    variant='contained'
                    onClick={(): void => handleClick(login, password)}
                >
                    Login
                </Button>
            </FormStyled>
        </>
    );
};
