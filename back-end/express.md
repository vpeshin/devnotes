<!-- TOC depthTo:2 orderedList:true -->

1. [Installing Express](#installing-express)
2. [Routes](#routes)
3. [EJS](#ejs)
4. [Post Requests](#post-requests)
5. [Making API Requests from Node](#making-api-requests-from-node)

<!-- /TOC -->

## Installing Express

1. Install [Node.js](https://nodejs.org/en/)
2. `mkdir nodehttp`
3. `cd nodehttp`
4. `npm init`
5. `npm install express ejs --save`
6. Create `app.js`. Example: 

```js
var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
 res.send('Hello Express');
});
 
app.listen(process.env.PORT, process.env.IP, function() {
  console.log('App listening on port ' + process.env.PORT);
});
```

7. [on Windows] `$env:PORT = 3000`
8. `node app`
9. VSCode IntelliSense:
    - `npm install typings -g`
    - in project directory: `typings init`
    - `typings install dt~express --save`


## Routes

Order of routes matters.

Route parameters:

```js
app.get("/r/:subredditName", function(req, res) {
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
  res.send("Welcome to the comments page!");
});
```


## EJS

app.js:

```js
var express = require("express");
var app = express();

// include directory "public"
app.use(express.static("public"));
// use res.render("love") instead of res.render("love.ejs")
app.set("view engine", "ejs");

app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
   res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];
    
    res.render("posts", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server is listening!!!"); 
});
```

public/app.css:

```css
body {
    background: yellow;
    color: purple;
}
```

views/love.ejs:

```html
<% include partials/header %>
<h1>You fell in love with: <%= thingVar.toUpperCase()  %> </h1>

<% if(thingVar.toLowerCase() === "rusty"){ %>
  <p>GOOD CHOICE! RUSTY IS THE BEST!</p>
<% } else { %>
    <p>Bad choice!  You should have said Rusty!</p>
<% } %>

<p>P.S. this is the love.ejs file!</p>

<% include partials/footer %>
```

views/posts.ejs:

```html
<% include partials/header %>

<h1>The Posts Page</h1>

<% for(var i = 0; i < posts.length; i++){ %>
 <li>
     <%= posts[i].title %> - <strong><%= posts[i].author %></strong>
 </li>
<% } %>

<% posts.forEach(function(post){ %>
 <li>
     <%= post.title %> - <strong><%= post.author %></strong>
 </li>
<% }) %>

<% include partials/footer %>
```

views/partials/header.ejs:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Demo App</title>
    <link rel="stylesheet" type="text/css" href="/app.css">
  </head>
  <body>
```

views/partials/footer.ejs:

```html
    <p>Trademark 2015</p>
  </body>
</html>
```

`<%= %>` is used when javascript rendered in html, `<% %>` is used for logic (i.e. control flow).


## Post Requests

`npm install body-parser --save`

app.js:

```js
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res){
   res.render("home"); 
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started!!!"); 
});
```

views/friends.ejs:

```html
<h1>Friends List Goes Here!</h1>

<% friends.forEach(function(friend){ %>
  <li><%= friend %></li>
<% }); %>

<form action="/addfriend" method="POST">
    <input type="text" name="newfriend" placeholder="name">
    <button>I made a new friend!</button>
</form>
```


## Making API Requests from Node

`npm install request body-parser --save`

```js
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

### Examples

Requesting [Sunset time for Hawaii](https://developer.yahoo.com/weather/):

```js
var request = require('request');

console.log("Sunset in Hawaii is at...");
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
  if (!error && response.statusCode == 200) {
      var parsedData = JSON.parse(body);
      console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
  }
});

<!--
Sunset in Hawaii is at...
6:36 pm
-->
```

Reauesting movies list from [OMDb API](http://omdbapi.com/):

```js
...

app.get('/', function(req, res) {
  res.render('search');
});

app.get('/results', function (req, res) {
  var query = req.query.search;
  var url = 'http://omdbapi.com/?s=' + query;
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render('results', {data: data});
    }
  });
});

...
```

views/search.ejs:

```html
<h1>Search for a Movie</h1>

<form action="/results" method="GET">
  <input type="text" placeholder="search term" name="search">
  <input type="submit">
</form>
```

views/results.ejs:

```html
<h1>Results Page</h1>

<% data['Search'].forEach(function(movie) { %>
  <li><%= movie['Title'] %></li>
<% }) %>
```