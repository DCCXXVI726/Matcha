import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { KeyValue } from '../../../../../../../__data__/types';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300
    },
    listSection: {
        backgroundColor: 'inherit'
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0
    }
}));


interface ListComponentProps {
    orientation: KeyValue[]
}

export const ListComponent = ({
    orientation
}: ListComponentProps): JSX.Element => {
    const classes = useStyles();
    return (
        <List className={classes.root} subheader={<li />}>
            {orientation?.map((item) => {
                const values = Object.keys(item)[0];

                return (
                    <li key={`section-${item}`} className={classes.listSection}>
                        <ListItem key={`item-${item}-${item}`}>
                            <ListItemText primary={item[values]} />
                        </ListItem>
                    </li>
                );
            })}
        </List>
    );
};
