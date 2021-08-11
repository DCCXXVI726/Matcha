import React, { useState, useCallback } from 'react';

import { UserProfile } from './user-profile';
import { Tabs } from './tabs';
import {
    SidebarStyled
} from './sidebar.style';

const PAIRS = 0;

export const Sidebar = (): JSX.Element => {
    const [value, setValue] = useState(0);

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
                ? <div />
                : <div />
            }
        </SidebarStyled>
    );
};
