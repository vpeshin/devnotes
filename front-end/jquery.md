<!-- TOC depthTo:2 orderedList:true -->

1. [Syntax](#syntax)
2. [jQuery Events](#jquery-events)
3. [jQuery functions](#jquery-functions)
4. [JSON APIs and Ajax](#json-apis-and-ajax)

<!-- /TOC -->

[W3Schools jQuery tutorial](http://www.w3schools.com/jquery/default.asp)

## Syntax

`$(selector).action()`

Bootstrap jQuery Example:

``` javascript
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
```

All of the code inside `$(document).ready()` function executes only once our page has finished loading.


## jQuery Events

- User’s interactions on a web page causing DOM events:
  - Mouse: `click`, `dblclick`, `mouseenter`, `mouseleave`
  - Keyboard: `keypress`, `keydown`, `keyup`
  - Form: `submit`, `change`, `focus`, `blur`
  - Document, Window: `load`, `resize`, `scroll`, `unload`
- jQuery Event Methods: e.g., `ready()`, `click()`, `dblclick()`, `mousedown()`, `on()`


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

// Change the CSS of an Element 
$("#target1").css("color", "blue");

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


## JSON APIs and Ajax

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