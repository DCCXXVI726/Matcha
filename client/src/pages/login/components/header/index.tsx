import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../../../../theme';
import { ThemeToggle } from '../../../../components/theme-toggle';

import { tinderIcon } from '../../../../assets/index';

import {
    HeaderStyled,
    LinkStyled,
    TypographyLogoStyled,
    WrapperStyled,
    LogoWrapperStyled,
    ButtonLoginWrapper,
    ModalStyled,
} from '../../index.style';

export const Header = (): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);
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
                <LinkStyled to='/'>
                    <LogoWrapperStyled src={tinderIcon} />
                    <TypographyLogoStyled>
                        {t('logo-title')}
                    </TypographyLogoStyled>
                </LinkStyled>
            </WrapperStyled>
            <WrapperStyled>
                <ThemeToggle />
                <ButtonLoginWrapper
                    variant='contained'
                    color='primary'
                    size='large'
                    onClick={handleOpen}
                >
                    {t('auth-button')}
                </ButtonLoginWrapper>
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
            </WrapperStyled>
        </HeaderStyled>
    );
};
