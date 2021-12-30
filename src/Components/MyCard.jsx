import React from 'react';
import { Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const MyCard = ({ text, image }) => {
    return (
        <div className='mt-6'>
            <Card className="w-64"
                elevation={0}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="120"
                        image={image}
                    />
                    <CardContent>
                        <Typography variant="h6" className="font-myFont font-bold text-base">
                            {text}
                        </Typography>
                        <Typography className="mt-3 text-sm font-myFont">
                            Dec 25, 2021
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default MyCard;
