import React, { FunctionComponent, ReactNodeArray, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';

import {
    FeedStyled,
} from './index.style';

import { FeedbackCard } from './components/FeedbackCard';

const prop = {
    id: 0,
    firstname: 'Алексей',
    secondname: 'Алиса',
    text: 'Повстречавшись всего пару месяцев, мы решили разойтись, потому что не могли понять, что нам делать дальше. Я была влюблена, но думала, что всё это несерьезно. Прошло 9 месяцев, и вот мы уже не можем представить жизнь друг без друга.'
};

export const Feed: FunctionComponent = () => {
    // const { t } = useTranslation();

    const cards: ReactNodeArray = useMemo(() => {
        return [
            <FeedbackCard {...prop} />,
            <FeedbackCard {...prop} />,
            <FeedbackCard {...prop} />
        ];
    }, []);

    return (
        <FeedStyled>
            {cards}
        </FeedStyled>
    );
};
