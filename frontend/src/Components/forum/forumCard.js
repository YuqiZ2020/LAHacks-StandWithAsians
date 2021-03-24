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
import { AutoComplete } from 'antd';

const useStyles = makeStyles({
    newsCard: {
        display: 'inline-flex',
        // backgroundColor:'black',
        flexDirection: 'column',
        marginLeft: 5,
        width: 250,

    },
    root: {
        width: 250,
        height: 250,
        overflowY: "scroll",
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: "10px"
    },
    media: {
        height: 30,
        width: 30,

        // backgroundColor:'blue',
        float: 'left',
    },
    name: {

        flex: 1,
        display: 'flex',
        width: '100%',
        height: 30,
        // backgroundColor:'green'

    },
    nameCity: {
        minHeight: 30,
        maxHeight: 30,
        display: 'flex',
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center',
        paddingLeft: 10,
        paddingTop: 0,
        fontSize: 0.8 + "rem"
        // backgroundColor:'red',

    },
    content: {
        // marginTop:-20,
        // backgroundColor:'pink',
        marginLeft: '-16px',
        fontFamily: 'Merriweather'
        // paddingLeft:-10,
    },
});

const state = (data) => {
    if (data.state == "other") {
        return data.customizeState
    } else {
        return data.state
    }

}


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
                            <Typography variant="inherit" component="p">
                                {data.name} from {state(data)}
                            </Typography>
                        </CardContent>

                    </div>

                    <CardContent>

                        <Typography className={classes.content} component="p">
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