import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { actions, selectors } from '../../__data__';

import { FormStyled } from './index.style';
import { SUCCESS } from '../../__data__/constants';

interface LoginComponentProps {
    loginStatus: string,
    fetchLogin: (login: string, password: string) => void
}

export const LoginComponent = ({
    loginStatus,
    fetchLogin
}: LoginComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleClick = useCallback((login: string, password: string): void => {
        fetchLogin(login, password);
    }, [fetchLogin]);

    return (
        <div>
            {loginStatus === SUCCESS
                ? <Redirect from='/auth' to='/' />
                : <FormStyled>
                    <TextField
                        type='input'
                        placeholder={t('auth.login-placeholder')}
                        onChange={(e): void => setLogin(e.target.value)}
                    />
                    <TextField
                        type='password'
                        placeholder={t('auth.password-placeholder')}
                        onChange={(e): void => setPassword(e.target.value)}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        onClick={(e): void => {
                            e.preventDefault();
                            handleClick(login, password);
                        }}
                    >
                        {t('auth-button')}
                    </Button>
                </FormStyled>
            }
        </div>
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapStateToProps = (state) => ({
    loginStatus: selectors.user.status(state)
});

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => ({
    fetchLogin: (login: string, password: string): void => {
        dispatch(actions.fetchLogin(login, password));
    }
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
