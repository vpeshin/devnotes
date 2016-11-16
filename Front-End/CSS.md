/*List of all properties*/
https://www.w3.org/community/webed/wiki/CSS/Properties

-------------------------------------------------------------------------------

        Applying CSS

/*in-line styles should be avoided wherever possible.*/
<p style="color: red">text</p>

 /*Internal styles are used for the whole page. Should be avoided.*/
<head>
    <title>CSS Example</title>
    <style>
        p {
            color: red;
        }
    </style>
...

/*External style.*/
<head>
    <title>CSS Example</title>
    <link rel="stylesheet" href="style.css">
...
-------------------------------------------------------------------------------

        Selectors, Properties, and Values

/*Whereas HTML has tags/attributes/values, CSS has selectors/properties/values.*/

/*Lengths and Percentages.*/
px, em, pt, %
/*When a value is zero, you do not need to state a unit (border: 0).*/
-------------------------------------------------------------------------------

        Colors

/*Colors can be applied by using color and background-color.*/

/*The values of red:*/
red     /*Don't use color names. Except black and white*/
rgb(255,0,0)
rgba(255,0,0,1)
rgb(100%,0%,0%)
#ff0000
#f00
hsl(0, 100%, 50%)
hsla(1, 100%, 50%, 1)
-------------------------------------------------------------------------------

        Text

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

font: italic bold 12px/2 "Times New Roman", times, serif  /*combines font-style, font-weight, font-size, line-height, and font-family*/
-------------------------------------------------------------------------------

        Margins, Padding, Borders

/*A margin is the space outside something, whereas padding is the space inside something.*/
margin: 1px 5px 10px 20px  /*margin-top, margin-right, margin-bottom, margin-left*/

padding: 1em 10em;  /*the first value will be the top and bottom and the second value will be the right and left*/

border: 1px red solid  /*border-width, border-color, border-style*/

border-style: solid / dotted / dashed / double / groove / ridge / inset / outset
border-width: 3px
border-left-width: 10px
border-right-width: 10px
border-color: red
-------------------------------------------------------------------------------

        Class and ID Selectors

/*A class selector is a name preceded by “.” and an ID selector is a name preceded by “#”.*/

/*CSS:*/
#top {
    background-color: #ccc;
    padding: 20px
}
.intro {
    color: red;
    font-weight: bold;
}
/*HTML:*/
<div id="top">
<h1>Chocolate curry</h1>
<p class="intro">This is my recipe for making curry purely with chocolate</p>
<p class="intro">Mmm mm mmmmm</p>
</div>

/*An ID can be used to identify one element, whereas a class can be used to identify more than one.*/

/*You can also apply a selector to a specific HTML element by simply stating the HTML selector first, so:*/
p.jam {
    color: red;
}
/*will only be applied to paragraph elements that have the class “jam”.*/
-------------------------------------------------------------------------------

        Grouping and Nesting

/*You can give the same properties to a number of selectors without having to repeat them.*/
h2, .thisOtherClass, .yetAnotherClass {
    color: red;
}

/*You can specify properties to selectors within other selectors. CSS:*/
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
/*This removes the need for classes or IDs on the p and h1 tags in HTML:*/
<div id="top">
    <h1>Chocolate curry</h1>
    <p>This is my recipe for making curry purely with chocolate</p>
    <p>Mmm mm mmmmm</p>
</div>
-------------------------------------------------------------------------------

        Pseudo Classes and Pseudo Elements

/*Pseudo classes are bolted on to selectors to specify a state or relation to the selector.*/
a:visited {
    color: purple;
}

link  /*unvisited link*/
visited  /*visited link*/
active  /*when something activated by the user, such as when a link is clicked on*/
hover  /*when something is passed over by an input from the user, such as when a cursor moves over a link*/
focus  /*when something gains focus, that is when it is selected by, or is ready for keyboard input*/
first-child  /*will target something only if it is the very first descendant of an element (for example, first paragraph*/
nth-child(n)  /*matches every element that is the nth child, regardless of type, of its parent. Note the difference:
                    p:nth-child(3)
                    p :nth-child(3) */

