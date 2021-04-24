import React, { useMemo, useContext } from 'react';
import Carousel from 'react-material-ui-carousel';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

import {
    CarouselStyled,
    CardStyled,
    HeadlineStyled,
    DescriptionStyled
} from './index.style';
import { Card } from '@material-ui/core';

// import './Example.css';

import { Banner } from './banner';

import { Feedback } from '../../../../../__data__/types';
import { ThemeWrapperContext } from '../../../../../theme';


const items = [
    {
        Name: 'Electronics',
        Caption: 'Electrify your friends!',
        contentPosition: 'left',
        Items: [
            {
                Name: 'Macbook Pro',
                Image: 'https://source.unsplash.com/featured/?macbook'
            },
            {
                Name: 'iPhone',
                Image: 'https://source.unsplash.com/featured/?iphone'
            }
        ]
    },
    {
        Name: 'Home Appliances',
        Caption: 'Say no to manual home labour!',
        contentPosition: 'middle',
        Items: [
            {
                Name: 'Washing Machine WX9102',
                Image: 'https://source.unsplash.com/featured/?washingmachine'
            },
            {
                Name: 'Learus Vacuum Cleaner',
                Image: 'https://source.unsplash.com/featured/?vacuum,cleaner'
            }
        ]
    },
    {
        Name: 'Decoratives',
        Caption: 'Give style and color to your living room!',
        contentPosition: 'right',
        Items: [
            {
                Name: 'Living Room Lamp',
                Image: 'https://source.unsplash.com/featured/?lamp'
            },
            {
                Name: 'Floral Vase',
                Image: 'https://source.unsplash.com/featured/?vase'
            }
        ]
    }
]


interface CardsProps {
    data: Feedback[]
}

export const Cards = ({
    data
}: CardsProps): JSX.Element => {
    const [theme,] = useContext(ThemeWrapperContext);

    // const renderChildren = useMemo(() => data.map((node, index) => {
    //     const lol = (
    //         <CardStyled
    //             key={node.title}
    //             currentTheme={theme as string}
    //         >
    //             <CardContent>
    //                 <HeadlineStyled>
    //                     <Typography variant='h5'>
    //                         {node.title}
    //                     </Typography>
    //                     <FormatQuoteRoundedIcon />
    //                 </HeadlineStyled>
    //                 <DescriptionStyled variant='body1'>
    //                     {node.description}
    //                 </DescriptionStyled>
    //             </CardContent>
    //         </CardStyled>
    //     );

    //     pog.push(lol);
    //     if (index % 3 === 0) {
    //         console.log(1);
    //         kek.push(<Card>{pog}</Card>);
    //         pog = [];
    //     }
    // }), [data, theme]);
    return (
        <div style={{ marginTop: '50px', color: '#494949' }}>
            <h2>Example: eBay&trade; style</h2>

            <CarouselStyled
                className='Example'
                autoPlay={false}
            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} />;
                    })
                }
            </CarouselStyled>
        </div>
    );
    // return (
    //     <>
    //         <CarouselStyled
    //             autoPlay={false}
    //             // autoPlay={true}
    //             animation='slide'
    //             fullHeightHover={false}
    //             indicators={false}
    //             navButtonsAlwaysInvisible={true}
    //         >
    //             {data.map((node) => (
    //                 <CardStyled
    //                     key={node.title}
    //                     currentTheme={theme as string}
    //                 >
    //                     <CardContent>
    //                         <HeadlineStyled>
    //                             <Typography variant='h5'>
    //                                 {node.title}
    //                             </Typography>
    //                             <FormatQuoteRoundedIcon />
    //                         </HeadlineStyled>
    //                         <DescriptionStyled variant='body1'>
    //                             {node.description}
    //                         </DescriptionStyled>
    //                     </CardContent>
    //                 </CardStyled>
    //             ))}
    //         </CarouselStyled>
    //     </>
    // );
};
