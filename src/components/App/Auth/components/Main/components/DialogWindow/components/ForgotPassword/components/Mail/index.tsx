import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, TextFieldStyled } from './index.style';

export const Mail: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <TextFieldStyled
                label={t('auth.problems.placeholder')}
                variant='filled'
                />
            <Button variant='contained' disabled={true}>
                {t('auth.problems.button')}
            </Button>
        </>
    );
};
