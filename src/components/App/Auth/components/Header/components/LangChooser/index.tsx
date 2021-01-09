import React, { useState, FunctionComponent, useMemo, ReactNodeArray } from 'react';
import { MenuItem } from '@material-ui/core';
import i18next from 'I18n';

import { SelectStyled } from './index.style';

const langsList = ['Русский', 'English'];

export const LangChooser: FunctionComponent = () => {
    const [lang, changeLang] = useState(langsList[1]);
    const [open, setOpen] = useState(false);

    const handleChange = (event: any) => {
        if (event?.target.value === langsList[0]) {
            i18next.changeLanguage('ru');
            changeLang(langsList[0]);
        } else {
            i18next.changeLanguage('en');
            changeLang(langsList[1]);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const menu: ReactNodeArray = useMemo(() =>
        langsList.map((langItem, key) => (
            <MenuItem key={key} value={langItem}>{langItem}</MenuItem>
        ))
    , [lang]);

    return (
        <>
            <SelectStyled
                labelId='demo-controlled-open-select-label'
                id='demo-controlled-open-select'
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={lang}
                onChange={handleChange}
            >
            {menu}
            </SelectStyled>
        </>
    );
};
