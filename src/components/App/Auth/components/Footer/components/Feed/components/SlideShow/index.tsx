import { Button } from '@material-ui/core';
import React, { FunctionComponent, ReactNodeArray, useState } from 'react';

import {
} from './index.style';

interface SlideShowProps {
    cards: ReactNodeArray;
}

// const MAX_CARDS_COUNT = 3;

let cardIndex: number = 0;
export const SlideShow: FunctionComponent<SlideShowProps> = (props) => {

    const showCards = (currentIndex: number): void => {
        // console.log(`cardIndex0 ${cardIndex}`);
        cardIndex = currentIndex > props.cards.length ? 1 : cardIndex;
        cardIndex = currentIndex < 1 ? props.cards.length : cardIndex;

        // console.log(`currentIndex ${currentIndex}`);
        // console.log(`cardIndex ${cardIndex}`);
        const tmp: ReactNodeArray = props.cards.map((card, i) => !(i < props.cards.length));
        tmp.push(props.cards[cardIndex - 1]);
        updateCards( tmp );
    };

    const [cards, updateCards] = useState([props.cards[0]]);
    const showNextSlide = (index: number): void => showCards(cardIndex += index);
    return (
        <>
            {cards}
          <Button onClick={() => showNextSlide(-1)}>prev</Button>
          <Button onClick={() => showNextSlide(1)}>next</Button>
        </>
    );
};
