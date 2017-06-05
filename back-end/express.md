<!-- TOC depthTo:2 orderedList:true -->

1. [Installing Express](#installing-express)
2. [Routes](#routes)
3. [RESTful Routing](#restful-routing)
4. [EJS](#ejs)
5. [Post Requests](#post-requests)
6. [Making API Requests from Node](#making-api-requests-from-node)
7. [MongoDB](#mongodb)
8. [Sanitizing](#sanitizing)
9. [Authentication](#authentication)
10. [Using different databases locally and on heroku](#using-different-databases-locally-and-on-heroku)

<!-- /TOC -->

## Installing Express

1. Install [Node.js](https://nodejs.org/en/)
2. `mkdir nodehttp`
3. `cd nodehttp`
4. `npm init`
5. `npm install express ejs mongoose body-parser --save`
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


## RESTful Routing

(See *RESTfulBlogApp* project)

**REST** - a mapping between HTTP routes and CRUD (Create-Read-Update-Destroy)

Action	| Method | URL | Description | Mongoose Method
--------|--------|-----|-------------|----------------
INDEX   | GET    | /dogs | List all dogs | Dog.find()
NEW	    | GET    | /dogs/new | Show new dog form | N/A
CREATE	| POST   | /dogs | Create a new dog, then redirect somewhere | Dog.create()
SHOW	  | GET    | /dogs/:id | Show info about one specific dog | Dog.findById()
EDIT	  | GET    | /dogs/:id/edit | Show edit form for one dog | Dog.findById()
UPDATE	| PUT    | /dogs/:id | Update particular dog, then redirect somewhere | Dog.findByIdAndUpdate()
DESTROY	| DELETE | /dogs/:id | Delete a particular dog, then redirect somewhere | Dog.findByIdAndRemove()

HTML forms can't be used with PUT request. There is a workaround:

1. `npm install method-override --save`
2. app.js:

```js
...
methodOverride = require('method-override');
...
app.use(methodOverride('_method'));
```

3. edit.ejs:

```html
...
<form class="ui form" action="/blogs/<%= blog._id %>?_method=PUT" method="POST">
...
```


## EJS

app.js:

```js
var express = require("express");
var app = express();

// include directory "public"
app.use(express.static(__dirname + '/public'));
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


## MongoDB

### Configure a Windows Service for MongoDB

- Open an Administrator command prompt.
- `mkdir c:\data\db`
- `mkdir c:\data\log`
- create a file C:\data\mongod.cfg:

```
systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db
```

- `"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --config "C:\data\mongod.cfg" --install`
- `net start MongoDB`

To stop the MongoDB service:
- `net stop MongoDB`

To remove the MongoDB service:
- `"C:\mongodb\bin\mongod.exe" --remove`

To connect to MongoDB through the mongo.exe shell:
- `mongo.exe`


### Mongo Shell

Command           | Description 
------------------|------------------------
`show dbs`        | Show database names
`use dbname`      | Switch to database `dbname`
`db.dogs.insert()`| Insert dogs collection into current database
`db.dogs.insert({ name: "Rusty", breed: "Mutt })`|
`show collections`|
`db.dogs.find()`  |
`db.dogs.find({ breed: "Mutt" })`| Find all mutt dogs
`db.dogs.update({ name: "Lulu" }, { breed: "Poodle" })`| Update dog
`db.dogs.update({ name: "Rusty" }, { $set: { name: "Tater", isCute: true } })`| Update name and add new property `isCute` but preserve breed
`db.dogs.remove({ breed: "Poodle" })`|
`db.dogs.remove({ breed: "Poodle" }).limit(1)`|
`db.dogs.drop()| Delete collection


### Mongoose

`npm install mongoose --save`

```js
var mongoose = require('mongoose');
// connect to database or create a new one
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// compile schema into model (so we can use Cat methods)
var Cat = mongoose.model('Cat', catSchema);

// add new cat to database
Cat.create({
  name: 'George',
  age: 11,
  temperament: "Grouchy"
}, function(err, cat) {
  if (err) {
    console.log('Something went wrong');
  } else {
    console.log('We just saved a cat to the db');
    console.log(cat);
  }
});

// retrieve all cats from database and console.log each one
Cat.find({}, function(err, cat) {
  if (err) {
    console.log("ERROR!");
    console.log(err);
  } else {
    console.log('All the cats:');
    console.log(cat);
  }
});
```


## Sanitizing

1. `npm install express-sanitizer --save`
2. app.js:

```js
...
var expressSanitizer = require('express-sanitizer');
...
// after bodyParser
app.use(expressSanitizer());
...
// CREATE route
app.post('/blogs', function(req, res) {
  req.body.blog.body = req.sanitize(req.body.blog.body);
...
// UPDATE route
app.put("/blogs/:id", function(req, res){
  req.body.blog.body = req.sanitize(req.body.blog.body);
...
```


## Authentication

(See *AuthDemo* project)


## Using different databases locally and on heroku

Create new environment variable:  
`export DATABASEURL=mongodb://localhost/cat_app'  
`heroku config:set DATABASEURL=mongodb://colt:rusty@ds055525.mongolab.com:55525/yelpcam`

app.js:

```js
...
var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp_v11";
mongoose.connect(url);
...
```