import React, { useState, useMemo, ReactNodeArray } from 'react';
import { connect } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import i18next from 'i18next';

import { actions } from '../../../__data__';

import { langsList } from '../../../i18n';

import { SelectStyled, FormControlStyled } from './index.style';

interface LangChooserComponentProps {
    changeLang: (lang: string) => void
    fetchFeedbacks: (lang: string) => Promise<void>
}

export const LangChooserComponent = ({
    changeLang,
    fetchFeedbacks
}: LangChooserComponentProps): JSX.Element => {
    const [lang, setLang] = useState(langsList[1]);
    const [open, setOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>): void => {
        let id = 0;

        if (event.target.value === langsList[1]) {
            i18next.changeLanguage('ru');
            id = 1;
        } else {
            i18next.changeLanguage('en');
            id = 0;
        }
        changeLang(langsList[id]);
        fetchFeedbacks(langsList[id]);
        setLang(langsList[id]);
    };

    const handleClose = (): void => setOpen(false);

    const handleOpen = (): void => setOpen(true);

    const menu: ReactNodeArray = useMemo(() =>
        langsList.map((langItem, key) => (
            <MenuItem key={key} value={langItem}>{langItem}</MenuItem>
        )), []);

    return (
        <FormControlStyled variant='outlined' size='small'>
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
        </FormControlStyled>
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => ({
    changeLang: (lang: string): void => {
        dispatch(actions.changeLang(lang));
    },

    fetchFeedbacks: (lang: string): Promise<void> => {
        return dispatch(actions.fetchFeedbacks(lang));
    }
});

export const LangChooser = connect(null, mapDispatchToProps)(LangChooserComponent);
