import React, { useMemo, useContext } from 'react';
import Carousel from 'react-material-ui-carousel';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

import { Feedback } from '../../../__data__/types';
import { ThemeWrapperContext } from '../../../theme';

import {
    CarouselStyled,
    CardStyled,
    HeadlineStyled,
    DescriptionStyled
} from './index.style';

interface CardsProps {
    data: Feedback[]
}

export const Cards = ({
    data
}: CardsProps): JSX.Element => {
    const [theme,] = useContext(ThemeWrapperContext);

    // const renderChildren = useMemo(() => data.map((node) => {
    //     return (
    //         <Grid item xs={12 / data.length} key='content'>
    //             <CardStyled
    //                 key={node.title}
    //                 currentTheme={theme as string}
    //             >
    //                 <CardContent>
    //                     <HeadlineStyled>
    //                         <Typography variant='h5'>
    //                             {node.title}
    //                         </Typography>
    //                         <FormatQuoteRoundedIcon />
    //                     </HeadlineStyled>
    //                     <DescriptionStyled variant='body1'>
    //                         {node.description}
    //                     </DescriptionStyled>
    //                 </CardContent>
    //             </CardStyled>
    //         </Grid>
    //     );
    // }), [data, theme]);

    return (
        <>
            <CarouselStyled
                autoPlay={false}
                // autoPlay={true}
                animation='slide'
                fullHeightHover={false}
                indicators={false}
                navButtonsAlwaysInvisible={true}
            >
                {data.map((node) => (
                    <CardStyled
                        key={node.title}
                        currentTheme={theme as string}
                    >
                        <CardContent>
                            <HeadlineStyled>
                                <Typography variant='h5'>
                                    {node.title}
                                </Typography>
                                <FormatQuoteRoundedIcon />
                            </HeadlineStyled>
                            <DescriptionStyled variant='body1'>
                                {node.description}
                            </DescriptionStyled>
                        </CardContent>
                    </CardStyled>
                ))}
            </CarouselStyled>
        </>
    );
};
