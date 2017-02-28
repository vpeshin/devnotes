<!-- TOC depthTo:2 orderedList:true -->

1. [Getting Started with Bootstrap](#getting-started-with-bootstrap)
2. [Bootstrap Grid System](#bootstrap-grid-system)
3. [Navigation Bar](#navigation-bar)
4. [Icon Fonts](#icon-fonts)
5. [Bootstrap Buttons and Button Groups](#bootstrap-buttons-and-button-groups)
6. [Bootstrap Forms](#bootstrap-forms)
7. [Bootstrap Tables](#bootstrap-tables)
8. [Bootstrap Panels and Wells](#bootstrap-panels-and-wells)
9. [Images and media](#images-and-media)
10. [Alerting Users](#alerting-users)
11. [[Bootstrap Javascript Components](http://getbootstrap.com/javascript)](#bootstrap-javascript-componentshttpgetbootstrapcomjavascript)

<!-- /TOC -->

## Getting Started with Bootstrap

### Using Bootstrap

``` html
<head>
    <meta charset="utf-8">	
    <meta http-equiv="X-UA-Compatible" content="IE=edge">	
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.min.css" rel="stylesheet">	
    <link href="css/bootstrap-theme.min.css" rel="stylesheet">
</head>
<body>
    ...
    <script	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>	
    <!-- Include all compiled plugins (below), or include individual files as needed -->	
    <script	src="js/bootstrap.min.js"></script>	
</body>
```

Using Bootstrap CDN:

``` html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">	
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">	
...
<script	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>	
<script	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>	
```

[Bootswatch](https://bootswatch.com/) - Free themes for Bootstrap.

### Bootstrap Container class

``` html
<div class="container">...</div>
```

- Container for all the content of the site	
- Fixed width (width depends on screen size)	
- Use as the outermost div to wrap all the site	content for the grid to work correctly	
- `.container-fluid` class allows full width container

### Bootstrap Rows

``` html
<div class="row">...</div>
```

- Divide the page into multiple rows	
- Rows act as horizontal grouping for columns	
- Rows must be inside containers

### Jumbotron

``` html
<header class="jumbotron">...</header>
```

- Lightweight, flexible component for showcasing key content, e.g., company name, logo and key information	
- Can be used outside a container to span the entire screen width	
  - Use a container inside if you wish to contain the content within a fixed width


## Bootstrap Grid System

| |Extra Small (< 768px)|Small (≥ 768px)|Medium (≥ 992px)|Large (≥ 1200px)|
|-|-----------------------|-----------------|-----------------|-----------------|
|Typical form factor|Mobile phones|Tablets|Laptops|Desktops|	
|Grid behavior|Horizontal|Collapsed to start, horizontal above breakpoints|Collapsed	to	start,	horizontal	above	breakpoints|Collapsed	to	start,	horizontal	above	breakpoints|
|Container width|None (auto)|750px|970px|1170px|
|Class prefix|.col-xs-|.col-sm-|.col-md-|.col-lg-|
|# of columns|12|12|12|12|	
Column width|Auto|~62px|~81px|~97px|
|Gutter width|30px (15px on each side)|30px (15px on each side)|30px (15px on each side)|30px (15px on each side)

If we don't specify the layout for larger screen sizes explicitly, then the layout for the lower screen size will be applied.

``` html
<!-- col-xs-12 and col-xs-12 will be applied to Extra Small screens
col-sm-5 and col-sm-7 will be applied to Small, Medium, and Large screens -->
<div class="col-xs-12 col-sm-5">
<div class="col-xs-12 col-sm-7">
```

### Using column push and pull

``` html
<div class="col-xs-12 col-sm-5 col-sm-push-7">
<div class="col-xs-12 col-sm-7 col-sm-pull-5">
<!--
xs screen:
12
12
sm, md, lg screens:
7 - 5
-->
```

### Using offset

``` html
<div class="col-sm-4 col-sm-offset-1">
<!--
The piece of content should be offset by one column. Meaning that this piece
of content will be laid out starting at column number 2 rather than column number 1
-->
```

### Nesting columns

``` html
<div class="container">
    <div class="row">	
    <div class="col-sm-5">  <div class="col-sm-7">	
                            <div class="row">
                            <div class="col-sm-9"><div class="col-sm-3">
```


## Navigation Bar

### Navbar Brand and Items on Right

``` html
<nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Ristorante Con Fusion</a>
        </div>
        <ul class="nav navbar-nav">	...	</ul>
        <ul	class="nav navbar-nav navbar-right">
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
</nav>
```

### Responsive Navbar

``` html
<div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#navbar"
            aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>
    ...
</div>	
<div id="navbar" class="navbar-collapse collapse">
    <ul class="nav navbar-nav"> ... </ul>
</div>	
</div>	
</nav>
```

### Positioning Navbar

`.navbar-fixed-top` and `.navbar-fixed-bottom`: Fixed to top/bottom of window and does not scroll  
`.navbar-static-top`: Full-width navbar at the top that scrolls  
`.navbar-inverse`: Dark navbar with light text

### Dropdown

``` html
<li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                        aria-haspopup="true" aria-expanded="false">	
    Menu<span class="caret"></span></a>	

    <ul class="dropdown-menu">
        <li><a href="#">Appetizers</a></li>
        <li><a href="#">Main Courses</a></li>
        <li><a href="#">Desserts</a></li>
        <li><a href="#">Drinks</a></li>
        <li role="separator" class="divider"></li>
        <li class="dropdown-header">Specials</li>
        <li><a href="#">Lunch Buffet</a></li>
        <li><a href="#">Weekend Brunch</a></li>
    </ul>
</li>
```

## Icon Fonts

[Glyphicons](https://glyphicons.com/) (included in Bootstrap 3):

``` html
<span class="glyphicon glyphicon-home" aria-hidden="true"></span>	
```

[Font Awesome](http://fontawesome.io/get-started/):

``` html
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
...
<i class="fa fa-facebook"></i>	
```

[Bootstrap-social](http://lipis.github.io/bootstrap-social/):

``` html
<link href="css/bootstrap-social.css" rel="stylesheet">
...
<a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">	
```

[GitHub Octicons](https://octicons.github.com/)


## Bootstrap Buttons and Button Groups

``` html
<div class="col-md-5 col-md-offset-1">
    <div class="btn-toolbar" role="toolbar">
        <div class="btn-group btn-group-sm" role="group">
            <button type="button" class="btn btn-primary btn-lg">Primary</button>
            <button type="button" class="btn btn-default">Default</button>	
            <button	type="button" class="btn btn-success">Success</button>	
        </div>	
        <div class="btn-group btn-group-lg" role="group">
            <button type="button" class="btn btn-info">Info</button>	
            <button type="button" class="btn btn-warning">warning</button>
            <button type="button" class="btn btn-danger">Danger</button>
        </div>
    </div>	
</div>
<div class="col-md-3">
    <div class="btn-group-vertical" role="group">
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-danger">Danger</button>
    </div>
</div>	
```

You can make a link a button

``` html
<a href="http://www.getbootstrap.com" class="btn btn-info btn-lg">Docs</a>
```


## Bootstrap Forms

### Basic Form

`.form-control` makes the input bootstrapified, `.form-group` adds some spacing.

``` html
<form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile">
        <p class="help-block">Example block-level help text here.</p>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox"> Check me out
         </label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
</form>
```

### Basic Horizontal Form

``` html
<form class="form-horizontal" role="form">
    <div class="form-group">
        <label for="firstname" class="col-sm-2 control-label">First Name</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="firstname"
                name="firstname" placeholder="Enter First Name">	
         </div>
    </div>
</form>
```

### Inline Form

``` html
<form class="form-inline">
    <div class="form-group">
        <label class="sr-only" for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Email">
    </div>
    <div class="form-group">
        <label class="sr-only" for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
    </div>
    <div class="checkbox">
        <label><input type="checkbox"> Remember me</label>
    </div>
    <button type="submit" class="btn btn-default">Sign in</button>
</form>	
```

### Input Group with Addons

``` html
<div class="input-group">
    <div class="input-group-addon">(</div>
    <input type="tel" class="form-control" id="areacode"
            name="areacode" placeholder="Area code">	
    <div class="input-group-addon">)</div>
</div>
```

Do not mix form groups directly with input groups. Instead, nest the input group inside of the form group.


## Bootstrap Tables

- `table-striped` for zebra striped rows
- `table-bordered` for borders to table cells
- `table-hover` for highlighting rows when you hover over a row	
- `table-condensed` for cutting the cell padding in half
- `table-responsive` for making the tables responsive. Can horizontally scroll tables on screen sizes less than 768px.	

Individual rows or cells can be colored using the following classes: `active`, `success`, `info`, `warning` and `danger`.

``` html
<tr class="success"> ... </tr>
<td class="danger"> ... </td>
```


## Bootstrap Panels and Wells

Sometimes you may wish to highlight some content on your website. Panels and wells help.

``` html
<div class="panel panel-primary">
    <div class="panel-heading">
        <h3 class="panel-title">Facts At a Glance</h3>
    </div>
    <div class="panel-body">
        <dl class="dl-horizontal">
            <dt>Started</dt>
            <dd>3 Feb. 2013</dd>
            <dt>Major Stake Holder</dt>
            <dd>HK Fine Foods Inc.</dd>
            <dt>Last Year's Turnover</dt>
            <dd>$1,250,375</dd>
            <dt>Employees</dt>
            <dd>40</dd>
        </dl>
    </div>
</div>
```

``` html
<div class="well">
    <blockquote>
        <p>You better cut the pizza in four pieces because I'm not hungry enough to eat six.</p>
        <footer>Yogi Berra,
            <cite title="Source	Title">The Wit and Wisdom of  Yogi Berra, P. Pepe, Diversion Books, 2014</cite></footer>
    </blockquote>
</div>
```


## Images and media

``` html
<img src="..." class="...">
```

### Bootstrap Image Classes

`img-responsive`  
`img-rounded`  
`img-circle`  
`img-thumbnail`

### Thumbnail Class:

``` html
<div class="thumbnail">
    <a href="#"><img class="img-thumbnail" src="img/alberto.png" alt="Alberto Somayya"></a>
    <div class="caption">
        <h2>Alberto Somayya</h2>
        <h4>Executive Chef</h4>
        <p>Award winning three-star Michelin chef with wide International experience</p>
        <p><a class="btn btn-primary btn-xs" href="#">More &raquo;</a></p>
    </div>
</div>
```

### Media Object:

``` html
<div class="media">
    <div class="media-left media-middle">
        <a href="#"><img class="media-object img-thumbnail" src="img/alberto.png" alt="Alberto Somayya"></a>
    </div>
    <div class="media-body">
        <h2 class="media-heading">Alberto Somayya</h2>
        <h4>Executive Chef</h4>
        <p>Award winning three-star Michelin chef with wide International experience</p>
        <p><a class="btn btn-primary btn-xs" href="#">More &raquo;</a></p>
    </div>
</div>
```

### Media Object Classes

- Media classes: `media`, `media-object`, `media-body`, `media-heading`
- `media-left` and `media-right` for positioning. `media-right` div should be placed after `media-body` div
- `media-top`, `media-middle`, `media-bottom`
- `media-list` applied to `<ul>` and media classes applied to `<li>`

### Responsive Embed

- Embedding media content, e.g., video, and making it responsive
- Apply `embed-responsive-item` to `<embed>`, `<iframe>`, `<video>`, `<object>`
- Enclose in `<div>` and apply `embed-responsive` and `embed-responsive-4by3` or `embed-responsive-16by9`

``` html
<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2P2mXutRdkE"></iframe>
</div>
```


## Alerting Users

[[Labels](http://getbootstrap.com/components/#labels)], [[Badges](http://getbootstrap.com/components/#badges)], [[Alerts](http://getbootstrap.com/components/#alerts)], [[Progress Bars](http://getbootstrap.com/components/#progress)]

### Labels and Badges

``` html
<h2 class="media-heading">
Uthappizza
<span class="label label-danger label-xs">Hot</span>
<span class="badge">$4.99</span>
</h2>
```

``` html
<span class="badge">45</span>
```

Badges are self-collapsing when empty.

### Alerts

``` html
<div class="alert alert-*"> ... </div>
```

- Alerts in different colors (`primary`, `danger`, etc.)
- Can include links in alert
- Use `alert-dismissible` and X button to dismiss alert (Needs Javascript plugin)

``` html
<div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <strong>Warning:</strong>:Please
    <a href="tel:+85212345678" class="alert-link"> call</a>
    us to reserve for more than six guests.
</div>
```

### Progress Bars

``` html
<div class="progress">
    <div class="progress-bar progress-bar-danger progress-bar-striped"
        role="progressbar" aria-valuenow="80" aria-valuemin="0"
        aria-valuemax="100" style="width: 80%">
        <span class="sr-only">80% Complete (danger)</span>
        80%
    </div>
</div>
```

`– progress-bar-*`:
- colors: `default`, `primary`, ...
- `striped` appearance, also use `active` for animation
- Several can be stacked: include all inner divs in a single outer progress div


## [Bootstrap Javascript Components](http://getbootstrap.com/javascript)

Include the Javascript ﬁles at the bottom of the <body>:

``` html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual ﬁles as needed -->
<script src="js/bootstrap.min.js"></script>
```

JS components can all be used without writing a single line of JavaScript by using `– data-*` attributes (e.g., `data-toggle`, `data-spy`).

### [Tabs](http://getbootstrap.com/javascript/#nav-tabs), [Pills](http://getbootstrap.com/components/#nav-pills) and [Tabbed Navigation](http://getbootstrap.com/javascript/#tabs)

Typical Tab Nav Structure:

``` html
<ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active">
        <a href="#peter">Peter Pan, CEO</a>
    </li>
    <li role="presentation">
        <a href="#danny">Danny Witherspoon, CFO</a>
    </li>
    <li role="presentation">
        <a href="#agumbe">Agumbe Tang, CTO</a>
    </li>
</ul>
```

Typical Pills Nav Structure:

``` html
<ul class="nav nav-pills" role="tablist">
...
</ul>
```

Connecting Tab Navigation and Content:

``` html
<div class="tab-content">
    <div role="tabpanel" class="tab-pane fade in active" id="peter">
        <h3>Peter Pan <small>Chief Epicurious Officer</small></h3>
        <p>...</p>
    </div>

    ...

</div>
```	

- `nav-justified` to justify the tabs/pills to stretch the width of the parent with each element sharing its proportion of the width
- elements can be disabled using `disabled` class
- Pills can be stacked vertically using `nav-stacked` class
- Content divided into multiple panes:
  - Enclose entire content in `<div>` with `tab-content` class
  - Each pane should be enclosed inside a `<div>` with `tab-pane` class
  - One pane designated as `active`

### Hide and Seek: [Collapse](http://getbootstrap.com/javascript/#collapse), [Accordion](http://getbootstrap.com/javascript/#collapse-example-accordion), [Scrollspy](http://getbootstrap.com/javascript/#scrollspy) and [Affix](http://getbootstrap.com/javascript/#affix)

### Revealing Content: [Tooltips](http://getbootstrap.com/javascript/#tooltips), [Popovers](http://getbootstrap.com/javascript/#popovers) and [Modals](http://getbootstrap.com/javascript/#modals)

### [Carousel](http://getbootstrap.com/javascript/#carousel)