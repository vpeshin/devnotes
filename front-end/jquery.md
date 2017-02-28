<!-- TOC depthTo:2 orderedList:true -->

1. [Select and Style Elements](#select-and-style-elements)
2. [Text and HTML](#text-and-html)
3. [jQuery [Events](http://api.jquery.com/category/events/)](#jquery-eventshttpapijquerycomcategoryevents)
4. [jQuery [Effects](http://api.jquery.com/category/effects/)](#jquery-effectshttpapijquerycomcategoryeffects)
5. [jQuery functions](#jquery-functions)
6. [JSON APIs and AJAX](#json-apis-and-ajax)

<!-- /TOC -->

[jQuery API](http://api.jquery.com/)

[W3Schools jQuery tutorial](http://www.w3schools.com/jquery/default.asp)

Link to [CDN](https://code.jquery.com/) or [locally](https://code.jquery.com/).


## Select and Style Elements

`$(selector).action()`

``` js
// jQuery
$(el).css('border-width', '20px');

// Vanilla JS
// Use a class if possible
el.style.borderWidth = '20px';
```

``` js
// Select element with id "special" and give it a border
$("#special").css("border", "2px solid red");

// Style all lis
$("li").css({
  fontSize: "10px",
  border: "3px dashed purple",
  background: "rgba(89, 45, 20, 0.5)"
});

// We can also pass in an object with styles
var styles = {
  backgroundColor: "pink",
  fontWeight: "bold"
};

$("#special").css(styles)
```

``` js
// Make all lis blue, jQuery
$("li").css("color", "blue");

// Make all lis blue, JS
var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++) {
  lis[i].style.color = "blue";
}
```

Bootstrap jQuery example:

``` javascript
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
```

All of the code inside `$(document).ready()` function executes only once our page has finished loading.


## Text and HTML

- [text()](http://api.jquery.com/text/)
- [html()](http://api.jquery.com/html/)
- [attr()](http://api.jquery.com/attr/)
- [val()](http://api.jquery.com/val/)
- [addClass()](http://api.jquery.com/addClass/)
- [removeClass()](http://api.jquery.com/removeClass/)
- [toggleClass()](http://api.jquery.com/toggleClass/)

``` html
<head>
  ...
  <style type="text/css">
    .correct {
      color: green;
    }
    .wrong {
      color: red;
      background: pink;
    }
    .done {
      color: gray;
      text-decoration: line-through;
    }
  </style>
</head>

<body>
  <input type="text" placeholder="your name">
  <h1>jQuery Methods></h1>
  <ul>
    <li>Skittles</li>
    <li>Starburst</li>
    <li>Twix</li>
  </ul>
  <img src="img/1.jpg">
  <img src="img/2.jpg">
  <img src="img/3.jpg">
</body>
```

``` js
// Change h1 text
$("h1").text("New Text!");
$("ul").html(<li>"li 1"</li><li>li 2</li>)
```

`attr()` - get or set one or more attributes for every matched element.

``` js
$("img:first-of-type").attr("src", "img/11.jpg");
$("img").last().attr("src", "img/33.jpg");
```

`val()` - get or set the value of every matched element.

``` js
$("input").val(); // ""
$("input").val("Asfdalmkvm"); // "Asfdalmkvm"
// reset text input
$("input").val(""); // ""
```

`addClass()`, `removeClass()`, `toggleClass()` - adding and removing classes.

``` js
$("h1").addClass("correct");
$("h1").removeClass("correct");
// add class to all lis
$("li").addClass("wrong");
$("li").first().toggleClass("done");
```


## jQuery [Events](http://api.jquery.com/category/events/)

- User’s interactions on a web page causing DOM events:
  - Mouse: `click`, `dblclick`, `mouseenter`, `mouseleave`
  - Keyboard: `keypress`, `keydown`, `keyup`
  - Form: `submit`, `change`, `focus`, `blur`
  - Document, Window: `load`, `resize`, `scroll`, `unload`
- jQuery Event Methods: e.g., `ready()`, `click()`, `dblclick()`, `mousedown()`, `on()`

3 most important events: [click()](http://api.jquery.com/click/), [keypress()](http://api.jquery.com/keypress/), [on()](http://api.jquery.com/on/)

``` js
// prints when item with id 'submit' is clicked
$('#submit').click(function(){
  console.log("Another click");
});

//alerts when ANY button is clicked
$('button').click(function(){
  alert("Someone clicked a button");
});
```

``` js
// listen for any keypress in any text input
$('input[type="text"').keypress(function(){
  alert("text input keypress!");
});
```

[on()](http://api.jquery.com/on/) works similarly to `addEventListener`.​ It lets you specify the type of event to listen for.

``` js
// prints when item with id 'submit' is clicked
$('#submit').on('click', function(){
  console.log("Another click");
});

// alerts when ANY button is clicked
$('button').on('click', function(){
  console.log("button clicked!");
});

// double click event
$('button').on('dblclick', function(){
  alert("DOUBLE CLICKED!");
});

// drag start event
$('a').on('dragstart', function(){
  console.log("DRAG STARTED!");
});

//keypress event
$('input[type="text"').on('keypress', function(){
  alert("key press in an input!")
});
```

`click()` only adds listeners for existing elements, `on()` will add listeners for all potential future elements.

### Event Bubbling

DOM elements can be nested inside each other. And somehow, the handler of the parent works even if you click on it’s child. The reason is *event bubbling*. The bubbling goes right to the top. When an event occurs on an element - it will bubble up to `<HTML>`, triggering handlers on it’s way.

``` js
// Stopping the bubbling
$("span").click(function(event) {
  event.stopPropagation();
});
```


## jQuery [Effects](http://api.jquery.com/category/effects/)

``` html
<head>
<style type="text/css">
		div {
			width: 100px;
			height: 100px;
			background: teal;
			float: left;
			margin: 20px;
			/*display: none;*/
		}
	</style>
</head>
<body>

<button>Click Me</button>

<div>Please don't fade me!</div>
<div>I'm begging you, please!</div>
<div>Help help help!!</div>

<script>
  $("button").on("click", function(){
    $('div').slideToggle(1000, function(){
 	    $(this).remove();
    });
  });
</script>
```


## jQuery functions

`.addClass()` function allows you to add classes to elements:

``` js
// (suppose that jQuery library and the Animate.css library already included)
$(document).ready(function() {
    $("button").addClass("animated bounce");  // by type
    $(".well").addClass("animated shake");  // by class
    $("#target3").addClass("animated fadeOut");  // by id
});
```

Other jQuery functions:

``` js
// Remove Classes from an element
$("#target2").removeClass("btn-default");

// Disable an Element 
$("button").prop("disabled", true);

// Change Text Inside an Element 
$("h3").html("<em>jQuery Playground</em>");
// jQuery also has a similar function called .text() that only alters text without adding tags

// Remove an Element
$("#target4").remove();

// Add text at the beginning of element with id main
$("#main").append("Vladimir");

// Move elements
$("#target4").appendTo("#left-well");

// Clone an Element 
$("#target2").clone().appendTo("#right-well");

// Target the Parent of an Element 
$("#left-well").parent().css("background-color", "blue")

// Target the Children of an Element 
$("#left-well").children().css("color", "blue")

// Target a Specific Child of an Element 
$(".target:nth-child(3)").addClass("animated bounce");

// Target even numbered elements, odd numbered elements
$(".target:even").addClass("animated shake");
$(".target:odd").addClass("animated shake");

// Modify the Entire Page
$("body").addClass("animated fadeOut");
```


## JSON APIs and AJAX

### Trigger Click Events with jQuery

``` html
<script>
  $(document).ready(function() {
    // 1. Let's start by implementing a click event handler
    $("#getMessage").on("click", function(){
      // 2. When a user clicks the "Get Message" button, we change the
      // text of the element with the class message
      $(".message").html("Here is the message");
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```

You can also request data from an external source. This is where APIs come into play.

``` html
<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function(){
      // Your Ajax function will replace the "The message will go here"
      // text with the raw JSON output from the Free Code Camp Cat Photo API.
      $.getJSON("/json/cats.json", function(json) {
        $(".message").html(JSON.stringify(json));
      });      
    });

  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```

### Convert JSON Data to HTML

We can use the `.forEach()` method to loop through our data and modify our HTML elements.

``` html

<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";
        // Let's loop through our JSON, adding more HTML to that variable.
        // When the loop is finished, we'll render it.
        json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
            html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
          });
          html += "</div><br>";
        });

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
   </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>

```

### Render Images from Data Sources

We've seen from the last two lessons that each object in our JSON array contains an `imageLink` key with a value that is the URL of a cat's image.  
When we're looping through these objects, let's use this `imageLink` property to display this image in an `img` element.

``` html
<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        json.forEach(function(val) {

          html += "<div class = 'cat'>";
          
          // Here's the code that does this:
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

          html += "</div>";

        });

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```

### Prefilter JSON

If we don't want to render every cat photo we get from our Free Code Camp's Cat Photo JSON API, we can pre-filter the json before we loop through it.

Let's filter out the cat whose `id` key has a value of `1`.

``` html
<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        // Here's the code to do this:
        json = json.filter(function(val) {
          return (val.id !== 1);
        });
        
        json.forEach(function(val) {

          html += "<div class = 'cat'>"

          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

          html += "</div>"

        });

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
```

### Get Geolocation Data

Every browser has a built in navigator that can give us this information.  
The navigator will get our user's current longitude and latitude.

``` html
<script>
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
  }
</script>

<div id = "data">
  <h4>You are here:</h4>
  
</div>
```