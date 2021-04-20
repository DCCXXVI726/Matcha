import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TextField } from '@material-ui/core';

import { ThemeColors } from '../../../../theme';

export const TextFieldStyled = styled(TextField)(({ theme }) => css`
    color: ${(<ThemeColors>theme).secondary};
`);
