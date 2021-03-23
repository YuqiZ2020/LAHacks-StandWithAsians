import React from "react";
import './newsCard.css'

//material ui card
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles({
    newsCard: {
        display: 'inline-flex'
    },
    root: {
        maxWidth: 360,
        minWidth: 300,
        margin: 20
    },
    media: {
        height: 155,
    },
});

function NewsCard({ data }) {
    const classes = useStyles();
    return (
        <div className={classes.newsCard}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={data.urlToImage}
                        title={data.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="h5">
                            {data.title}
                        </Typography>
                        <Typography variant="body3" color="textSecondary" component="p">
                            {data.content}
                        </Typography>
                    </CardContent>

                </CardActionArea>
                <CardActions>
                    {/* <Button size="small" color="primary">
                        Share
                        </Button> */}
                    <Button size="small" color="primary"
                        href={data.url}>
                        Learn More
                        </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default NewsCard;