/*In CSS3 also: last-child, target, first-of-type, and more.*/

/*Pseudo elements should include two colons (p::first-letter).*/
first-letter
first-line
before  /*see below*/
after  /*see below*/


/*The before and after pseudo elements are used in conjunction with the content property:*/
blockquote::before {
    content: open-quote;
}
/*The value of the content property can be open-quote, close-quote, any string enclosed in quotation marks, or any image, using url(imagename).*/

/*The content property effectively creates another box to play with so you can also add styles to the “presentational content”:*/
li::before {
    content: "POW! ";
    background: red;
    color: #fc0;
}
-------------------------------------------------------------------------------

        Backgrounds

/*Background images can be used in most HTML elements - not just for the whole page (body).*/

background: white url(http://www.htmldog.com/images/bg.gif) no-repeat top right
/*This amalgamates these properties:*/
background-color
background-image
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
-------------------------------------------------------------------------------

        Specificity

/*If the selectors are the same then the last one will always take precedence.*/

/*Basically, you give every:
ID selector (“#whatever”) a value of 100
class selector (“.whatever”) a value of 10
HTML selector (“whatever”) a value of 1.
Then you add them all up and hey presto, you have the specificity value.*/

/*p has a specificity of 1 (1 HTML selector)
div p has a specificity of 2 (2 HTML selectors, 1+1)
.tree has a specificity of 10 (1 class selector)
div p.tree has a specificity of 12 (2 HTML selectors + a class selector, 1+1+10)
#baobab has a specificity of 100 (1 id selector)
body #content .alternative p has a specificity of 112 (HTML selector + id selector + class selector + HTML selector, 1+100+10+1)*/
-------------------------------------------------------------------------------

        Display

display: inline / block / inline-block / none

/*Inline.*/
li { display: inline }  /*all list items in a list will appear next to each other in one continuous line*/ 

/*block makes a box standalone, fitting the entire width of its containing box, with an effective line break before and after it.*/
#nav a {
    display: block;
    padding: 20px 10px;
}
/*This will make all links in “nav” large clickable blocks*/

/*display: inline-block will keep a box inline but lend the greater formatting flexibility of block boxes,
allowing margin to the right and left of the box, for example.*/

/*display: none doesn’t display a box at all.*/
#navigation, #related_links { display: none }
/*This code could be used in a print stylesheet to “turn off” the display of elements such as navigation */
-------------------------------------------------------------------------------

        Page Layout

    /*Positioning.*/
position: static / relative / absolute / fixed
/*- static is the default value and renders a box in the normal order of things, as they appear in the HTML.
- relative is much like static but the box can be offset from its original position with the properties top, right, bottom and left.
- absolute pulls a box out of the normal flow of the HTML. The absolute box can be placed anywhere on the page using top, right, bottom and left.
- fixed behaves like absolute, but it will absolutely position a box in reference to the browser window as opposed to the web page, so fixed boxes
should stay exactly where they are on the screen even when the page is scrolled.*/

/*A traditional two-column layout with absolute positioning.*/
/*HTML:*/
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
/*CSS:*/
#navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
}
#content {
    margin-left: 200px;
}

/*Three-column layout:*/
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

    /*Floating*/
/*Floating a box will shift it to the right or left of a line, with surrounding content flowing around it.*/
float: left / right

/*Working with the same HTML, you could apply the following CSS:*/
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
/*Then, if you do not want the next box to wrap around the floating objects, you can apply the clear property:*/
clear: left /*will clear left floated boxes*/
clear: right /*will clear right floated boxes*/
clear: both /*will clear both left and right floated boxes.*/

/*So if, for example, you wanted a footer in your page, you could add a chunk of HTML:*/
<div id="footer">
    <p>Footer! Hoorah!</p>
