const express = require('express')
const Twit = require('twit')//package to fetch tweets
const app = express()

// https://expressjs.com/

// https://expressjs.com/en/4x/api.html

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//keys for twitter api
const apikey = 'FloPEb0l6VcFJLIm50Yp6iVch';
const apiSecretKey = 'ufKjuuyS5LMLZ9JCiAfUH7VNftzNXnzBuL8RBrkNi3AQWhEFO8';
const accessToken = '1189561232577024002-P2bZbwiMSYrzjHPiw9yhrXhNwJLo6a';
const accessTokenSecret = 'jT0wctsZZNLNIVm61gVQf1F6kZdLcEwzas1Is3OULP8dE';


var T = new Twit({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});


// localhost:5000
app.get('/', function (req, res) {
    console.log("Accessed default endpoint.");
    T.get('search/tweets', { q: '#StopAsianHate since:2021-03-01', result_type: 'popular', count: 10, lang: 'en' }).then(function(response){
        console.log(response.data);
        res.json(response.data);
    }).catch(function(error){
        console.log(error);
        res.send(error);
    });

});

// localhost:5000/users
app.get('/users', function (req, res) {
    console.log("Accessed users endpoint.");
    // res.json({ success: true }); for json data
    res.send("hello"); // for text data
});


// localhost:5000/users/:name
//variable
// http://localhost:5000/users/ryan -> hello ryan!
app.get('/users/:name', function (request, response) {
    console.log("Accessed users endpoint with variable" + request.params.name);

    response.send("hello " + request.params.name + "!");
});


// localhost:5000/people?name=bob&age=13
app.get('/people', function (request, response) {

    response.send("hello " + request.query.name + " who is " + request.query.age + " years old");
});

  
const listener = app.listen(process.env.PORT || 5000, function(){
    console.log(`Server started and listening on port: ${listener.address().port} (Press CTRL+C to quit)
    \nYou can access the server through [http://localhost:5000/]`);
});
