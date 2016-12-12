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

