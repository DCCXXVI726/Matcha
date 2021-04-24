import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';

import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from '../../components/footer';

import { actions } from '../../__data__';


interface LoginComponentProps {
    fetchFeedbacks: (lang: string) => Promise<void>
}

export const LoginComponent = ({
    fetchFeedbacks
}: LoginComponentProps): JSX.Element => {

    useEffect(() => {
        fetchFeedbacks(i18next.language);
    }, [fetchFeedbacks]);

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => {
    return {
        fetchFeedbacks: (lang: string): Promise<void> => {
            return dispatch(actions.fetchFeedbacks(lang));
        }
    };
};

export const Login = connect(null, mapDispatchToProps)(LoginComponent);
