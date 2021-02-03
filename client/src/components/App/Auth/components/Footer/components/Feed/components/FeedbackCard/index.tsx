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
                {props.text}
            </DescriptionStyled>
        </CardContent>
    </CardStyled>
    );
};
