# [The Complete Sass & SCSS Course](https://www.udemy.com/sasscourse/)

## [Project Structure](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization#toc-architecture)

- `base/` - contains global styles, such as resets, typography, colors, etc.
- `components/` - contains each self-contained component in its own .scss partial
- `layout/` - contains styling for larger layout components; e.g. nav, header, footer, etc.
- `pages/` - contains page-specific styling, if necessary
- `themes/` - contains styling for different themes
- `utils/` - contains global mixins, functions, helper selectors, etc.
- `vendors/` - contains 3rd-party styles, mixins, etc.
- `main.scss` - output file that brings together all of the above parts


## Variables

`$variable`


## Partials

- `_partial.scss`
- `@import 'partial';`


## Mixins

- Allow to create reusable pieces of code:

```scss
@mixin warning {
  background-color: orange;
  color: white;
}

...

.warning-button {
  @include warning;
  padding: 8px 12px;
}
  ```

- Mixins with arguments (+ default arguments, varargs)

- Passing @content into mixins

- A mixin to import fonts:

```scss
// main.scss
@include google-font("Alegreya+Sans");

// mixins.scss
@mixin google-font($font) {
  $font: unquote($font);
  @import url(https://fonts.googleapis.com/css?family=#{font});
}
```


## Sass Imports

### Normal CSS Imports

```scss
@import url();
@import "http://";
@import "filename.css";
@import "style-screen" screen;
```

### Sass Specific Imports

```scss
/* import variables.scss or _variables.scss (partial) */
@import "variables";
@import "partials/mixins";
@import "variables", "mixins";
```


## Media Queries

### Nested Media Queries

```scss
body {
  font-family: $text-font;

  @media only screen and (max-width: 960px) {
    font-size: 125%;
  }
}
```

### Mixins & Media Queries

```scss
// mixins.scss
@mixin small-screens() {
  @media only screen and (max-width: 480px) {
    @content;
  }
}

// main.scss
body {
  font-family: $text-font;

  @include large-screens {
    font-size: 125%;
  }
}
```


## Functions

### Built-in Functions

`darken()`  
`lighten()`  
`transparentize()`  
`opacify()`

```scss
a {
  color: $link-color;

  // The & concatenates the parent selector (in this case a)
  &:hover {
    color: darken($link-color, 15%);
  }
}
```

### Custom Functions

```scss
@function em($pixels, $context: 16px) {
  @return ($pixels / $context) *1em;
}

body {
  font-size: em(18px);
}
```

```scss
// _functions.scss
@function col-width($columns: 12, $page-width: 100%, $gap: 1%) {
  @return ($page-width - $gap * ($columns - 1) / $columns);
}

// _variables.scss
$col: col-width($columns: 8);

// main.scss
#content {
    float: left;
    width: 6 * $col;
  }

#sidebar {
  float: right;
  width: 2 * $col;
}
```


## Inheritance with `@extend`

```scss
.error {
  color: red;
}

.critical-error {
  @extend .error;
  bottom: 1px solid red;
  font-weight: bold;
}
```

Placeholder selectors will not show up in the generated CSS, only the selectors that extend them will be included in the output.

```scss
%highlight {
  font-style: italic;
}

.sub-title {
  @extend %highlight;
  font-size: em(20px);
}
```

It's [better](https://tech.bellycard.com/blog/sass-mixins-vs-extends-the-data/) to use `@mixins` instead of `@extend`.


## `@if` and `@else` Directives

```scss
$contrast: high;

body {
  @if $contrast == high {
    color: #000;
  } @else if $contrast == low {
    color: #999;
  } @else {
    color: $text-color;
  }
}
```


## `@each` Loop

```scss
$speakers: bob-banker, patty-plume, sandra-smith;

@each $speaker in $speakers {
  .#{$speaker}-profile {
    background-image: url('/img/#{$speaker}.png');
  }
}
```

```scss
$font-sizes: (tiny: 8px, small: 11px, medium: 13px, large: 18px);

@each $name, $size in $font-sizes {
  .#{$name} {
    font-size: $size;
  }
}
```


## `@for` Loop

```scss
@for $i from 1 to 6 {
  .col-#{$i} {
    width: $i * 2em;
  }
}
```


## `@while` Loop

```scss
$j: 2;

@while $j <= 8 {
  .picture-#{$j} {
    width: $j * 10%;
  }
  $j: $j + 2;
}
```
