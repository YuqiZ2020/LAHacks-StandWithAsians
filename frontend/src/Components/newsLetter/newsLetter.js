import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import jsonp from 'jsonp';
import queryString from 'query-string';

const url = "https://outlook.us2.list-manage.com/subscribe/post?u=db0105404a148c3ab870c5a39&amp;id=d64d1f760d";

const useStyles = makeStyles({
  subscribeEmail: {
    marginTop: "10px",
    height: "35px",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontFamily: 'Russo One'
  },
  subscribeMessage: {
    color: 'white',
    fontFamily: 'Russo One',
  },
  subscribeButton: {
    color: 'white',
    backgroundColor: 'orange',
    fontFamily: 'Russo One',
  },
  subsribeContainer: {
    // margin: "20px",
    // float: "right",
    padding: "15px",
    backgroundColor: "black",
    position: "fixed",
    top: "350px",
    right: "20px"
  }

})
const NewsLetter = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const classes = useStyles();

  function subscribeToNewsLetter() {
    const formData = {
      EMAIL: email,
    };
    jsonp(`https://outlook.us2.list-manage.com/subscribe/post?u=db0105404a148c3ab870c5a39&amp;id=d64d1f760d&${queryString.stringify(formData)}`, { param: 'c' }, (err, data) => {
      console.log('err:', err);
      console.log('data:', data);
    });
    setMessage("Thank you for Subscribing!")
  }
  return (
    <div className={classes.subsribeContainer}>
      <h3 className={classes.subscribeMessage} >Join The Movement</h3>
      <input
        className={classes.subscribeEmail}
        type="email"
        name="EMAIL"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setMessage("") }}
        autoCapitalize="off"
        autoCorrect="off"
      />
      <Button className={classes.subscribeButton} onClick={subscribeToNewsLetter}>Subscribe</Button>
      <p className={classes.subscribeMessage}>{message}</p>
    </div>

  )
}

export default NewsLetter

