import React, { useEffect, useCallback, useState, useContext } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { Feedback, State } from '../../../../__data__/types';
import { actions, selectors } from '../../../../__data__';
import { ThemeWrapperContext } from '../../../../theme';

import { Modal } from '../modal';

import {
    ButtonWrapper,
    HeadlineStyled,
} from '../../index.style';

import { Cards } from './cards';

import {
    MainStyled,
    LoginSectionStyled,
    SectionStyled,
    CarouselStyled
} from './index.style';

interface MainComponentProps {
    data: Feedback[]
    fetchFeedbacks: (lang: string) => Promise<void>
}

export const MainComponent = ({
    data = [],
    fetchFeedbacks
}: MainComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchFeedbacks(i18next.language);
    }, [fetchFeedbacks]);

    const handleOpen = useCallback((): void => {
        setOpen(true);
    }, []);

    const handleClose = useCallback((): void => {
        setOpen(false);
    }, []);

    return (
        <>
            <MainStyled>
                <LoginSectionStyled
                    currentTheme={theme as string}
                >
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
                            handleClose={handleClose}
                        />
                    </SectionStyled>
                </LoginSectionStyled>
                <CarouselStyled>
                    <Cards data={data} />
                </CarouselStyled>
            </MainStyled>
        </>
    );
};

const mapStateToProps = (state: State): {
    data: Feedback[]
} => ({
    data: selectors.feedbacks.data(state),
});

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => {
    return {
        fetchFeedbacks: (lang: string): Promise<void> => {
            return dispatch(actions.fetchFeedbacks(lang));
        }
    };
};

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
