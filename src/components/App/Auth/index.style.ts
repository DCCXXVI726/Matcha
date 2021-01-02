import styled from 'styled-components';
import { white, pink0 } from 'Styles/colors.config.style';

import {
    Link,
} from '@material-ui/core';

export const LinkStyled = styled(Link)`
    color: black;//${white};

    &:hover {
        color: ${pink0};
    }
`;
