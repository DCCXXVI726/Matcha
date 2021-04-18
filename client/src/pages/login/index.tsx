import React, { useState, useContext } from 'react';
import { History } from 'history';

import { SessionContext, setSessionCookie } from '../../session';

import { FormStyled } from './index.style';

interface LoginComponentProps {
    history: History
}

export const LoginComponent = ({
    history
}: LoginComponentProps): JSX.Element => {
    const session = useContext(SessionContext);

    const [email, setEmail] = useState('');
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setSessionCookie({ email });
        history.push('/');
    };


    if (session?.email) {
        history.push('/');
    }

    return (
        <div>
            <FormStyled onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter email address'
                    onChange={(e): void => setEmail(e.target.value)}
                />
                <input type='submit' value='Login' />
            </FormStyled>
        </div>
    );
};
