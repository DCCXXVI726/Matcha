import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { actions } from '../../__data__';
import { Header } from '../../components/header';
import { Navbar } from '../../components/navbar';

import {
    MainStyled
} from './index.style';

interface MainComponentProps {
    fetchMultiLangContent: (lang: string) => Promise<void>
}

const MainComponent = ({
    fetchMultiLangContent
}: MainComponentProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <Header
                fetchMultiLangContent={fetchMultiLangContent}
            />
            <Navbar />
            <MainStyled>
                <p>{t('hello')}</p>
            </MainStyled>
        </>
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch: MatchaDispatch) => ({
    fetchMultiLangContent: (lang: string): Promise<void> => dispatch(actions.regPage.fetchGenders(lang))
});

export const Main = connect(null, mapDispatchToProps)(MainComponent);
