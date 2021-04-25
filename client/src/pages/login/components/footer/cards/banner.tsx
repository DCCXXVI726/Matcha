import React from 'react';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import { Feedback } from '../../../../../__data__/types';

import { GRID_STEP } from './index';
import { GridStyled, HeadlineStyled, DescriptionStyled } from './index.style';

const GRID_SIZE = 12;

interface BannerProps {
    currentTheme: string
    data: Feedback[]
}

export const Banner = ({ currentTheme, data }: BannerProps): JSX.Element => {
    const totalItems = data.length ? data.length : GRID_STEP;
    const mediaLength = totalItems;
    const items = [];

    for (let i = 0; i < mediaLength; i++) {
        const media = (
            <GridStyled
                currentTheme={currentTheme}
                xs={GRID_SIZE / totalItems}
                key={i}
            >
                <CardContent>
                    <HeadlineStyled>
                        <Typography variant='h5'>
                            {data[i].title}
                        </Typography>
                        <FormatQuoteRoundedIcon />
                    </HeadlineStyled>
                    <DescriptionStyled variant='body1'>
                        {data[i].description}
                    </DescriptionStyled>
                </CardContent>
            </GridStyled>
        );

        items.push(media);
    }

    return (
        <Card raised className='Banner'>
            <Grid container spacing={0} className='BannerGrid'>
                {items}
            </Grid>
        </Card>
    );
};