</div>
/*and then add the following CSS:*/
#footer {
    clear: both;
}
-------------------------------------------------------------------------------

        Rounded Corners

border-radius: 10px;
border-radius: 3px 6px 9px 12px; /*border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius*/
border-radius: 50px/100px;  /*Ellipse*/
-------------------------------------------------------------------------------

        Shadows

box-shadow: 5px 5px 3px 1px #999;  /*horizontal offset, vertical offset, blur radius (optional), spread distance (opt.), color (opt.)*/

/*You can also apply shadows to the inside of a box by adding “inset” to the list:*/
box-shadow: inset 0 0 7px 5px #ddd;

/*You can apply shadows to the outline of text:*/
text-shadow: -2px 2px 2px #999; /*horizontal offset, vertical offset, blur radius (optional), color (opt.)*/
-------------------------------------------------------------------------------

        Universal, Child, and Adjacent Selectors

/*Using an “*” you can target everything. 
The following will set the margin and padding on everything in a page to zero and everything within
an element with the ID “contact” to be displayed as a block:*/
* {
    margin: 0;
    padding: 0;
}
#contact * {
    display: block;
}

/*“>” can be used to specify something that is a child (an not grandchild) of something else.*/
/*HTML:*/
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
/*CSS:*/
#genus_examples > li { border: 1px solid red }
/*A red border would be drawn around “Cats” and “Apes” only.*/

/*“+” is used to target an adjacent sibling of an element, essentially, something immediately following something.*/
/*HTML:*/
<h1>Clouded leopards</h1>
<p>Clouded leopards are cats that belong to the genus Neofelis.</p>
<p>There are two extant species: Neofelis nebulosa and Neofelis diardi.</p>
/*CSS:*/
h1 + p { font-weight: bold }
/*Only the first paragraph, that following the heading, will be made bold.*/
-------------------------------------------------------------------------------

        At-Rules: @import, @media, and @font-face

/*@import rule is used to bolt another stylesheet onto your existing one.*/
/*@import rules must be placed at the top of a stylesheet*/
@import url(morestyles.css);

/*@media can be used to apply styles to a specific media.*/
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

@font-face {
    font-family: "font of all knowledge";
    src: local("font of all knowledge"), local(fontofallknowledge), url(fontofallknowledge.woff);
    font-weight: 400;
    font-style: normal;
}
/*“font of all knowledge” can then be used in a standard font rule, such as:*/
p { font-family: "font of all knowledge", arial, sans-serif; }

/*Google Web Fonts is nothing more than a @font-face rule.*/
https://fonts.google.com/
-------------------------------------------------------------------------------

        Attribute Selectors

/*Attribute selectors allow you to style an element’s box based on the presence of an HTML attribute or of an attribute’s value.*/

