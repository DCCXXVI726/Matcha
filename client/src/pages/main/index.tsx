import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../../__data__';
import { Header } from '../../components/header';

import {
    MainStyled
} from './index.style';
import { Sidebar } from './sidebar';
import { Content } from './content';

interface MainComponentProps {
    fetchMultiLangContent: (lang: string) => Promise<void>
}

const MainComponent = ({ fetchMultiLangContent }: MainComponentProps): JSX.Element => (
    <>
        <Header
            fetchMultiLangContent={fetchMultiLangContent}
        />
        <MainStyled>
            <Content />
            <Sidebar />
        </MainStyled>
    </>
);

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch: MatchaDispatch) => ({
    fetchMultiLangContent: (lang: string): Promise<void> => dispatch(actions.regPage.fetchGenders(lang))
});

export const Main = connect(null, mapDispatchToProps)(MainComponent);
