import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100vm',
        margin:10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    tw_text:{
        // backgroundColor:'blue',
        // height:10,
        
    },
    tw_act:{
        padding:'0px',
        paddingLeft:'12px'
    },
    header:{
        paddingBottom:'7px',
        paddingTop:'12px',
    },
    content:{
        padding:'5px',
        paddingLeft:'17px',
    },
}));

export default function PetitionCard({ data }) {
    const classes = useStyles();
    const [Expanded, setExpanded] = React.useState('https://twitter.com/home');


    return (
        <Card className={classes.root}>



            {/* header */}
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="petition" className={classes.avatar}>
                        <img src={data.img_url} />
                    </Avatar>
                }
                title={data.title}
            />



            <CardContent className={classes.content}>
                <Typography variant="body2" className={classes.tw_text}color="textSecondary" component="p">
                    {data.petition_to}
                </Typography>
            </CardContent>

            <CardActions className={classes.tw_act}>
                <Button size="small" color="primary" className={classes.tw_button}
                    href= {data.url}>
                    Learn More
                        </Button>
            </CardActions>
        </Card>
    );
}
