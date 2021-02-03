import React, { FunctionComponent, ReactNode, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';

import {
    FeedStyled,
} from './index.style';

import { FeedbackCard } from './components/FeedbackCard';
import { SlideShow } from './components/SlideShow';

const prop = {
    id: 123123,
    firstname: 'Алексей',
    secondname: 'Алиса',
    text: 'Повстречавшись всего пару месяцев, мы решили разойтись, потому что не могли понять, что нам делать дальше. Я была влюблена, но думала, что всё это несерьезно. Прошло 9 месяцев, и вот мы уже не можем представить жизнь друг без друга.'
};

const prop1 = {
    id: 35345435,
    firstname: 'Наталья',
    secondname: 'Мигель',
    text: 'Я сказала себе, что начну серьезные отношения только с тем мужчиной, с которым буду готова прожить всю жизнь (даже если мы не поженимся). Относилась к Матче скептически и не думала, что там вообще можно кого-то встретить. Но все-таки решила создать аккаунт и попробовать. Результат вы видите..'
};

const prop2 = {
    id: 6456456456,
    firstname: 'Валера',
    secondname: 'Алиса',
    text: 'Если ты проводишь время в одиночестве, да еще и интроверт (как я) — не бойся выйти из зоны комфорта. Ты точно найдешь своего человека. В Матче я встретила свою любовь и безмерно благодарна за это.'
};

const prop3 = {
    id: 32423432,
    firstname: 'Паша',
    secondname: 'Настя',
    text: 'ОГРОМНОЕ СПАСИБО, что помогли мне встретить мою любовь! После 5 минут общения на первой встрече она говорила о том, какая у нас будет прекрасная свадьба. И да, мы поженились.'
};

const prop4 = {
    id: 234234234,
    firstname: 'Максим',
    secondname: 'Коля',
    text: 'Когда я обучался в институте, мы с соседом по комнате обожали посидеть в Матче. Мы не находили нешуточных отношений или же встреч на 1 ночь, элементарно забавлялись. Как видите, где я встретил собственного мужа.'
};

export type Tuple = {
    isVisible: boolean,
    value: ReactNode,
};

const toggleVisible = (card: Tuple): void => {
    card.isVisible = !card.isVisible;
};

export const Feed: FunctionComponent = () => {
    // const { t } = useTranslation();

    const cards: Tuple[] = useMemo(() => [
            { isVisible: true, value: <FeedbackCard key={prop.id} {...prop} /> },
            { isVisible: true, value: <FeedbackCard key={prop.id} {...prop1} /> },
            { isVisible: true, value: <FeedbackCard key={prop.id} {...prop2} /> },
            { isVisible: true, value: <FeedbackCard key={prop.id} {...prop3} /> },
            { isVisible: true, value: <FeedbackCard key={prop.id} {...prop4} /> },
        ], []);

    return (
        <FeedStyled>
            <SlideShow
                cards={cards}
                toggleVisible={toggleVisible}
            />
        </FeedStyled>
    );
};
