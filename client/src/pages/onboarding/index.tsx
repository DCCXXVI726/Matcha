import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import { actions } from '../../__data__';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

import { Main } from './main';

interface OnBoardingComponentProps {
    fetchMultiLangContent: (lang: string) => Promise<void> | void
}

const OnBoardingComponent = ({
    fetchMultiLangContent
}: OnBoardingComponentProps): JSX.Element => (
    <>
        <Header
            fetchMultiLangContent={fetchMultiLangContent}
        />
        <Main />
        <Footer />
    </>
);
/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch: MatchaDispatch) => ({
    fetchMultiLangContent: (lang: string): void => {
        dispatch(actions.regPage.fetchGenders(lang));
        dispatch(actions.regPage.fetchInterests(lang));
        dispatch(actions.regPage.fetchOrientations(lang));
        dispatch(reset('registration'));
    }
});

export const OnBoarding = connect(null, mapDispatchToProps)(OnBoardingComponent);
