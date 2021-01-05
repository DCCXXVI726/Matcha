import React, { FunctionComponent, ReactNodeArray, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';

import {
    FeedStyled,
} from './index.style';

import { FeedbackCard } from './components/FeedbackCard';

export const Feed: FunctionComponent = () => {
    // const { t } = useTranslation();

    const cards: ReactNodeArray = useMemo(() => {
        return [
            <FeedbackCard />,
            <FeedbackCard />,
            <FeedbackCard />
        ];
    }, []);

    return (
        <FeedStyled>
            {cards}
        </FeedStyled>
    );
};
