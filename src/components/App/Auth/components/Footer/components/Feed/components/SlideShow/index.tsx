import { Button } from '@material-ui/core';
import React, {
    FunctionComponent,
    ReactNodeArray,
    useState,
    useEffect,
} from 'react';

import {
} from './index.style';

interface SlideShowProps {
    cards: ReactNodeArray;
}

// const MAX_CARDS_COUNT = 3;
const INTERVAL: number = 3000;

let cardIndex: number = 0;
export const SlideShow: FunctionComponent<SlideShowProps> = (props) => {
    const showCards = (currentIndex: number): void => {
        cardIndex = currentIndex > props.cards.length ? 1 : cardIndex;
        cardIndex = currentIndex < 1 ? props.cards.length : cardIndex;

        const newArray: ReactNodeArray = [];
        for (let i = cardIndex; newArray.length < 3; i++) {
            console.log(i);
            newArray.push(
                i <= props.cards.length
                    ? props.cards[i - 1]
                    :  props.cards[i - props.cards.length - 1]
            );
        }
        updateCards(newArray);
    };

    const [cards, updateCards] = useState(props.cards); //

    const showNextSlide = (): void => showCards(cardIndex++);

    useEffect(() => {
        const timer = setInterval(() => {
            showNextSlide();
        }, INTERVAL);
        return () => clearInterval(timer);
      }, []);

    return (
        <>
            {cards}
          <Button onClick={() => showNextSlide()}>next</Button>
        </>
    );
};
