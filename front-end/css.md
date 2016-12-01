<!-- TOC depthTo:2 orderedList:true -->

1. [Colors](#colors)
2. [Text](#text)
3. [Margins, Padding, Borders](#margins-padding-borders)
4. [Class and ID Selectors](#class-and-id-selectors)
5. [Grouping and Nesting](#grouping-and-nesting)
6. [Pseudo Classes and Pseudo Elements](#pseudo-classes-and-pseudo-elements)
7. [Lists](#lists)
8. [Tables](#tables)
9. [Backgrounds](#backgrounds)
10. [Specificity](#specificity)
11. [Display](#display)
12. [Navigation Bar](#navigation-bar)
13. [Image Gallery](#image-gallery)
14. [Image Opacity / Transparency](#image-opacity--transparency)
15. [Image Sprites](#image-sprites)
16. [Page Layout](#page-layout)
17. [Rounded Corners](#rounded-corners)
18. [Border Images](#border-images)
19. [Shadows](#shadows)
20. [Universal, Child, and Adjacent Selectors](#universal-child-and-adjacent-selectors)
21. [At-Rules: `@import`, `@media`, and `@font-face`](#at-rules-import-media-and-font-face)
22. [Attribute Selectors](#attribute-selectors)
23. [Transitions](#transitions)
24. [Transformations](#transformations)
25. [Animations](#animations)
26. [Multiple Columns](#multiple-columns)
27. [User Interface](#user-interface)
28. [Flexible Box](#flexible-box)
29. [Media Queries](#media-queries)
30. [Common Responsive Patterns](#common-responsive-patterns)
31. [Responsive Tables](#responsive-tables)
32. [Responsive Images](#responsive-images)
33. [Other](#other)

<!-- /TOC -->


## Colors

[[W3Schools]([[W3Schools](http://www.w3schools.com/css/css3_colors.asp)]

Colors can be applied by using color (for text) and background-color (for anything).

``` css
/*The values of red:*/  
red     /*Don't use color names. Except black and white*/  
rgb(255,0,0)  
rgba(255,0,0,1)  
rgb(100%,0%,0%)  
#ff0000  
#f00  
hsl(0, 100%, 50%)  
hsla(1, 100%, 50%, 1)
```


## Text

[[W3Schools 1](http://www.w3schools.com/css/css_text.asp)],
[[W3Schools 2](http://www.w3schools.com/css/css_font.asp)],
[[W3Schools 3](http://www.w3schools.com/css/css3_text_effects.asp)],
[[W3Schools 4](http://www.w3schools.com/css/css3_fonts.asp)]

``` css
font-family: arial, helvetica, serif  
/*If the name of a font is more than one word, it should be put in quotation marks.*/  
  
font-size: 2em  
font-weight: bold / normal  
font-style: italic / normal  
  
text-decoration: underline / overline / line-through / none  
/*underline should only be used for links.*/  
  
text-transform: capitalize / uppercase / lowercase / none  
  
letter-spacing: 0.5em / normal  
word-spacing: 2em / normal  
line-height: 1.5 / normal  
text-align: left / right / center / justify  
text-indent: 50px
  
font: italic bold 12px/2 "Times New Roman", times, serif  /*combines font-style, font-weight, font-size, line-height, and font-family*/
```

CSS3 contains several new text features: `text-overflow`, `word-wrap`, `word-break`


## Margins, Padding, Borders

[[W3Schools 1](http://www.w3schools.com/css/css_boxmodel.asp)],
[[W3Schools 2](http://www.w3schools.com/css/css_border.asp)],
[[W3Schools 3](http://www.w3schools.com/css/css_outline.asp)],
[[W3Schools 4](http://www.w3schools.com/css/css_margin.asp)],
[[W3Schools 5](http://www.w3schools.com/css/css_padding.asp)]

A `margin` is the space outside something, whereas `padding` is the space inside something.

``` css
margin: 1px 5px 10px 20px  /*margin-top, margin-right, margin-bottom, margin-left*/  
padding: 1em 10em;  /*the first value will be the top and bottom and the second value will be the right and left*/  

border: 1px red solid  /*border-width, border-color, border-style*/  
  
border-style: solid / dotted / dashed / double / groove / ridge / inset / outset  
border-width: 3px  
border-left-width: 10px  
border-right-width: 10px  
border-color: red  
```

When you set the `width` and `height` properties of an element with CSS, you just set
the width and height of the content area. To calculate the full size of an element,
you must also add padding, borders and margins.  
Total element width = width + left padding + right padding + left border + right border + left margin + right margin.

``` css
div {  
    width: 320px;  
     padding: 10px;  
     border: 5px solid gray;  
     margin: 0;   
}  
/* 
320px (width) 
 + 20px (left + right padding) 
 + 10px (left + right border) 
 + 0px (left + right margin) 
 = 350px 
*/
```
 
Setting the `max-width` of a block-level element will prevent it from stretching out 
to the edges of its container. Then, you can set the margins to `auto`, to horizontally
center the element within its container. The element will take up the specified width,
and the remaining space will be split equally between the two margins:

``` css
div.ex1 {  
    max-width: 500px;  
    margin: auto;  
    border: 3px solid #8AC007;  
}  
```


## Class and ID Selectors

A class selector is a name preceded by `.` and an ID selector is a name preceded by `#`.

``` css
#top {  
    background-color: #ccc;  
    padding: 20px  
}  
.intro {  
    color: red;  
    font-weight: bold;  
}  
```

``` html
<div id="top">  
<h1>Chocolate curry</h1>  
<p class="intro">This is my recipe for making curry purely with chocolate</p>  
<p class="intro">Mmm mm mmmmm</p>  
</div>  
```

An ID can be used to identify one element, whereas a class can be used to identify
more than one. You can also apply a selector to a specific HTML element by simply
stating the HTML selector first, so:

``` css
p.jam {  
    color: red;  
}  
```

will only be applied to paragraph elements that have the class `jam`.


## Grouping and Nesting

You can give the same properties to a number of selectors without having to repeat them.

``` css
h2, .thisOtherClass, .yetAnotherClass {  
    color: red;  
}  
```

You can specify properties to selectors within other selectors. CSS:

``` css
#top {  
    background-color: #ccc;  
    padding: 1em  
}  

#top h1 {  
    color: #ff0;  
}  

#top p {  
    color: red;  
    font-weight: bold;  
}  
```

This removes the need for classes or IDs on the `p` and `h1` tags in HTML:

``` html
<div id="top">  
    <h1>Chocolate curry</h1>  
    <p>This is my recipe for making curry purely with chocolate</p>  
    <p>Mmm mm mmmmm</p>  
</div> 
```


## Pseudo Classes and Pseudo Elements

[[W3Schools 1](http://www.w3schools.com/css/css_pseudo_classes.asp)],
[[W3Schools 2](http://www.w3schools.com/css/css_pseudo_elements.asp)]

Pseudo classes are bolted on to selectors to specify a state or relation to the selector.

``` css
a:visited {  
	color: purple;  
}  
  
link  /*unvisited link*/  
visited  /*visited link*/  
active  /*when something activated by the user, such as when a link is clicked on*/  
hover  /*when something is passed over by an input from the user, such as when a cursor moves over a link*/  
focus  /*when something gains focus, that is when it is selected by, or is ready for keyboard input*/  
first-child  /*will target something only if it is the very first descendant of an element (for example, first paragraph*/  
nth-child(n)  /*matches every element that is the nth child, regardless of type, of its parent.*/  
last-child  
target  
first-of-type  
/*Note the difference: 
	p:nth-child(3) 
	p :nth-child(3)
*/
```

Pseudo elements should include two colons (`p::first-letter`).

- `first-letter`  
- `first-line`  
- `before`  (see below) 
- `after`  (see below)

The `before` and `after` pseudo elements are used in conjunction with the content property.  
The value of the content property can be `open-quote`, `close-quote`, any string enclosed
in quotation marks, or any image, using `url(imagename)`.

``` css
blockquote::before {  
    content: open-quote;  
}  
```

The `content` property effectively creates another box to play with so you can 
also add styles to the "presentational content":

``` css
li::before {  
    content: "POW! ";  
    background: red;  
    color: #fc0;  
}
```


## Lists

[[W3Schools](http://www.w3schools.com/css/css_list.asp)]

The type of list item marker is specified with the `list-style-type` property:

``` css
ul.a {  
    list-style-type: circle;  
}  
  
ul.b {  
    list-style-type: square;  
}  
  
ol.c {  
    list-style-type: upper-roman;  
}  
  
ol.d {  
    list-style-type: lower-alpha;  
}
```

To specify an image as the list item marker, use the `list-style-image` property:

``` css
ul {
    list-style-image: url('sqpurple.gif');  
}
  
/*Cross-browser solution:*/  
ul {  
     list-style-type: none;  
     padding: 0px;  
     margin: 0px;  
}  
  
ul li {  
     background-image: url(sqpurple.gif);  
     background-repeat: no-repeat;  
     background-position: 0px center;   
     padding-left: 15px;   
}
```

The `list-style` property is a shorthand property.

``` css
ul {  
     list-style: square inside url("sqpurple.gif");  
}  
/*list-style-type, list-style-position, list-style-image*/  
```


## Tables

[[W3Schools](http://www.w3schools.com/css/css_table.asp)]

To specify table borders in CSS, use the `border` property.  
The `border-collapse` property sets whether the table borders are collapsed
into a single border or separated.

``` css
table {  
     border-collapse: collapse;  
}  
  
table, th, td {  
     border: 1px solid black;  
}  
```

Width and height of a table is defined by the `width` and `height` properties.  
The `text-align` property sets the horizontal alignment, like left, right, or center.  
The `vertical-align` property sets the vertical alignment, like top, bottom, or middle.  
To control the space between the border and content in a table, use the `padding` property on `<td>` and `<th>` elements.

``` css
table {  
     width: 100%;  
}  
  
th {  
     height: 50px;  
     text-align: left;  
}  
  
td {  
     height: 50px;  
     vertical-align: bottom;  
     padding: 15px;  
}  
```

The example below specifies the color of the borders, and the text and background
color of `<th>` elements:

``` css
table, td, th {  
     border: 1px solid green;  
}  
  
th {  
     background-color: green;  
     color: white;  
}  
```


## Backgrounds

[[W3Schools 1](http://www.w3schools.com/css/css_background.asp)],
[[W3Schools 2](http://www.w3schools.com/css/css3_backgrounds.asp)],
[[W3Schools 3](http://www.w3schools.com/css/css3_gradients.asp)]

Background images can be used in most HTML elements - not just for the whole page (body).

``` css
background: white url(http://www.htmldog.com/images/bg.gif) no-repeat top right  
/*This amalgamates these properties:  
background-color  
background-image*/

background-repeat: repeat / repeat-y / repeat-x / no-repeat  
background-position: top / center / bottom / left / right / ... /*a length, a percentage, or any sensible combination, such as top right.*/  
  
/*Multiple backgrounds.*/  
background: url(bg.png), url(bullet.png) 0 50% no-repeat, url(arrow.png) right no-repeat;  
  
/*The background-size property allows you to stretch or compress a background image. */  
background-size: auto / lengths / percentages / contain / cover / A combination of lengths, percentages, and auto  
  
background-origin: padding-box / border-box / content-box  
  
/*Gradients:*/  
background: linear-gradient(orange, red);  /*from top to bottom*/  
background: linear-gradient(to bottom right, orange, red);  
background: linear-gradient(20deg, orange, red);  
background: linear-gradient(hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%));  
  
body {  
    background: #666 url(fade.png) 0 0 repeat-y;  /*fallback for IE*/  
    background: -webkit-linear-gradient(right, #000, #666);  /*for Safari and older versions of Chrome. exclude "to*/  
    background: linear-gradient(to right, #000, #666);  /*for modern browsers*/  
}  
  
/*Radial gradients:*/  
background: radial-gradient(yellow, green);  
background: radial-gradient(circle, yellow, green);  /*by default it is ellipse*/  
background: radial-gradient(circle closest-side, yellow, green);  /*closest-corner, farthest-side, farthest-corner*/  
background: radial-gradient(at top left, yellow, green);  /*to place the origin of the gradient*/  
background: -webkit-radial-gradient(100px 200px, circle closest-side, black, white); /*exclude "to", "at"*/  
  
/*Repeating gradients. 
For basic bars of black-and-white bars, for example:*/  
background: repeating-linear-gradient(white, black 10px, white 20px); 
```

CSS3 contains a few new background properties, which allow greater control of the `background` element:

`background-image` (with multiple backgrounds)  
`background-size`  
`background-origin`  
`background-clip`


## Specificity

If the selectors are the same then the last one will always take precedence. Basically, you give every:  
ID selector (`#whatever`) a value of 100  
class selector (`.whatever`) a value of 10  
HTML selector (`whatever`) a value of 1.  
Then you add them all up and you have the specificity value.  

`p` has a specificity of 1 (1 HTML selector)  
`div p` has a specificity of 2 (2 HTML selectors, 1+1)  
`.tree` has a specificity of 10 (1 class selector)  
`div p.tree` has a specificity of 12 (2 HTML selectors + a class selector, 1+1+10)  
`#baobab` has a specificity of 100 (1 id selector)  
`body #content .alternative p` has a specificity of 112 (HTML selector + id selector + class selector + HTML selector, 1+100+10+1)


## Display

[[W3Schools](http://www.w3schools.com/css/css_display_visibility.asp)]

The `display` property specifies if/how an element is displayed.  
Every HTML element has a default display value depending on what type of element it is.  
The default display value for most elements is `block` or `inline`.

`inline`:

``` css
li { display: inline }  /*all list items in a list will appear next to each other in one continuous line*/   
```

`block` makes a box standalone, fitting the entire width of its containing box,
with an effective line break before and after it.    
This will make all links in `nav` large clickable blocks:

``` css
#nav a {  
    display: block;  
    padding: 20px 10px;  
}  
```

`display: inline-block` will keep a box inline but lend the greater formatting 
flexibility of block boxes, allowing margin to the right and left of the box, for example.

`display: none` doesn’t display a box at all. This code could be used in a print
stylesheet to "turn off" the display of elements such as navigation:

``` css
#navigation, #related_links { display: none }
```

`visibility:hidden` also hides an element. However, the element will still take up
the same space as before.


## Navigation Bar

[[W3Schools](http://www.w3schools.com/css/css_navbar.asp)]


## Image Gallery

[[W3Schools](http://www.w3schools.com/css/css_image_gallery.asp)]


## Image Opacity / Transparency

[[W3Schools](http://www.w3schools.com/css/css_image_transparency.asp)]


## Image Sprites

[[W3Schools](http://www.w3schools.com/css/css_image_sprites.asp)]


## Page Layout

[[W3Schools 1](http://www.w3schools.com/css/css_positioning.asp)],
[[W3Schools 2](http://www.w3schools.com/css/css_float.asp)],
[[W3Schools 3](http://www.w3schools.com/css/css_inline-block.asp)],
[[W3Schools 4](http://www.w3schools.com/css/css_align.asp)]

``` css
position: static /* relative / absolute / fixed */
```

`static` is the default value and renders a box in the normal order of things,
as they appear in the HTML.  
`relative` is much like static but the box can be offset from its original position
with the properties top, right, bottom and left.  
`absolute` pulls a box out of the normal flow of the HTML. The absolute box can be
placed anywhere on the page using top, right, bottom and left.  
`fixed` behaves like absolute, but it will absolutely position a box in reference
to the browser window as opposed to the web page, so fixed boxes should stay
exactly where they are on the screen even when the page is scrolled.

A traditional two-column layout with absolute positioning:

``` html
<div id="navigation">  
    <ul>  
        <li><a href="this.html">This</a></li>  
        <li><a href="that.html">That</a></li>  
    </ul>  
</div>  
<div id="content">  
    <h1>Ra ra banjo banjo</h1>  
    <p>Welcome to the Ra ra banjo banjo page. Ra ra banjo banjo. Ra ra banjo banjo. Ra ra banjo banjo.</p>  
</div>
```

``` css
#navigation {  
    position: absolute;  
    top: 0;  
    left: 0;  
    width: 200px;  
}  
#content {  
    margin-left: 200px;  
}  
```

Three-column layout:

``` css
#navigation {  
    position: absolute;  
    top: 0;  
    left: 0;  
    width: 200px;  
}  
#navigation2 {  
    position: absolute;  
    top: 0;  
    right: 0;  
    width: 200px;  
}  
#content {  
    margin: 0 200px; /* setting top and bottom margin to 0 and right and left margin to 200px */  
}  
```

Floating a box will shift it to the right or left of a line, with surrounding
content flowing around it. Working with the same HTML, you could apply the following CSS:

``` css
#navigation {  
    float: left;  
    width: 200px;  
}  
#navigation2 {  
    float: right;  
    width: 200px;  
}  
#content {  
    margin: 0 200px;  
}  
```

Then, if you do not want the next box to wrap around the floating objects, 
you can apply the `clear` property:

``` css
clear: left /*will clear left floated boxes*/  
clear: right /*will clear right floated boxes*/  
clear: both /*will clear both left and right floated boxes.*/  
```

So if, for example, you wanted a footer in your page, you could add a chunk of HTML:

``` html
<div id="footer">  
    <p>Footer! Hoorah!</p>  
</div>
```

and then add the following CSS:

``` css
#footer {  
    clear: both;  
}  
```

When elements are positioned, they can overlap other elements. The `z-index` property
specifies the stack order of an element (which element should be placed in front of,
or behind, the others).  
An element can have a positive or negative stack order:

``` css
img {  
     position: absolute;  
     left: 0px;  
     top: 0px;  
     z-index: -1;  
}
```


## Rounded Corners

[[W3Schools](http://www.w3schools.com/css/css3_borders.asp)]

``` css
border-radius: 10px;  
border-radius: 3px 6px 9px 12px; /*border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius*/  
border-radius: 50px/100px;  /*Ellipse*/  
```


## Border Images

[[W3Schools](http://www.w3schools.com/css/css3_border_images.asp)]


##	Shadows

[[W3Schools](http://www.w3schools.com/css/css3_shadows.asp)]

``` css
box-shadow: 5px 5px 3px 1px #999;  /*horizontal offset, vertical offset, blur radius (optional), spread distance (opt.), color (opt.)*/  
```

You can also apply shadows to the inside of a box by adding `inset` to the list:

``` css
box-shadow: inset 0 0 7px 5px #ddd;  
```

You can apply shadows to the outline of text:

``` css
text-shadow: -2px 2px 2px #999; /*horizontal offset, vertical offset, blur radius (optional), color (opt.)*/  
```


## Universal, Child, and Adjacent Selectors

[[W3Schools](http://www.w3schools.com/css/css_combinators.asp)]

Using an `*` you can target everything.  
The following will set the margin and padding on everything in a page to zero
and everything within an element with the ID `contact` to be displayed as a block:

``` css
* {  
    margin: 0;  
    padding: 0;  
}  
#contact * {  
    display: block;  
}  
```

`>` can be used to specify something that is a child (not grandchild) of something else:

``` html
<ul id="genus_examples">  
    <li>Cats  
        <ul>  
            <li>Panthera</li>  
            <li>Felis</li>  
            <li>Neofelis</li>  
        </ul>  
    </li>  
    <li>Apes  
        <ul>  
            <li>Pongo</li>  
            <li>Pan</li>  
            <li>Homo</li>  
        </ul>  
    </li>  
</ul>
```

``` css
#genus_examples > li { border: 1px solid red }  
/*A red border would be drawn around “Cats” and “Apes” only.*/  
```

`+` is used to target an adjacent sibling of an element, essentially, something
immediately following something.

``` html
<h1>Clouded leopards</h1>  
<p>Clouded leopards are cats that belong to the genus Neofelis.</p>  
<p>There are two extant species: Neofelis nebulosa and Neofelis diardi.</p>  
```

``` css
h1 + p { font-weight: bold }  
/*Only the first paragraph, that following the heading, will be made bold.*/  
```

The general sibling selector selects all elements that are siblings of a specified element.  
The following example selects all `<p>` elements that are siblings of `<div>` elements:

``` css
div ~ p {  
    background-color: yellow;  
}  
```


## At-Rules: `@import`, `@media`, and `@font-face`

`@import` rule is used to bolt another stylesheet onto your existing one.  
`@import` rules must be placed at the top of a stylesheet.

``` css
@import url(morestyles.css);  
```

`@media` can be used to apply styles to a specific media.

``` css
@media print {  
    body {  
        font-size: 10pt;  
        font-family: times, serif;  
    }  
    #navigation {  
        display: none;  
    }  
}  
/*Values that follow “@media” can include screen, print, projection, handheld, and all, or a comma-separated list of more than one.*/  
/*See "Media Queries" below.*/  
```

`@font-face`:

``` css
@font-face {  
    font-family: "font of all knowledge";  
    src: local("font of all knowledge"), local(fontofallknowledge), url(fontofallknowledge.woff);  
    font-weight: 400;  
    font-style: normal;  
}  
```

"font of all knowledge" can then be used in a standard font rule, such as:

``` css
p { font-family: "font of all knowledge", arial, sans-serif; }  
```

To use Google Web Fonts all you need to do is link to one of their external CSS files,
which is nothing more than a `@font-face` rule.


## Attribute Selectors

[[W3Schools](http://www.w3schools.com/css/css_attribute_selectors.asp)]

Attribute selectors allow you to style an element’s box based on the presence of an HTML
attribute or of an attribute’s value.  
This basically says "shove a dotted line underneath all abbreviations with a title attribute":

``` css
abbr[title] { border-bottom: 1px dotted #ccc }  
```

This example will apply a width of 200 pixels only to input elements that are specified
as being text boxes:

``` css
input[type=text] { width: 200px; }  
```

You can also target more than one attribute at a time. This will only apply a gray border
to text inputs that are disabled:

``` css
input[type=text][disabled] { border: 1px solid #ccc }  
```

CSS 3 further allows you to match an attribute without being exact:

``` css
[attribute^=something] /*will match a the value of an attribute that begins with something.*/  
[attribute$=something] /*will match a the value of an attribute that ends with something.*/  
[attribute*=something] /*will match a the value of an attribute that contains something, be it in the beginning, middle, or end.*/  
```

So, as an example, you could style external links (eg. "http://www.htmldog.com")
differently to internal links (eg. "overhere.html") in the following way:

``` css
a[href^=http] {
    padding-right: 10px;  
    background: url(arrow.png) right no-repeat;  
}  
```


## Transitions

[[W3Schools](http://www.w3schools.com/css/css3_transitions.asp)]

When the link is hovered over, the color will gradually change rather than suddenly switch:

``` css
a:link {  
    transition: all .5s linear 0; /*transition-property, transition-duration, transition-timing-function, transition-delay*/  
    color: hsl(36,50%,50%);  
}  
a:hover {  
    color: hsl(36,100%,50%);  
}  
```

For a transition to take place, only `transition-duration` is required,
the rest defaulting to:

``` css
transition-property: all;  
transition-timing-function: ease;  
transition-delay: 0;
```

While `all` can be used in `transition-property` (or `transition`), you can tell a browser
only to transition certain properties, by simply plonking in the property name 
you want to change. So to change only color the previous example could actually include:

``` css
transition: color .5s ease 0  
```

If you want to target more than one property (without using “all”), you can offer up 
a comma-separated list with `transition-property`:

``` css
a:link {  
    transition: .5s;  
    transition-property: color, font-size;  
...  
```

Or you can offer up a slew of rules for transitioning each property like so:

``` css
a:link {  
    transition: color .5s, font-size 2s;  
...  
```


## Transformations

[[W3Schools 1](http://www.w3schools.com/css/css3_2dtransforms.asp)],
[[W3Schools 2](http://www.w3schools.com/css/css3_3dtransforms.asp)]

Manipulating a box over two dimensions, transform can be used to `rotate`, `skew`, 
`scale` and `translate` a box and its contents.

``` css
transform: rotate(-10deg);  
/*This will tip the box and everything in it, ten degrees anti-clockwise.*/  
  
transform: skew(20deg,10deg);  
/*This will tip over the x-axis by 20 degrees on the y-axis by 10 degrees.*/  
  
transform: scale(2);  
/*This will multiply the size by two.*/  
transform: scale(1,2);  
/*This will leave the horizontal as is and multiply the vertical by two.*/  
  
transform: translate(100px,200px);  
/*Similar to position: relative; left: 100px; top: 200px;, this will move a box 100 pixels to the right and 200 pixels down.*/  
  
/*If you want to target an individual axis, you can also use skewX, skewY, scaleX, scaleY, translateX, and translateY.*/  
```

Combining transformations:

``` css
transform: rotate(-10deg) scale(2);  
/*The order of the values is important - the latter will be executed before the former*/  
/*Alternatively, you could use the matrix function:*/  
transform: matrix(2,-0.35,0.35,2,0,0);  
```

If you are transforming a box, there is a further parameter involved:
the origin of the transformation.    
If you are rotating, for example, it will, by default, turn on the point that is the
center of the box.  
This will tell the box to transform (rotate, in the previous example) from the top left:

``` css
transform-origin: 0 0;  
```

Duplicate `transform` and `transform-origin` properties with:

``` css
-webkit-transform
-webkit-transform-origin
-ms-transform
-ms-transform-origin
```


## Animations

[[W3Schools](http://www.w3schools.com/css/css3_animations.asp)]


## Multiple Columns

[[W3Schools](http://www.w3schools.com/css/css3_multiple_columns.asp)]


## User Interface

[[W3Schools 1](http://www.w3schools.com/css/css3_user_interface.asp)],
[[W3Schools 2](http://www.w3schools.com/css/css3_box-sizing.asp)]


## Flexible Box

[[W3Schools 1](http://www.w3schools.com/css/css_rwd_viewport.asp)],
[[W3Schools 2](http://www.w3schools.com/w3css/default.asp)],
[[W3Schools 3](http://www.w3schools.com/css/css3_flexbox.asp)],
[[CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)]

Use of flexbox ensures that elements behave predictably when the page layout 
must accommodate different screen sizes and different display devices.  
For many applications, the flexible box model provides an improvement over
the block model in that it does not use floats, nor do the flex container's
margins collapse with the margins of its contents.

``` css
.container {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
```

Change order of elements using flexbox:

``` css
@media screen and (min-width: 700px) {
	.blue { order: 4; }
	.green { order: 2; }
	.orange { order: 3; }
	.red { order: 1; }
}
```

The `box-sizing` property is used to tell the browser what the sizing properties (width and height)
should include. Should they include the `border-box`? Or just the `content-box`
(which is the default value of the width and height properties)?

``` css
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: content-box|border-box|initial|inherit;
}
```

Add this to main css:

``` css
img, embed, object, video {
	max-width: 100%;
}
```

Start your design with the smallest form factor (phone). Once that one's complete, move up to the next.


## Media Queries

[[W3Schools](http://www.w3schools.com/css/css3_mediaqueries.asp)],
[[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)]

If we want to apply some CSS solely to screen-based media:

``` css
1.	@media screen {  
2.	    body { font: 12px arial, sans-serif }  
3.	    #nav { display: block }  
4.	}  
```

Not only can screen-based media be targeted, screen-based media of a certain size can be targeted as well. You can apply more than one @media rule, so you could have a number of different designs that are browser size dependent:

``` css
1.	@media screen and (max-width: 1000px) {  
2.	    #content { width: 100% }  
3.	}  
4.	  
5.	@media screen and (max-width: 800px) {  
6.	    #nav { float: none }  
7.	}  
8.	@media screen and (max-width: 600px) {  
9.	    #content aside {  
10.	        float: none;  
11.	        display: block;  
12.	    }  
13.	}  
```

Orientation-specific CSS:

``` css
1.	@media screen and (orientation: landscape) {  
2.	    #nav { float: left }  
3.	}  
4.	  
5.	@media screen and (orientation: portrait) {  
6.	    #nav { float: none }  
7.	}  
```

Using media attribute on a link style sheet. index.html:

``` html
<link rel="stylesheet" media="screen and (min-width:500px)" href="over500.css">
```

over500.css:

``` css
body {
	background-color: blue;
}
```

Embedding media query with an `@media` tag:

``` css
@media screen and (min-width:500px) and (max-width: 800px) {
	body { background-color: green; }
}
```

You can apply more than one `@media` rule, so you could have a number of different designs that are browser size dependent:

``` css
@media screen and (max-width: 1000px) {
	#content { width: 100% }
}

@media screen and (max-width: 800px) {
	#nav { float: none }
}

@media screen and (max-width: 600px) {
	#content aside {
		float: none;
		display: block;
	}
}
```

Orientation-specific CSS:

``` css
@media screen and (orientation: landscape) {
	#nav { float: left }
}

@media screen and (orientation: portrait) {
	#nav { float: none }
}
```

Using `min-device-width` and `max-device-width` is strongly discouraged.


## Common Responsive Patterns

### Column Drop

``` html
<div class="container">
	<div class="box blue"></div>
	<div class="box red"></div>
	<div class="box green"></div>
</div>
```

``` css
.container {
	display: flex;
	flex-wrap: wrap;
}

.box {
	width: 100%;
}

@media screen and (min-width: 450px) {
	.blue {
		width: 25%;
	}
	.red {
		width: 75%;
	}
}

@media screen and (min-width: 550px) {
	.blue, .green {
		width: 25%;
	}
	.red {
		width: 50%;
	}
}
```

### Mostly Fluid

``` html
<div class="container">
	<div class="box dark_blue"></div>
	<div class="box light_blue"></div>
	<div class="box green"></div>
	<div class="box red"></div>
	<div class="box orange"></div>
</div>
```

``` css
.container {
	display: flex;
	flex-wrap: wrap;
}

.box {
	width: 100%;
}

@media screen and (min-width: 450px) {
	.light_blue, .greeen {
		width: 50%;
	}
}

@media screen and (min-width: 550px) {
	.dark_blue, .light_blue {
		width: 50%;
	}
	.green, .red, .orange {
		width: 33.333333%;
	}
}

@media screen and (min-width: 700px) {
	.container {
		width: 700px;
		margin-left: auto;
		margin-right: auto;
	}
}
```

### Layout Shifter

``` html
<div class="container">
	<div class="box dark_blue"></div>
	<div class="container" id="container2">
		<div class="box light_blue"></div>
		<div class="box green"></div>
	</div>
	<div class="box red"></div>
</div>
```

``` css
.container {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}

.box {
	width: 100%;
}

@media screen and (min-width: 500px) {
	.dark_blue {
		width: 500px;
	}
	#container2 {
		width: 50%;
	}
}

@media screen and (min-width: 600px) {
	.dark_blue {
		width: 25%;
		order: 1;
	}
	#container2 {
		width: 50%;
	}
	.red {
		width: 25%;
		order: -1;
	}
}
```

### Off Canvas

Places less frequently used content (navigation or app menus) off screen, only showing them 
when screen is large enough. On smaller screen off canvas content is typically shown when user taps on the hamburger icon.

``` html
<nav id="drawer" class="dark_blue"></nav>
<main class="light_blue"></main>
```

``` css
html, body, main {
	height: 100%;
	width: 100%;
}

nav {
	width: 300px;
	height: 100%;
	position: absolute;
	transform: translate(-300px, 0);
	transition: transform 0.3s ease;
}

@media screen and (min-width: 600px) {
	nav {
		position: relative;
		transform: translate(0, 0);
	}
	body {
		display: flex;
		flex-flow: row nowrap;
	}
	main {
		width: auto;
		flex-grow: 1;
	}
}
```

``` javascript
menu.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});
```


## Responsive Tables

[[CSS-Tricks](https://css-tricks.com/responsive-data-table-roundup/)]

### Hidden columns

Use it with caution. If possible, use abbreviated data instead of hiding it completely.

``` html
<tr>
	<td>
		<span class="shortName">TOR</span>
		<span class="longName">Toronto Blue Jays</span>
	</td>
	<td class="inning">0</td>
	<td class="inning">0</td>
	<td class="inning">0</td>
	<td class="inning">4</td>
	<td class="inning">0</td>
	<td class="inning">1</td>
	<td class="inning">0</td>
	<td class="inning">0</td>
	<td class="inning">0</td>
	<td class="final">5</td>
</tr>
```

``` css
body {
	margin: 1em;
}

.longName {
	display: none;
}

.inning {
	display: none;
}
```

### No more tables

Table is collapsed and resembles a long list, as opposed to a table data.

``` html
<table>
	<thead>...</thead>
	<tbody>
		<tr>
			<td data-th="Team">...</td>
			<td data-th="1st">...</td>
			<td data-th="2nd">...</td>
			<td data-th="3rd">...</td>
			<td data-th="4th">...</td>
			<td data-th="5th">...</td>
			<td data-th="6th">...</td>
			<td data-th="7th">...</td>
			<td data-th="8th">...</td>
			<td data-th="9th">...</td>
			<td data-th="Final">...</td>
		</tr>
	</tbody>
</table>
```

``` css
@media screen and (max-width: 500px) {
	table, thead, tbody, th, td, tr {
		display: block;
	}
	/*Hide table header*/
	thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	/*Make room for header*/
	td {
		position: relative;
		padding-left: 50%;
	}
	/*Add row labels*/
	td:before {
		position: absolute;
		left: 6px;
		/*Label for row*/
		content: attr(data-th);
		font-weight: bold;
	}	
}
```

### Contained tables

Make table scrollable.

``` html
<div class="contained_table">
	<table>...</table>
</div>
```

``` css
div.contained_table {
	width: 100%;
	overflow-x: auto;
}
```


## Responsive Images

Use jpeg (or webP - file size is smaller) for photos and svg (if you can) or png
for everything else.

``` css
img {
	max-width: 426px;
	margin-right: 10px;
	width: calc((100% - 10px) / 2);
}

img::last-of-type {
	margin-right: 0;
}
```

Software:

- Use [ImageMagick](http://www.graphicsmagick.org) to automate the process of creating multiple
versions of the same image with different sizes or formats.
- You can incorporate ImageMagick in your build process via a Grunt task.
- [Trimage](http://trimage.org)
- [ImageAlpha](https://github.com/pornel/ImageAlpha) for png.


[[CSS Techiques](https://www.smashingmagazine.com/2013/04/build-fast-loading-mobile-website)]

Use Unicode instead of images if possible:  
[[Unicode character table](http://unicode-table.com/en/sets/)]

Icon Fonts:  
[[1](http://zocial.smcllns.com/)],
[[2](http://weloveiconfonts.com)],
[[3](https://css-tricks.com/examples/IconFont)]

Icon font characters are added using the CSS before selector:

``` html
<style>
	@import url(http://weloveiconfonts.com/api/?family=zocial);
	[class*="zocial-"]:before {
	font-family: 'zocial', sans-serif;
	
}
</style>

<span class="zocial-dribbble"></span> 
<ul>
  <li class="zocial-twitter"></li>
  <li class="zocial-flickr"></li>
  <li class="zocial-lastfm"></li>
  <li class="zocial-reddit"></li>
</ul>
```

Data URIs and SVGs can be inlined in CSS or HTML to reduce HTTP requests:  
[[1](http://petercollingridge.appspot.com/svg-optimiser)],
[[2](http://www.creativebloq.com/design/examples-svg-7112785)],
[[3](http://codepen.io/chrisgannon)]

`srcset`:  
[[1](http://ericportis.com/posts/2014/srcset-sizes)],
[[2](https://www.html5rocks.com/en/mobile/high-dpi)],
[[3](http://pixensity.com/list)]

``` html
<img src="image_1x.jpg" srcset="image_1x.jpg 1x image_2x.jpg 2x">
```

`1x` and `2x` is called a pixel density descriptor. You can check device pixel
ratio in devtools console:  
`> window.devicePixelRatio`

The `w` unit tells the browser the width of each image. Thereby enabling the browser 
to choose the right image to retreive depending on the screen pixel density and 
the viewport size.

``` html
<img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" alt="Wallaby">
```

The `sizes` attribute gives the browser information about the display size of an image element – it does not actually cause the image to be resized. That's done in CSS!  
This `sizes` attribute is telling the browser, this wallaby will always be displayed at 50% viewport width:

``` html
<img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" 
sizes="50vw" alt="Wallaby">
```

You can use `source` + `srcset` to provide alternatives for unsupported browser:

``` html
<picture>
	<source srcset="kittens.webp" type="image/webp">
	<source srcset="kittens.jpeg" type="image/jpeg">
	<img src="kittens.jpg" alt="Two grey kittens">
</picture>
```

Use different images for different viewport sizes:

``` html
<picture>
  <source
	media="(min-width: 1000px)"
	srcset="kookaburra_large_1x.jpg 1x, kookaburra_large_2x.jpg 2x">
  <source
	media="(min-width: 500px)"
	srcset="kookaburra_medium_1x.jpg 1x, kookaburra_medium_2x.jpg 2x">
  <img src="kookaburra_small.jpg"
	alt="The kookaburra: a terrestrial tree kingfisher native to Australia and New Guinea">
</picture>
```


## Other

Override all other styles by using `important`:

``` css
color: pink !important;
```

Placeholder image, 200x300:  
`http://placehold.it/200x300`  
`http://placekitten.com/200/300`

[normalize.css](https://necolas.github.io/normalize.css/) makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

Ideal measure for text: 45-90 characters per line. ~65 cpl for the web.
