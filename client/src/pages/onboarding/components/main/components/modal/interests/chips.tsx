import React, { useState } from 'react';

import { ChipComponent } from './chip';
import { KeyValue } from '../../../../../../../__data__/types';


interface ChipsProps {
    interests: KeyValue[]
}

export const Chips = ({
    interests
}: ChipsProps): JSX.Element => {

    return (
        <div>
            {interests?.map((item) => {
                const values = Object.keys(item)[0];
                return (
                    <ChipComponent
                        key={item[values]}
                        value={values}
                        label={item[values]}
                    />
                );
            })
            }
        </div>
    );
};

