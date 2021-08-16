import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Button } from '@material-ui/core';

import { Pair } from '../../../../__data__/types/main-types';

import {
    PairsItemStyled,
    PairsTypographyStyled
} from './pairs.style';

export const PairsList = ({ name, avatar }: Pair): JSX.Element => {
    const { t } = useTranslation();
    const [hover, setHover] = useState<boolean>(false);

    const handleHover = (): void => setHover(true);
    // const handleHover = (): void => setHover(!hover);

    return (
        <PairsItemStyled
            onMouseOver={handleHover}
        // onMouseOut={handleHover}
        >
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
            {hover && (
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
