import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';

import { ChipComponent } from './chip';
import { KeyValue } from '../../../../../../../__data__/types';

import { ChipsWrapperStyled, ButtonContinueStyled } from './index.style';

const MAX_COUNT = 5;

interface ChipsProps {
    interests: KeyValue[]
    handleClose: () => void
}

export const Chips = ({
    interests,
    handleClose
}: ChipsProps): JSX.Element => {
    const { t } = useTranslation();
    const [values, setCount] = useState<string[]>([]);

    const isDisable = values.length === MAX_COUNT ? false : true;

    const handlePush = (value: string): void => {
        const tmp = [...values];
        tmp.push(value);
        setCount(tmp);
    };

    const handleFilter = (value: string): void => {
        setCount(values.filter(item => item !== value));
    };

    return (
        <>
            <ChipsWrapperStyled>
                {interests?.map((item) => {
                    const values = Object.keys(item)[0];

                    return (
                        <ChipComponent
                            handlePush={handlePush}
                            handleFilter={handleFilter}
                            key={item[values]}
                            value={values}
                            label={item[values]}
                        />
                    );
                })
                }
            </ChipsWrapperStyled>
            <ButtonContinueStyled
                isDisable={isDisable}
                variant='contained'
                color='secondary'
                onClick={():void => {//TODO: add value to redux
                    if (!isDisable) {
                        console.log(values);
                        handleClose();
                    }
                }}
                disableElevation={isDisable}
                disableFocusRipple={isDisable}
                disableRipple={isDisable}
            >
                {`${t('continue')} ${values.length}/${MAX_COUNT}`}
            </ButtonContinueStyled>
        </>
    );
};

