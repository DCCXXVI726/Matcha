import React, { FunctionComponent, useState } from 'react';
import * as EmailValidator from 'email-validator';
import { useTranslation } from 'react-i18next';

import { Button, TextFieldStyled } from './index.style';

export const Mail: FunctionComponent = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [isDisabled, statusToggle] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
        if (EmailValidator.validate(event.target.value)) {
            statusToggle(false);
        }
    };

    const handlePress = (): void => {
        // here send request to send mail
    };

    return (
        <>
            <TextFieldStyled
                value={value}
                onChange={handleChange}
                label={t('auth.problems.placeholder')}
                variant='filled'
            />
            <Button
                fullWidth
                variant='contained'
                disabled={isDisabled}
                onClick={handlePress}
            >
                {t('auth.problems.button')}
            </Button>
        </>
    );
};
