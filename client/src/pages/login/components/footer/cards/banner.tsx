import React from 'react';
import Carousel from 'react-material-ui-carousel';

// import './Example.css';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button
} from '@material-ui/core';

export const Banner = (props): JSX.Element => {
    const contentPosition = props.contentPosition ? props.contentPosition : 'left';
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;
    console.log(
        contentPosition, 'contentPosition',
        totalItems, 'totalItems',
        mediaLength, 'mediaLength',

    )
    const items = [];
    const content = (
        <Grid item xs={12 / totalItems} key='content'>
            <CardContent className='Content'>
                <Typography className='Title'>
                    {props.item.Name}
                </Typography>

                <Typography className='Caption'>
                    {props.item.Caption}
                </Typography>

                <Button variant='outlined' className='ViewButton'>
                    View Now
                </Button>
            </CardContent>
        </Grid>
    );

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className='Media'
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className='MediaCaption'>
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        );

        items.push(media);
    }

    if (contentPosition === 'left') {
        items.unshift(content);
    } else if (contentPosition === 'right') {
        items.push(content);
    } else if (contentPosition === 'middle') {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className='Banner'>
            <Grid container spacing={0} className='BannerGrid'>
                {items}
            </Grid>
        </Card>
    );
};
