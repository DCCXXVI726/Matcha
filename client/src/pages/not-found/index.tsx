import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { error404 } from '../../assets';
import { navigation } from '../../navigation';

import { MainStyled, FlexWrapper, ImgStyled } from './index.style';

export const NotFound = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <MainStyled>
                <FlexWrapper>
                    <Typography
                        variant='h2'
                        align='center'
                    >
                        {t('not-found')}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper>
                    <Typography
                        variant='h5'
                        align='center'
                    >
                        <Link
                            to={navigation.index}
                        >
                            {t('back-to-home')}
                        </Link>
                    </Typography>
                </FlexWrapper>
                <ImgStyled
                    src={error404}
                    alt='error404-picture'
                />
            </MainStyled>
            <Footer />
        </>
    );
};
