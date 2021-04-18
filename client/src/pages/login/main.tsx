import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    MainStyled,
    ButtonWrapper,
    SectionStyled,
    HeadlineStyled,
    ModalStyled
} from './index.style';

export const Main = (): JSX.Element => {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <>
            <MainStyled>
                <SectionStyled>
                    <HeadlineStyled variant='h2'>
                        {t('title')}
                    </HeadlineStyled>
                    <ButtonWrapper
                        variant='contained'
                        color='primary'
                        size='large'
                        onClick={handleOpen}
                    >
                        {t('create-account')}
                    </ButtonWrapper>
                    <ModalStyled
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='modal-title'
                        aria-describedby='modal-description'
                    >
                        <div>
                            <h2 id='modal-title'>Text in a modal</h2>
                            <p id='modal-description'>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </p>
                        </div>
                    </ModalStyled>
                </SectionStyled>
            </MainStyled>
        </>
    );
};
