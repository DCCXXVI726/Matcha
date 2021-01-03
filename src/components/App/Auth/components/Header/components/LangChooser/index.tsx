import React, { useState, FunctionComponent } from 'react';
import { MenuItem } from '@material-ui/core';
import i18next from 'I18n';

import { SelectStyled } from './index.style';

const langsList = ['Русский', 'English'];

export const LangChooser: FunctionComponent = () => {
    const [lang, changeLang] = useState(langsList[1]);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: any) => {
        if (event.target.value === 'ru') {
            i18next.changeLanguage('en');
            changeLang(langsList[1]);
        } else {
            i18next.changeLanguage('ru');
            changeLang(langsList[0]);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

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
            {langsList.map(langItem => (
                <MenuItem key={langItem} value={langItem}>{langItem}</MenuItem>
            ))}
            </SelectStyled>
        </>
    );
};
