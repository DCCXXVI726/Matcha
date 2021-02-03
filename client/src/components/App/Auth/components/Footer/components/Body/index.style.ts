import styled from 'styled-components';

import { coolGray0, gray7, pink1 } from 'Styles/colors.config.style';

export const CopyrightStyled = styled.div`
    color: ${gray7};
    display: flex;
    align-items: center;

`;

export const LinkStyled = styled.a`
    color: ${gray7};
    text-decoration: none;

    &:hover {
        color: ${pink1};
    }


`;

export const ListStyled = styled.ul`
    display: flex;
    justify-content: left;
    list-style: none;
    width: 50%;

    & li {
        margin: auto 20px;
    }

`;

export const BodyStyled = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 2px solid ${coolGray0};

`;

export const LogoStyled = styled.img`
    height: 25px;
    margin-right: 15px;

`;
