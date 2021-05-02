import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Button, IconButton, Typography, Link } from '@material-ui/core';

// import { ThemeColors, LIGHT, DARK } from '../../../../../../components/theme';

import { ModalStyled } from './../../../../../login/index.style';

export {
    SectionStyled,
    LogoWrapperStyled,
} from './../../../../../login/components/modal/index.style';

export {
    AsideStyled,
    TypographyStyled,
    DescriptionStyled
} from './../../../../../login/index.style';


export const RegistrationModalStyled = styled(ModalStyled)(({ theme }) => css`
`);

export const FooterStyled = styled.footer`
    display: flex;

    & > .MuiButton-root {
        margin: 10px auto;
    }
`;
