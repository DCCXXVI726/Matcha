import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialUiTabs from '@material-ui/core/Tabs';

import { SidebarTabStyled } from './tabs.style';

interface TabsProps {
    handleToggleTab: (newValue: string) => void
}

export const Tabs = ({ handleToggleTab }: TabsProps): JSX.Element => {
    const { t } = useTranslation();
    const [value, setValue] = useState(0);

    const handleChange = useCallback((_event, newValue) => {
        setValue(newValue);
        handleToggleTab(newValue);
    }, [handleToggleTab]);

    return (
        <div>
            <MaterialUiTabs
                value={value}
                onChange={handleChange}
                indicatorColor='secondary'
                textColor='secondary'
                centered
            >
                <SidebarTabStyled label={t('main.sidebar.pairs')} />
                <SidebarTabStyled label={t('main.sidebar.messages')} />
            </MaterialUiTabs>
        </div>
    );
};
