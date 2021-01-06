import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { CardContent } from '@material-ui/core';

import {
    SvgIconStyled,
    TypographyStyled,
    DescriptionStyled,
    TittleStyled,
    CardStyled,
} from './index.style';

const addSecondName = (
    secondname: string | undefined,
    separator: string
): string => secondname ? ` ${separator} ${secondname} ` : '';

interface FeedbackCardProps {
    id: number;
    firstname: string;
    secondname?: string;
    text: string;
}

export const FeedbackCard: FunctionComponent<FeedbackCardProps> = (props) => {
    const { t } = useTranslation();
    const names = `${props.firstname}${addSecondName(props.secondname, t('slide.names.separator'))}`;

    return (
    <CardStyled>
        <CardContent>
            <TittleStyled>
                <TypographyStyled color='textSecondary'>
                    {names}
                </TypographyStyled>
                <SvgIconStyled color='disabled' />
            </TittleStyled>
            <DescriptionStyled>
                {'Повстречавшись всего пару месяцев, мы решили разойтись, потому что не могли понять, что нам делать дальше. Я была влюблена, но думала, что всё это несерьезно. Прошло 9 месяцев, и вот мы уже не можем представить жизнь друг без друга.'}
            </DescriptionStyled>
        </CardContent>
    </CardStyled>
    );
};
