import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { KeyValue } from '../../../../../../../__data__/types';
import { ButtonContinueStyled } from '../interests/index.style';
import { MenuListStyled } from './index.style';

import { MenuItem } from './menu-item';

const MAX_COUNT = 3;

interface ListComponentProps {
    orientation: KeyValue[]
    handleClose: () => void
}

export const ListComponent = ({
    orientation,
    handleClose
}: ListComponentProps): JSX.Element => {
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
            <MenuListStyled>
                {orientation?.map((item) => {
                    const values = Object.keys(item)[0];

                    return (
                        <MenuItem
                            key={item[values]}
                            handlePush={handlePush}
                            handleFilter={handleFilter}
                            value={values}
                            label={(item[values]) as string}
                        >
                            {item[values]}
                        </MenuItem>
                    );
                })}
            </MenuListStyled>
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
}

