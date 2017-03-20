<!-- TOC depthTo:2 orderedList:true -->

1. [Making Requests from Node](#making-requests-from-node)

<!-- /TOC -->

## Making Requests from Node

`npm install request --save`

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