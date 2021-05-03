import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ThemeColors } from '../../../../../../../components/theme';

import { ModalStyled } from '../../../../../../login/index.style';
import { SectionStyled } from '../../../../../../login/components/modal/index.style';

export { LogoWrapperStyled } from '../../../../../../login/components/modal/index.style';

export {
    AsideStyled,
    TypographyStyled,
    DescriptionStyled
} from '../../../../../../login/index.style';


export const RegistrationModalStyled = styled(ModalStyled)``;

export const RegistrationSectionStyled = styled(SectionStyled)`
    padding-bottom: 0;
`;

export const FooterStyled = styled.footer`
    display: flex;

    & > .MuiButton-root {
        margin: 20px auto;
    }
`;


export const ListStyled = styled.ul(({ theme }) => css`
    padding: 0;
    list-style: none;
    margin: 0 25px;
    color: ${(theme as ThemeColors).secondary};

    & li {
        margin: 10px;
    }

    & li span {
        font-size: 1.4rem;
        vertical-align: text-bottom;
    }

    & li p {
        margin: 0;
    }

`);
