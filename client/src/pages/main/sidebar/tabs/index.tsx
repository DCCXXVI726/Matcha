import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialUiTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
                <Tab label={t('main.header.pairs')} />
                <Tab label={t('main.header.messages')} />
            </MaterialUiTabs>
        </div>
    );
};
