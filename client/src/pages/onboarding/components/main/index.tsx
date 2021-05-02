import React, { useState, useCallback } from 'react';

import { RegistrationForm } from './components/form';
import { RegistrationModal } from './components/modal';

import { MainStyled } from './index.style';

export const Main = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(true);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <MainStyled>
            <RegistrationModal
                open={open}
                handleClose={handleClose}
            />
            <RegistrationForm />
        </MainStyled>
    );
};
