import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { actions } from '../../../../__data__';
import { ThemeWrapperContext } from '../../../../components/theme';
import { ThemeToggle } from '../../../../components/theme-toggle';
import { tinderIcon } from '../../../../assets';
import { LangChooser } from '../../../../components/lang-choose';
import {
    HeaderStyled,
    LinkStyled,
    TypographyLogoStyled,
    WrapperStyled,
    LogoWrapperStyled,
    ButtonLoginWrapper
} from '../../../../components/header/index.style';
import { navigation } from '../../../../navigation';

const Modal = React.lazy(() => import(/* webpackChunkName: "login-header-modal" */ '../modal').then((module) => ({ default: module.Modal })));

interface HeaderComponentProps {
    fetchMultiLangContent: (lang: string) => Promise<void>
}

const HeaderComponent = ({
    fetchMultiLangContent
}: HeaderComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme] = useContext(ThemeWrapperContext);
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <HeaderStyled
            currentTheme={theme as string}
        >
            <WrapperStyled>
                <LinkStyled to={navigation.index}>
                    <LogoWrapperStyled src={tinderIcon} />
                    <TypographyLogoStyled>
                        {t('logo-title')}
                    </TypographyLogoStyled>
                </LinkStyled>
            </WrapperStyled>
            <WrapperStyled>
                <ThemeToggle />
                <LangChooser
                    fetchMultiLangContent={fetchMultiLangContent}
                />
                <ButtonLoginWrapper
                    variant='contained'
                    color='primary'
                    size='small'
                    onClick={handleOpen}
                >
                    {t('auth-button')}
                </ButtonLoginWrapper>
                <Modal
                    title={t('login.begin')}
                    open={open}
                    handleClose={handleClose}
                />
            </WrapperStyled>
        </HeaderStyled>
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch: MatchaDispatch) => ({
    fetchMultiLangContent: (lang: string): Promise<void> => dispatch(actions.loginPage.fetchFeedbacks(lang))
});

export const Header = connect(null, mapDispatchToProps)(HeaderComponent);
