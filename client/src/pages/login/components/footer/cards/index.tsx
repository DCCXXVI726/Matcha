import React, { useContext } from 'react';
import Carousel from 'react-material-ui-carousel';

import { Banner } from './banner';

import { Feedback } from '../../../../../__data__/types';
import { ThemeWrapperContext } from '../../../../../theme';

const START_INDEX = -3;
export const GRID_STEP = 3;

interface CardsProps {
    data: Feedback[]
}

export const Cards = ({
    data
}: CardsProps): JSX.Element => {
    const [theme,] = useContext(ThemeWrapperContext);

    let start = START_INDEX;
    let end = 0;
    return (
        <Carousel
            autoPlay={true}
            animation='fade'
            cycleNavigation={true}
            indicators={false}
            navButtonsAlwaysVisible={false}
            navButtonsAlwaysInvisible={true}
        >
            {
                data.map((item, index) => {
                    if (end + GRID_STEP < data.length) {
                        end += GRID_STEP;
                        start += GRID_STEP;
                    } else {
                        end = GRID_STEP;
                        start = 0;
                    }
                    return (
                        <Banner
                            currentTheme={theme as string}
                            data={data.slice(start, end)}
                            key={index}
                        />
                    );
                })
            }
        </Carousel>
    );
};
