import { Tuple } from '../../index';

import React, {
    FunctionComponent,
} from 'react';

import {
} from './index.style';

interface SlideShowProps {
    cards: Tuple[];
    toggleVisible(card: Tuple): void;
}

export const SlideShow: FunctionComponent<SlideShowProps> = (props) => {
    console.log(props)
    return (
        <>
        </>
    );
};
