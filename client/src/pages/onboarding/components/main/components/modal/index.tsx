import React, { useContext } from 'react';
import { Fade, Backdrop, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../../../../../../components/theme';
import { tinderIcon } from '../../../../../../assets';

import {
    RegistrationModalStyled,
    AsideStyled,
    SectionStyled,
    LogoWrapperStyled,
    TypographyStyled,
    DescriptionStyled,
    FooterStyled
} from './index.style';

interface RegistrationModalProps {
    open: boolean
    handleClose: () => void
}

export const RegistrationModal = ({
    open,
    handleClose
}: RegistrationModalProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);

    return (
        <RegistrationModalStyled
            currentTheme={theme as string}
            className='modal'
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
            aria-labelledby='modal-title'
            aria-describedby='modal-description'
        >
            <Fade in={open}>
                <AsideStyled currentTheme={theme as string}>
                    <SectionStyled>
                        <LogoWrapperStyled src={tinderIcon} />
                        <TypographyStyled
                            fontSize='2rem'
                        >
                            {t('reg-title')}
                        </TypographyStyled>
                        <DescriptionStyled
                            variant='subtitle1'
                        >
                            {t('reg-sub-title')}
                        </DescriptionStyled>
                    </SectionStyled>
                    <FooterStyled>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleClose}
                        >
                            {t('reg-accept')}
                        </Button>
                    </FooterStyled>
                </AsideStyled>
            </Fade>
        </RegistrationModalStyled>
    );
};
