import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { setSessionCookie } from '../../../../session';

import { actions, selectors } from '../../../../__data__';
import { LOADING } from '../../../../__data__/constants';
import { State, Status } from '../../../../__data__/types';

import { FormStyled } from '../../index.style';

import { TextFieldStyled, ButtonStyled, CircularProgressStyled } from './index.style';

export interface FormComponentProps {
    history
    coockie: string
    status: Status
    fethLogin: (email: string, password: string) => Promise<void>
}

export const FormComponent = ({
    history,
    coockie,
    status,
    fethLogin
}: FormComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        fethLogin(email, password);
        // console.log(coockie);
        // setSessionCookie({ coockie });
        // history && history.push('/');
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <TextFieldStyled
                type='email'
                variant='outlined'
                color='primary'
                size='small'
                fullWidth
                placeholder={t('auth.email-placeholder')}
                onChange={(e): void => { setEmail(e.target.value); }}
                required
            />
            <TextFieldStyled
                type='password'
                variant='outlined'
                color='primary'
                size='small'
                minlength={6}
                maxLength={100}
                fullWidth
                placeholder={t('auth.password-placeholder')}
                onChange={(e): void => { setPassword(e.target.value); }}
                required
            />
            {status === LOADING
                ? <CircularProgressStyled />
                : <ButtonStyled
                    type='submit'
                    variant='contained'
                    color='primary'
                >
                    {t('auth-button')}
                </ButtonStyled>
            }
        </FormStyled>
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapStateToProps = (state: State) => ({
    coockie: selectors.user.login(state),
    status: selectors.user.status(state)
});

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => {
    return {
        fethLogin: (email: string, password: string): Promise<void> => {
            return dispatch(actions.fetchLogin(email, password));
        }
    };
};

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
