import React from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Button } from '@material-ui/core';

import { Pair } from '../../../../__data__/types/main-types';

import {
    PairsItemStyled,
    PairsTypographyStyled
} from './pairs.style';

export const PairsList = ({ name, avatar }: Pair): JSX.Element => {
    const { t } = useTranslation();
    const isPair = Math.random() >= 0.5;

    return (
        <PairsItemStyled>
            <div
                style={{ display: 'flex' }}
            >
                <Avatar
                    src={avatar}
                    alt={`avatar of ${name}`}
                />
                <PairsTypographyStyled>
                    {name}
                </PairsTypographyStyled>
            </div>
            {isPair && (
                <Button
                    size='small'
                    variant='outlined'
                    color='secondary'
                >
                    {t('main.sidebar.pairs-button-write')}
                </Button>
            )}
        </PairsItemStyled>
    );
};
