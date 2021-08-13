import styled from '@emotion/styled';

import { headerHeight } from '../../components/header/index.style';

export const MainStyled = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: calc(100vh - ${headerHeight});
`;
