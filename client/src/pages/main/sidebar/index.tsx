import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { actions } from './../../../__data__';
import { UserProfile } from './user-profile';
import { Tabs } from './tabs';
import { Pairs } from './pairs';
import { MessagesList } from './messages-list';
import { SidebarStyled } from './sidebar.style';

const PAIRS = 0;

interface SidebarComponentProps {
    fetchPairs: () => Promise<void>
    fetchMessagesList: () => Promise<void>
}

export const SidebarComponent = ({
    fetchPairs,
    fetchMessagesList
}: SidebarComponentProps): JSX.Element => {
    const [value, setValue] = useState<number>(PAIRS);
    const [isPairs, setPairs] = useState<boolean>(true);
    const [isMessages, setMessages] = useState<boolean>(false);

    useEffect(() => {
        if (isPairs) {
            fetchPairs();
        }
    }, [isPairs]);

    useEffect(() => {
        if (isMessages) {
            fetchMessagesList();
        }
    }, [isMessages]);

    const handleToggleTab = useCallback((newValue) => {
        if (newValue === PAIRS) {
            setPairs(!isPairs);
        } else {
            setMessages(!isMessages);
        }
        setValue(newValue);
    }, [isPairs, isMessages]);

    return (
        <SidebarStyled>
            <UserProfile />
            <Tabs
                handleToggleTab={handleToggleTab}
            />
            {value === PAIRS
                ? <Pairs />
                : <MessagesList />
            }
        </SidebarStyled>
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch: MatchaDispatch) => ({
    fetchPairs: (): Promise<void> => dispatch(actions.mainPage.fetchPairs()),
    fetchMessagesList: (): Promise<void> => dispatch(actions.mainPage.fetchMessagesList())
});

export const Sidebar = connect(null, mapDispatchToProps)(SidebarComponent);
