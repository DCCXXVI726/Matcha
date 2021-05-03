import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../../__data__';

import { Header } from '../../components/header';
import { Main } from './components/main';
import { Footer } from '../../components/footer';

interface OnBoardingComponentProps {
    fetchMultiLangContent: (lang: string) => Promise<void>
}

const OnBoardingComponent = ({
    fetchMultiLangContent
}: OnBoardingComponentProps): JSX.Element => {
    return (
        <>
            <Header
                fetchMultiLangContent={fetchMultiLangContent}
            />
            <Main />
            <Footer />
        </>
    );
};

/* eslint-disable-next-line */
const mapDispatchToProps = (dispatch: any) => ({
    fetchMultiLangContent: (lang: string): Promise<void> => {
        return dispatch(actions.fetchGenders(lang));
    }
});

export const OnBoarding = connect(null, mapDispatchToProps)(OnBoardingComponent);
