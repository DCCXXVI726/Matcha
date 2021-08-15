import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { actions } from './../../../__data__';
import { UserProfile } from './user-profile';
import { Tabs } from './tabs';
import { Pairs } from './pairs';
import { Messages } from './messages';
import { SidebarStyled } from './sidebar.style';

const PAIRS = 0;

interface SidebarComponentProps {
    fetchPairs: () => Promise<void>
}

export const SidebarComponent = ({ fetchPairs }: SidebarComponentProps): JSX.Element => {
    const [value, setValue] = useState(PAIRS);

    useEffect(() => {
        fetchPairs();
    }, [fetchPairs]);

    const handleToggleTab = useCallback((newValue) => {
        setValue(newValue);
    }, []);

    return (
        <SidebarStyled>
            <UserProfile />
            <Tabs
                handleToggleTab={handleToggleTab}
            />
            {value === PAIRS
                ? <Pairs />
                : <Messages />
            }
        </SidebarStyled>
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch: MatchaDispatch) => ({
    fetchPairs: (): Promise<void> => dispatch(actions.mainPage.fetchPairs())
});

export const Sidebar = connect(null, mapDispatchToProps)(SidebarComponent);