abbr[title] { border-bottom: 1px dotted #ccc }
/*This basically says “shove a dotted line underneath all abbreviations with a title attribute”.*/

input[type=text] { width: 200px; }
/*This example will apply a width of 200 pixels only to input elements that are specified as being text boxes.*/

/*You can also target more than one attribute at a time in a way similar to the following:*/
input[type=text][disabled] { border: 1px solid #ccc }
/*This will only apply a gray border to text inputs that are disabled.*/

/*CSS 3 further allows you to match an attribute without being exact:*/
[attribute^=something] /*will match a the value of an attribute that begins with something.*/
[attribute$=something] /*will match a the value of an attribute that ends with something.*/
[attribute*=something] /*will match a the value of an attribute that contains something, be it in the beginning, middle, or end.*/
/*So, as an example, you could style external links (eg. “http://www.htmldog.com”) differently to internal links (eg. “overhere.html”) in the following way:*/
a[href^=http] {
    padding-right: 10px;
    background: url(arrow.png) right no-repeat;
}
-------------------------------------------------------------------------------

        CSS Transitions

a:link {
    transition: all .5s linear 0; /*transition-property, transition-duration, transition-timing-function (ease/linear. ease produces a gradual acceleration
                                   at the start of the transition and a gradual deceleration at the end. linear maintains a constant speed throughout), transition-delay*/
    color: hsl(36,50%,50%);
}
a:hover {
    color: hsl(36,100%,50%);
}
/*When the link is hovered over, the color will gradually change rather than suddenly switch.*/

/*For a transition to take place, only transition-duration is required, the rest defaulting to:
transition-property: all;
transition-timing-function: ease;
transition-delay: 0;*/

/*While “all” can be used in transition-property (or transition), you can tell a browser only to transition certain properties,
by simply plonking in the property name you want to change. So the previous example could actually include*/
transition: color .5s ease 0
/*given only the color changes.*/

/*If you want to target more than one property (without using “all”), you can offer up a comma-separated list with transition-property:*/
a:link {
    transition: .5s;
    transition-property: color, font-size;
...

/*Or you can offer up a slew of rules for transitioning each property like so:*/
a:link {
    transition: color .5s, font-size 2s;
...
-------------------------------------------------------------------------------

        Transformations

/*Manipulating a box over two dimensions, transform can be used to rotate, skew, scale and translate a box and its contents.*/

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

/*Combining transformations:*/
transform: rotate(-10deg) scale(2);
/*The order of the values is important - the latter will be executed before the former*/
/*Alternatively, you could use the matrix function:*/
transform: matrix(2,-0.35,0.35,2,0,0);

/*If you are transforming a box, there is a further parameter involved: the origin of the transformation.
If you are rotating, for example, it will, by default, turn on the point that is the center of the box.
This will tell the box to transform (rotate, in the previous example) from the top left:*/
transform-origin: 0 0;

/*Duplicate transform and transform-origin properties with:
-webkit-transform
-webkit-transform-origin
-ms-transform
-ms-transform-origin*/
-------------------------------------------------------------------------------

        Media Queries

https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

/*1. Using media attribute on a link style sheet*/

/*index.html:*/
<link rel="stylesheet" media="screen and (min-width:500px)" href="over500.css">

/*over500.css:*/
body {
    background-color: blue;
}

/*2. Embedding media query with an @media tag*/
@media screen and (min-width:500px) and (max-width: 800px) {
    body { background-color: green; }
}

/*You can apply more than one @media rule, so you could have a number of different designs that are browser size dependent:*/
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

/*Orientation-specific CSS.*/
@media screen and (orientation: landscape) {
    #nav { float: left }
}

@media screen and (orientation: portrait) {
    #nav { float: none }
}

/*Using min-device-width and max-device-width is strongly discouraged*/
-------------------------------------------------------------------------------

        Responsive Web Design (without bootstrap)

/*The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and 
distribute space among items in a container, even when their size is unknown and/or dynamic.*/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

/*Change order of elements using flexbox:*/
@media screen and (min-width: 700px) {
    .blue { order: 4; }
    .green { order: 2; }
    .orange { order: 3; }
    .red { order: 1; }
}

/*The box-sizing property is used to tell the browser what the sizing properties (width and height)
should include. Should they include the border-box? Or just the content-box
(which is the default value of the width and height properties)?*/
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: content-box|border-box|initial|inherit;
}

/*Add this to main css:*/
img, embed, object, video {
    max-width: 100%;
}

/*Start your design with the smallest form factor (phone). Once that one's complete, move up to the next.*/
-------------------------------------------------------------------------------

        Common Responsive Patterns

/*1. Column Drop*/

<div class="container">
    <div class="box blue"></div>
    <div class="box red"></div>
    <div class="box green"></div>
</div>

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

/*2. Mostly Fluid*/

<div class="container">
    <div class="box dark_blue"></div>
    <div class="box light_blue"></div>
    <div class="box green"></div>
    <div class="box red"></div>
    <div class="box orange"></div>
</div>

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

/*3. Layout Shifter*/

<div class="container">
    <div class="box dark_blue"></div>
    <div class="container" id="container2">
        <div class="box light_blue"></div>
        <div class="box green"></div>
    </div>
    <div class="box red"></div>
</div>

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

/*4. Off Canvas. Places less frequently used content (navigation or app menus) off screen, only showing them 
when screen is large enough. On smaller screen off canvas content is typically shown when user taps on the hamburger icon.*/
<nav id="drawer" class="dark_blue"></nav>
<main class="light_blue"></main>

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
/*js:*/
menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});

-------------------------------------------------------------------------------

		Responsive tables

https://css-tricks.com/responsive-data-table-roundup/

/*1. Hidden columns. Use it with caution. If possible, use abbreviated data instead of hiding
it completely.*/
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

body {
	margin: 1em;
}
.longName {
	display: none;
}
.inning {
	display: none;
}

/*2. No more tables. Table is collapsed and resembles a long list, as opposed to a table data.*/
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

/*3. Contained tables. Make table scrollable.*/
<div class="contained_table">
	<table>...</table>
</div>

div.contained_table {
	width: 100%;
	overflow-x: auto;
}
-------------------------------------------------------------------------------

        Responsive Images

/*Use jpeg (or webP - file size is smaller) for photos and svg (if you can) or png
for everything else.*/

img {
    max-width: 426px;
    margin-right: 10px;
    width: calc((100% - 10px) / 2);
}
img::last-of-type {
    margin-right: 0;
}

/* Software:
- Use ImageMagick to automate the process of creating multiple versions of the
same image with different sizes or formats.
You can incorporate ImageMagick in your build process via a Grunt task.
GUI version: http://www.graphicsmagick.org/
- http://trimage.org/
- ImageAlpha for png. https://github.com/pornel/ImageAlpha
*/

/*CSS Techiques*/
https://www.smashingmagazine.com/2013/04/build-fast-loading-mobile-website/

/*Use Unicode instead of images if possible*/
http://unicode-table.com/en/sets/

/*Icon Fonts*/
http://zocial.smcllns.com/
http://weloveiconfonts.com/
https://css-tricks.com/examples/IconFont/

/*Icon font characters are added using the CSS before selector*/
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

/*Data URIs and SVGs can be inlined in CSS or HTML to reduce HTTP requests*/
http://petercollingridge.appspot.com/svg-optimiser
http://www.creativebloq.com/design/examples-svg-7112785
http://codepen.io/chrisgannon/

/*srcset*/
<img src="image_1x.jpg" srcset="image_1x.jpg 1x image_2x.jpg 2x">

/*1x an 2x is called a pixel density descriptor. You can check device pixel
ratio in devtools console:*/
> window.devicePixelRatio

/*The W unit tells the browser the width of each image. Thereby enabling
the browser to choose the right image to retreive depending on the screen pixel
density and the viewport size.*/
<img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" alt="Wallaby">

/*The sizes attribute gives the browser information about the display size of an image element – it does not actually cause the image to be resized. That's done in CSS!
This sizes attribute is telling the browser, this wallaby will always be displayed at 50% viewport width:*/
<img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" 
sizes="50vw" alt="Wallaby">

/*You can use source + srcset to provide alternatives for unsupported browser*/
<picture>
    <source srcset="kittens.webp" type="image/webp">
    <source srcset="kittens.jpeg" type="image/jpeg">
    <img src="kittens.jpg" alt="Two grey kittens">
</picture>

/*Use different images for different viewport sizes*/
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

http://ericportis.com/posts/2014/srcset-sizes/
https://www.html5rocks.com/en/mobile/high-dpi/
http://pixensity.com/list/
-------------------------------------------------------------------------------

    	Other

/* Override all other styles by using important */
    color: pink !important;

/*Placeholder image, 200x300*/
http://placehold.it/200x300
http://placekitten.com/200/300

/*Normalize.css makes browsers render all elements more consistently and in line with modern standards.
It precisely targets only the styles that need normalizing.*/
https://necolas.github.io/normalize.css/

/*Ideal measure for text: 45-90 characters per line. ~65 cpl for the web.*/
