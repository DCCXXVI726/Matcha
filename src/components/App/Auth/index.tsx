import React, { FunctionComponent } from 'react';
import {
    Container,
} from '@material-ui/core';

import {
    LinkStyled
} from './index.style';

export const Auth: FunctionComponent = () => {
    return (
        <Container maxWidth='lg'>
            <LinkStyled href='#'>
                LinkStyled
            </LinkStyled>
        </Container>
    );
};
