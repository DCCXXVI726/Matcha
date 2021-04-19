import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '../modal';

import {
    ButtonWrapper,
    HeadlineStyled,
} from '../../index.style';

import {
    MainStyled,
    SectionStyled
} from './index.style';

export const Main = (): JSX.Element => {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = useCallback((): void => {
        setOpen(true);
    }, []);

    const handleClose = useCallback((): void => {
        setOpen(false);
    }, []);

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
                    <Modal
                        open={open}
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                    />
                </SectionStyled>
            </MainStyled>
        </>
    );
};
