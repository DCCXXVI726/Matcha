import React from 'react';

import { ChipsWrapperStyled } from '../form/index.style';
import { ChipStyled } from '../modal/interests/index.style';
import { FormInterests } from '../form/additional-form-content';

interface RenderChipsProps {
    selectedItems: FormInterests[]
}

export const RenderChips = ({
    selectedItems
}: RenderChipsProps): JSX.Element => (
    <ChipsWrapperStyled>
        {selectedItems?.map((item) => {
            const key = Object.keys(item)[0];
            return (
                <ChipStyled
                    variant={'outlined'}
                    color='primary'
                    key={key}
                    label={item[key]}
                />
            );
        })}
    </ChipsWrapperStyled>
);
