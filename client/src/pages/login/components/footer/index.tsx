import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

import { Feedback, State } from '../../../../__data__/types';
import { actions, selectors } from '../../../../__data__';
import { DARK, ThemeWrapperContext } from '../../../../components/theme';

import {
    madeInRussiaIconWhite,
    madeInRussiaIconBlack
} from '../../../../assets';

import { Cards } from './cards';

import {
    FooterStyled,
    LinkStyled,
    TypographyStyled,
    BasementStyled
} from './index.style';

interface FooterComponentProps {
    data: Feedback[]
    fetchFeedbacks: (lang: string) => Promise<void>
}

export const FooterComponent = ({
    data = [],
    fetchFeedbacks
}: FooterComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);

    useEffect(() => {
        fetchFeedbacks(i18next.language);
    }, [fetchFeedbacks]);

    return (
        <FooterStyled>
            <Cards data={data} />
            <BasementStyled>
                <img src={theme === DARK ? madeInRussiaIconWhite : madeInRussiaIconBlack} />
                <TypographyStyled>
                    <Typography>
                        {t('footer-year')}
                    </Typography>
                    <LinkStyled
                        color='inherit'
                        href='https://github.com/sleonia/Matcha'
                        style={{ marginLeft: '1rem' }}
                        target='_blank'
                    >
                        {t('footer-title')}
                    </LinkStyled>
                </TypographyStyled>
            </BasementStyled>
        </FooterStyled>
    );
};

const mapStateToProps = (state: State): {
    data: Feedback[]
} => ({
    data: selectors.loginPage.feedbacks.data(state),
});

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => {
    return {
        fetchFeedbacks: (lang: string): Promise<void> => {
            return dispatch(actions.loginPage.fetchFeedbacks(lang));
        }
    };
};

export const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterComponent);
