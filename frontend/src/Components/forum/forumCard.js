import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

//material ui card
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles({
    newsCard: {
        display: 'inline-flex',
        // backgroundColor:'black',
        flexDirection:'column'
    },
    root: {
        maxWidth: 300,
        minWidth: 300,
        margin: 20,
        padding:20,
        backgroundColor:'white',
        // border:'solid',
    },
    media: {
        height: 20,
        width:20,
        // backgroundColor:'blue',
        float:'left',
    },
    name:{
        // backgroundColor:'red',
        flex:1,
        // marginBottom:30,
    },
    nameCity:{
        height:20,
        paddingLeft:30,
        paddingTop:5,
        
        // margin:0,
        // float:'right',
    },
    content:{
        marginTop:-20,
    },
});

function ForumCard({ data }) {
    const classes = useStyles();
    return (
        <div className={classes.newsCard}>

            <Paper elevation={3} />
            <Card className={classes.root}>
                <CardActionArea>


                    {/* name section */}
                    <div className={classes.name}>
                    <CardMedia
                        className={classes.media}
                        image={data.namePhoto}
                        title={data.title}
                    />

                    <CardContent className={classes.nameCity}>
                        <Typography gutterBottom variant="h7" component="h5">
                            {data.name} from {data.city}
                        </Typography>
                    </CardContent>

                    </div>

                    <CardContent>
                        
                        <Typography className={classes.content} variant="body3"  component="p">
                            {data.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>




                <CardActions>
                    {/* <Button size="small" color="primary">
                        Share
                        </Button> */}
                    {/* <Button size="small" color="primary"
                        href={data.url}>
                        Like
                        </Button> */}
                </CardActions>
            </Card>
        </div>
    );
}

export default ForumCard;