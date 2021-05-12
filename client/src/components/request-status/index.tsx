import React from 'react';
import { CircularProgressStyled } from '../circular-progress/index.style';
import { FetchError } from '../popup-messages/fetch-error';

export const requestStatus = (successComponent: JSX.Element): {
    LOADING: JSX.Element
    ERROR: JSX.Element
    SUCCESS: JSX.Element
} => ({
    LOADING: <CircularProgressStyled />,
    ERROR: (
        <>
            <FetchError />
            <CircularProgressStyled />
        </>
    ),
    SUCCESS: successComponent
});
