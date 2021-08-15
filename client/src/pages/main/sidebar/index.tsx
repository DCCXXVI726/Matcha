import React, { useState, useCallback } from 'react';

import { UserProfile } from './user-profile';
import { Tabs } from './tabs';
import { InfoBlock } from './info-block';
import { SidebarStyled } from './sidebar.style';

const PAIRS = 0;

interface SidebarProps {
    isEmpty: boolean
}

export const Sidebar = ({ isEmpty = true }: SidebarProps): JSX.Element => {
    const [value, setValue] = useState(PAIRS);

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

            {isEmpty && <InfoBlock />}
            
        </SidebarStyled>
    );
};
