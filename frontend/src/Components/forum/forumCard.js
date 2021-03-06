import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Disqus from "disqus-react"
import { useHistory } from "react-router-dom";
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
import "./forumCard.css"

const useStyles = makeStyles({
    newsCard: {
        display: 'inline-flex',
        flexDirection: 'column',
        marginLeft: 5,
    },
    root: {
        maxWidth: '100%',
        minWidth: '80%',
        margin: 20,
        padding: 20,
        backgroundColor: 'black',

    },
    media: {
        height: 30,
        width: 30,
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
        padding: 0,
        paddingLeft: 10,
        paddingTop: 5,
        // backgroundColor:'red',

    },
    nameCityText: {
        fontFamily: 'Russo One',
        color: "black",
    },
    content: {
        // marginTop:-20,
        // backgroundColor:'pink',
        marginLeft: '-16px',
        color: "black",


        // paddingLeft:-10,
    },
    discussionButton: {
        fontFamily: 'Russo One',
        color: "black",
    }
});

const state = (data) => {
    if (data.state == "other") {
        return data.customizeState
    } else {
        return data.state
    }

}


function ForumCard({ data }) {
    let history = useHistory();
    const classes = useStyles();
    const [openComment, setOpenComment] = useState(false)
    const toggleComment = () => {
        setOpenComment(!openComment)
    }
    return (
        <div className={classes.newsCard}>

            <Paper elevation={3} />
            <Card className="card-box">
                <CardActionArea>


                    {/* name section */}
                    <div className={classes.name}>
                        <CardMedia
                            className={classes.media}
                            image={data.namePhoto}
                            title={data.title}
                        />

                        <CardContent className={classes.nameCity}>
                            <Typography className={classes.nameCityText} variant="h6" component="h5">
                                {data.name} from {state(data)}
                            </Typography>
                        </CardContent>

                    </div>

                    <CardContent>

                        <Typography className={classes.content} variant="body3" component="p">
                            {data.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="black" className={classes.discussionButton} onClick={() => { history.push('/forum/' + data.realId) }}>
                        Join Discussion
                        </Button>
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