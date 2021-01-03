import styled from 'styled-components';
import { Select } from '@material-ui/core';
import { white, pink0 } from 'Styles/colors.config.style';

export const SelectStyled = styled(Select)`
    color: ${white};

    &:after {
        display: none !important;
    }

    &:hover {
        color: ${pink0};
    }

`;
