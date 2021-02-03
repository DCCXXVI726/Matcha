import React, { FunctionComponent } from 'react';

import { Feed } from './components/Feed';
import { Body } from './components/Body';

import {
    FooterStyled,
} from './index.style';

export const Footer: FunctionComponent = () => {
    return (
        <FooterStyled>
            <Feed />
            <Body />
        </FooterStyled>
    );
};
