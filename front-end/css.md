1.	Colors
http://www.w3schools.com/css/css3_colors.asp
Colors can be applied by using color (for text) and background-color (for anything).
1.	/*The values of red:*/  
2.	red     /*Don't use color names. Except black and white*/  
3.	rgb(255,0,0)  
4.	rgba(255,0,0,1)  
5.	rgb(100%,0%,0%)  
6.	#ff0000  
7.	#f00  
8.	hsl(0, 100%, 50%)  
9.	hsla(1, 100%, 50%, 1)
2.	Text
http://www.w3schools.com/css/css_text.asp
http://www.w3schools.com/css/css_font.asp
http://www.w3schools.com/css/css3_text_effects.asp
http://www.w3schools.com/css/css3_fonts.asp
1.	font-family: arial, helvetica, serif  
2.	/*If the name of a font is more than one word, it should be put in quotation marks.*/  
3.	  
4.	font-size: 2em  
5.	font-weight: bold / normal  
6.	font-style: italic / normal  
7.	  
8.	text-decoration: underline / overline / line-through / none  
9.	/*underline should only be used for links.*/  
10.	  
11.	text-transform: capitalize / uppercase / lowercase / none  
12.	  
13.	letter-spacing: 0.5em / normal  
14.	word-spacing: 2em / normal  
15.	line-height: 1.5 / normal  
16.	text-align: left / right / center / justify  
17.	text-indent: 50px
18.	  
19.	font: italic bold 12px/2 "Times New Roman", times, serif  /*combines font-style, font-weight, font-size, line-height, and font-family*/
CSS3 contains several new text features: text-overflow, word-wrap, word-break
3.	Margins, Padding, Borders
http://www.w3schools.com/css/css_boxmodel.asp
http://www.w3schools.com/css/css_border.asp
http://www.w3schools.com/css/css_outline.asp
http://www.w3schools.com/css/css_margin.asp
http://www.w3schools.com/css/css_padding.asp
A margin is the space outside something, whereas padding is the space inside something.
1.	margin: 1px 5px 10px 20px  /*margin-top, margin-right, margin-bottom, margin-left*/  
2.	  
3.	padding: 1em 10em;  /*the first value will be the top and bottom and the second value will be the right and left*/  
4.	  
5.	border: 1px red solid  /*border-width, border-color, border-style*/  
6.	  
7.	border-style: solid / dotted / dashed / double / groove / ridge / inset / outset  
8.	border-width: 3px  
9.	border-left-width: 10px  
10.	border-right-width: 10px  
11.	border-color: red  
 
When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.
Total element width = width + left padding + right padding + left border + right border + left margin + right margin.
1.	div {  
2.	    width: 320px;  
3.	     padding: 10px;  
4.	     border: 5px solid gray;  
5.	     margin: 0;   
6.	}  
7.	/* 
8.	320px (width) 
9.	 + 20px (left + right padding) 
10.	 + 10px (left + right border) 
11.	 + 0px (left + right margin) 
12.	 = 350px 
13.	*/  
An outline is a line that is drawn around elements (outside the borders) to make the element "stand out".
 
Setting the max-width of a block-level element will prevent it from stretching out to the edges of its container. Then, you can set the margins to auto, to horizontally center the element within its container. The element will take up the specified width, and the remaining space will be split equally between the two margins:
1.	div.ex1 {  
2.	    max-width: 500px;  
3.	    margin: auto;  
4.	    border: 3px solid #8AC007;  
5.	}  
4.	Class and ID Selectors
A class selector is a name preceded by “.” and an ID selector is a name preceded by “#”.
1.	/*CSS:*/  
2.	#top {  
3.	    background-color: #ccc;  
4.	    padding: 20px  
5.	}  
6.	.intro {  
7.	    color: red;  
8.	    font-weight: bold;  
9.	}  
10.	/*HTML:*/  
11.	<div id="top">  
12.	<h1>Chocolate curry</h1>  
13.	<p class="intro">This is my recipe for making curry purely with chocolate</p>  
14.	<p class="intro">Mmm mm mmmmm</p>  
15.	</div>  
An ID can be used to identify one element, whereas a class can be used to identify more than one.
You can also apply a selector to a specific HTML element by simply stating the HTML selector first, so:
1.	p.jam {  
2.	    color: red;  
3.	}  
will only be applied to paragraph elements that have the class “jam”.
5.	Grouping and Nesting
You can give the same properties to a number of selectors without having to repeat them.
1.	h2, .thisOtherClass, .yetAnotherClass {  
2.	    color: red;  
3.	}  
You can specify properties to selectors within other selectors. CSS:
1.	#top {  
2.	    background-color: #ccc;  
3.	    padding: 1em  
4.	}  
5.	#top h1 {  
6.	    color: #ff0;  
7.	}  
8.	#top p {  
9.	    color: red;  
10.	    font-weight: bold;  
11.	}  
This removes the need for classes or IDs on the p and h1 tags in HTML:
1.	<div id="top">  
2.	    <h1>Chocolate curry</h1>  
3.	    <p>This is my recipe for making curry purely with chocolate</p>  
4.	    <p>Mmm mm mmmmm</p>  
5.	</div> 
6.	Pseudo Classes and Pseudo Elements
http://www.w3schools.com/css/css_pseudo_classes.asp
http://www.w3schools.com/css/css_pseudo_elements.asp
Pseudo classes are bolted on to selectors to specify a state or relation to the selector.
1.	a:visited {  
2.	    color: purple;  
3.	}  
4.	  
5.	link  /*unvisited link*/  
6.	visited  /*visited link*/  
7.	active  /*when something activated by the user, such as when a link is clicked on*/  
8.	hover  /*when something is passed over by an input from the user, such as when a cursor moves over a link*/  
9.	focus  /*when something gains focus, that is when it is selected by, or is ready for keyboard input*/  
10.	first-child  /*will target something only if it is the very first descendant of an element (for example, first paragraph*/  
11.	nth-child(n)  /*matches every element that is the nth child, regardless of type, of its parent.*/  
12.	last-child  
13.	target  
14.	first-of-type  
15.	/*Note the difference: 
16.	                    p:nth-child(3) 
17.	                    p :nth-child(3) */ 
Pseudo elements should include two colons (p::first-letter).
1.	first-letter  
2.	first-line  
3.	before  /*see below*/  
4.	after  /*see below*/  
The before and after pseudo elements are used in conjunction with the content property. The value of the content property can be open-quote, close-quote, any string enclosed in quotation marks, or any image, using url(imagename).
1.	blockquote::before {  
2.	    content: open-quote;  
3.	}  
The content property effectively creates another box to play with so you can also add styles to the “presentational content”:
1.	li::before {  
2.	    content: "POW! ";  
3.	    background: red;  
4.	    color: #fc0;  
5.	} 
7.	Lists
http://www.w3schools.com/css/css_list.asp
The type of list item marker is specified with the list-style-type property:
1.	ul.a {  
2.	    list-style-type: circle;  
3.	}  
4.	  
5.	ul.b {  
6.	    list-style-type: square;  
7.	}  
8.	  
9.	ol.c {  
10.	    list-style-type: upper-roman;  
11.	}  
12.	  
13.	ol.d {  
14.	    list-style-type: lower-alpha;  
15.	}  
To specify an image as the list item marker, use the list-style-image property:
1.	ul {  
2.	    list-style-image: url('sqpurple.gif');  
3.	}  
4.	  
5.	/*Cross-browser solution:*/  
6.	ul {  
7.	     list-style-type: none;  
8.	     padding: 0px;  
9.	     margin: 0px;  
10.	}  
11.	  
12.	ul li {  
13.	     background-image: url(sqpurple.gif);  
14.	     background-repeat: no-repeat;  
15.	     background-position: 0px center;   
16.	     padding-left: 15px;   
17.	}  
The list-style property is a shorthand property.
1.	ul {  
2.	     list-style: square inside url("sqpurple.gif");  
3.	}  
4.	/*list-style-type, list-style-position, list-style-image*/  
8.	Tables
http://www.w3schools.com/css/css_table.asp
To specify table borders in CSS, use the border property.
The border-collapse property sets whether the table borders are collapsed into a single border or separated.
1.	table {  
2.	     border-collapse: collapse;  
3.	}  
4.	  
5.	table, th, td {  
6.	     border: 1px solid black;  
7.	}  
Width and height of a table is defined by the width and height properties.
The text-align property sets the horizontal alignment, like left, right, or center.
The vertical-align property sets the vertical alignment, like top, bottom, or middle.
To control the space between the border and content in a table, use the padding property on <td> and <th> elements.
1.	table {  
2.	     width: 100%;  
3.	}  
4.	  
5.	th {  
6.	     height: 50px;  
7.	     text-align: left;  
8.	}  
9.	  
10.	td {  
11.	     height: 50px;  
12.	     vertical-align: bottom;  
13.	     padding: 15px;  
14.	}  
The example below specifies the color of the borders, and the text and background color of <th> elements:
1.	table, td, th {  
2.	     border: 1px solid green;  
3.	}  
4.	  
5.	th {  
6.	     background-color: green;  
7.	     color: white;  
8.	}  
9.	Backgrounds
http://www.w3schools.com/css/css_background.asp
http://www.w3schools.com/css/css3_backgrounds.asp
http://www.w3schools.com/css/css3_gradients.asp
Background images can be used in most HTML elements - not just for the whole page (body).
1.	background: white url(http://www.htmldog.com/images/bg.gif) no-repeat top right  
2.	/*This amalgamates these properties:  
3.	background-color  
4.	background-image*/
5.	
6.	background-repeat: repeat / repeat-y / repeat-x / no-repeat  
7.	background-position: top / center / bottom / left / right / ... /*a length, a percentage, or any sensible combination, such as top right.*/  
8.	  
9.	/*Multiple backgrounds.*/  
10.	background: url(bg.png), url(bullet.png) 0 50% no-repeat, url(arrow.png) right no-repeat;  
11.	  
12.	/*The background-size property allows you to stretch or compress a background image. */  
13.	background-size: auto / lengths / percentages / contain / cover / A combination of lengths, percentages, and auto  
14.	  
15.	background-origin: padding-box / border-box / content-box  
16.	  
17.	/*Gradients:*/  
18.	background: linear-gradient(orange, red);  /*from top to bottom*/  
19.	background: linear-gradient(to bottom right, orange, red);  
20.	background: linear-gradient(20deg, orange, red);  
21.	background: linear-gradient(hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%));  
22.	  
23.	body {  
24.	    background: #666 url(fade.png) 0 0 repeat-y;  /*fallback for IE*/  
25.	    background: -webkit-linear-gradient(right, #000, #666);  /*for Safari and older versions of Chrome. exclude "to*/  
26.	    background: linear-gradient(to right, #000, #666);  /*for modern browsers*/  
27.	}  
28.	  
29.	/*Radial gradients:*/  
30.	background: radial-gradient(yellow, green);  
31.	background: radial-gradient(circle, yellow, green);  /*by default it is ellipse*/  
32.	background: radial-gradient(circle closest-side, yellow, green);  /*closest-corner, farthest-side, farthest-corner*/  
33.	background: radial-gradient(at top left, yellow, green);  /*to place the origin of the gradient*/  
34.	background: -webkit-radial-gradient(100px 200px, circle closest-side, black, white); /*exclude "to", "at"*/  
35.	  
36.	/*Repeating gradients. 
37.	For basic bars of black-and-white bars, for example:*/  
38.	background: repeating-linear-gradient(white, black 10px, white 20px); 
CSS3 contains a few new background properties, which allow greater control of the background element:
background-image (with multiple backgrounds)
background-size
background-origin
background-clip
10.	Specificity
If the selectors are the same then the last one will always take precedence.
Basically, you give every:
ID selector (“#whatever”) a value of 100
class selector (“.whatever”) a value of 10
HTML selector (“whatever”) a value of 1.
Then you add them all up and you have the specificity value.
p has a specificity of 1 (1 HTML selector)
div p has a specificity of 2 (2 HTML selectors, 1+1)
.tree has a specificity of 10 (1 class selector)
div p.tree has a specificity of 12 (2 HTML selectors + a class selector, 1+1+10)
#baobab has a specificity of 100 (1 id selector)
body #content .alternative p has a specificity of 112 (HTML selector + id selector + class selector + HTML selector, 1+100+10+1)
11.	Display
http://www.w3schools.com/css/css_display_visibility.asp
The display property specifies if/how an element is displayed. Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.
inline:
1.	li { display: inline }  /*all list items in a list will appear next to each other in one continuous line*/   
block makes a box standalone, fitting the entire width of its containing box, with an effective line break before and after it.
This will make all links in “nav” large clickable blocks:
1.	#nav a {  
2.	    display: block;  
3.	    padding: 20px 10px;  
4.	}  
display: inline-block will keep a box inline but lend the greater formatting flexibility of block boxes, allowing margin to the right and left of the box, for example.
display: none doesn’t display a box at all. This code could be used in a print stylesheet to “turn off” the display of elements such as navigatioт:
1.	#navigation, #related_links { display: none }
visibility:hidden; also hides an element. However, the element will still take up the same space as before.
12.	Navigation Bar
http://www.w3schools.com/css/css_navbar.asp
13.	Image Gallery
http://www.w3schools.com/css/css_image_gallery.asp
14.	Image Opacity / Transparency
http://www.w3schools.com/css/css_image_transparency.asp
15.	Image Sprites
http://www.w3schools.com/css/css_image_sprites.asp
16.	Page Layout
http://www.w3schools.com/css/css_positioning.asp
http://www.w3schools.com/css/css_float.asp
http://www.w3schools.com/css/css_inline-block.asp
http://www.w3schools.com/css/css_align.asp
1.	position: static / relative / absolute / fixed  
static is the default value and renders a box in the normal order of things, as they appear in the HTML.
relative is much like static but the box can be offset from its original position with the properties top, right, bottom and left.
absolute pulls a box out of the normal flow of the HTML. The absolute box can be placed anywhere on the page using top, right, bottom and left.
fixed behaves like absolute, but it will absolutely position a box in reference to the browser window as opposed to the web page, so fixed boxes should stay exactly where they are on the screen even when the page is scrolled.
A traditional two-column layout with absolute positioning.
HTML:
1.	<div id="navigation">  
2.	    <ul>  
3.	        <li><a href="this.html">This</a></li>  
4.	        <li><a href="that.html">That</a></li>  
5.	    </ul>  
6.	</div>  
7.	<div id="content">  
8.	    <h1>Ra ra banjo banjo</h1>  
9.	    <p>Welcome to the Ra ra banjo banjo page. Ra ra banjo banjo. Ra ra banjo banjo. Ra ra banjo banjo.</p>  
10.	</div>  
CSS:
1.	#navigation {  
2.	    position: absolute;  
3.	    top: 0;  
4.	    left: 0;  
5.	    width: 200px;  
6.	}  
7.	#content {  
8.	    margin-left: 200px;  
9.	}  
Three-column layout:
1.	#navigation {  
2.	    position: absolute;  
3.	    top: 0;  
4.	    left: 0;  
5.	    width: 200px;  
6.	}  
7.	#navigation2 {  
8.	    position: absolute;  
9.	    top: 0;  
10.	    right: 0;  
11.	    width: 200px;  
12.	}  
13.	#content {  
14.	    margin: 0 200px; /* setting top and bottom margin to 0 and right and left margin to 200px */  
15.	}  
Floating a box will shift it to the right or left of a line, with surrounding content flowing around it. Working with the same HTML, you could apply the following CSS:
1.	#navigation {  
2.	    float: left;  
3.	    width: 200px;  
4.	}  
5.	#navigation2 {  
6.	    float: right;  
7.	    width: 200px;  
8.	}  
9.	#content {  
10.	    margin: 0 200px;  
11.	}  
Then, if you do not want the next box to wrap around the floating objects, you can apply the clear property:
1.	clear: left /*will clear left floated boxes*/  
2.	clear: right /*will clear right floated boxes*/  
3.	clear: both /*will clear both left and right floated boxes.*/  
So if, for example, you wanted a footer in your page, you could add a chunk of HTML:
1.	<div id="footer">  
2.	    <p>Footer! Hoorah!</p>  
3.	</div>  
and then add the following CSS:
1.	#footer {  
2.	    clear: both;  
3.	}  
When elements are positioned, they can overlap other elements. The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others). An element can have a positive or negative stack order:
1.	img {  
2.	     position: absolute;  
3.	     left: 0px;  
4.	     top: 0px;  
5.	     z-index: -1;  
6.	}  
17.	Rounded Corners
http://www.w3schools.com/css/css3_borders.asp
1.	border-radius: 10px;  
2.	border-radius: 3px 6px 9px 12px; /*border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius*/  
3.	border-radius: 50px/100px;  /*Ellipse*/  
18.	Border Images
http://www.w3schools.com/css/css3_border_images.asp
19.	Shadows
http://www.w3schools.com/css/css3_shadows.asp
1.	box-shadow: 5px 5px 3px 1px #999;  /*horizontal offset, vertical offset, blur radius (optional), spread distance (opt.), color (opt.)*/  
You can also apply shadows to the inside of a box by adding “inset” to the list:
1.	box-shadow: inset 0 0 7px 5px #ddd;  
You can apply shadows to the outline of text:
1.	text-shadow: -2px 2px 2px #999; /*horizontal offset, vertical offset, blur radius (optional), color (opt.)*/  
20.	Universal, Child, and Adjacent Selectors
http://www.w3schools.com/css/css_combinators.asp
Using an “*” you can target everything.
The following will set the margin and padding on everything in a page to zero and everything within an element with the ID “contact” to be displayed as a block:
1.	* {  
2.	    margin: 0;  
3.	    padding: 0;  
4.	}  
5.	#contact * {  
6.	    display: block;  
7.	}  
“>” can be used to specify something that is a child (not grandchild) of something else.
HTML:
1.	<ul id="genus_examples">  
2.	    <li>Cats  
3.	        <ul>  
4.	            <li>Panthera</li>  
5.	            <li>Felis</li>  
6.	            <li>Neofelis</li>  
7.	        </ul>  
8.	    </li>  
9.	    <li>Apes  
10.	        <ul>  
11.	            <li>Pongo</li>  
12.	            <li>Pan</li>  
13.	            <li>Homo</li>  
14.	        </ul>  
15.	    </li>  
16.	</ul>  
CSS:
1.	#genus_examples > li { border: 1px solid red }  
2.	/*A red border would be drawn around “Cats” and “Apes” only.*/  
“+” is used to target an adjacent sibling of an element, essentially, something immediately following something.
HTML:
1.	<h1>Clouded leopards</h1>  
2.	<p>Clouded leopards are cats that belong to the genus Neofelis.</p>  
3.	<p>There are two extant species: Neofelis nebulosa and Neofelis diardi.</p>  
CSS:
1.	h1 + p { font-weight: bold }  
2.	/*Only the first paragraph, that following the heading, will be made bold.*/  
The general sibling selector selects all elements that are siblings of a specified element.
The following example selects all <p> elements that are siblings of <div> elements:
1.	div ~ p {  
2.	    background-color: yellow;  
3.	}  
21.	 At-Rules: @import, @media, and @font-face
@import rule is used to bolt another stylesheet onto your existing one.
@import rules must be placed at the top of a stylesheet.
1.	@import url(morestyles.css);  
@media can be used to apply styles to a specific media.
1.	@media print {  
2.	    body {  
3.	        font-size: 10pt;  
4.	        font-family: times, serif;  
5.	    }  
6.	    #navigation {  
7.	        display: none;  
8.	    }  
9.	}  
10.	/*Values that follow “@media” can include screen, print, projection, handheld, and all, or a comma-separated list of more than one.*/  
11.	/*See "Media Queries" below.*/  
1.	@font-face {  
2.	    font-family: "font of all knowledge";  
3.	    src: local("font of all knowledge"), local(fontofallknowledge), url(fontofallknowledge.woff);  
4.	    font-weight: 400;  
5.	    font-style: normal;  
6.	}  
“font of all knowledge” can then be used in a standard font rule, such as:  
1.	p { font-family: "font of all knowledge", arial, sans-serif; }  
To use Google Web Fonts all you need to do is link to one of their external CSS files, which is nothing more than a @font-face rule.
22.	Attribute Selectors
http://www.w3schools.com/css/css_attribute_selectors.asp
Attribute selectors allow you to style an element’s box based on the presence of an HTML attribute or of an attribute’s value.
This basically says “shove a dotted line underneath all abbreviations with a title attribute”:
1.	abbr[title] { border-bottom: 1px dotted #ccc }  
This example will apply a width of 200 pixels only to input elements that are specified as being text boxes:
1.	input[type=text] { width: 200px; }  
You can also target more than one attribute at a time. This will only apply a gray border to text inputs that are disabled:
1.	input[type=text][disabled] { border: 1px solid #ccc }  
CSS 3 further allows you to match an attribute without being exact:
1.	[attribute^=something] /*will match a the value of an attribute that begins with something.*/  
2.	[attribute$=something] /*will match a the value of an attribute that ends with something.*/  
3.	[attribute*=something] /*will match a the value of an attribute that contains something, be it in the beginning, middle, or end.*/  
So, as an example, you could style external links (eg. “http://www.htmldog.com”) differently to internal links (eg. “overhere.html”) in the following way:
1.	a[href^=http] {  
2.	    padding-right: 10px;  
3.	    background: url(arrow.png) right no-repeat;  
4.	}  
23.	Transitions
http://www.w3schools.com/css/css3_transitions.asp
When the link is hovered over, the color will gradually change rather than suddenly switch:
1.	a:link {  
2.	    transition: all .5s linear 0; /*transition-property, transition-duration, transition-timing-function, transition-delay*/  
3.	    color: hsl(36,50%,50%);  
4.	}  
5.	a:hover {  
6.	    color: hsl(36,100%,50%);  
7.	}  
For a transition to take place, only transition-duration is required, the rest defaulting to:
1.	transition-property: all;  
2.	transition-timing-function: ease;  
3.	transition-delay: 0;  
While “all” can be used in transition-property (or transition), you can tell a browser only to transition certain properties, by simply plonking in the property name you want to change. So to change only color the previous example could actually include:
1.	transition: color .5s ease 0  
If you want to target more than one property (without using “all”), you can offer up a comma-separated list with transition-property:
1.	a:link {  
2.	    transition: .5s;  
3.	    transition-property: color, font-size;  
4.	...  
Or you can offer up a slew of rules for transitioning each property like so:
1.	a:link {  
2.	    transition: color .5s, font-size 2s;  
3.	...  
24.	Transformations
http://www.w3schools.com/css/css3_2dtransforms.asp
http://www.w3schools.com/css/css3_3dtransforms.asp
Manipulating a box over two dimensions, transform can be used to rotate, skew, scale and translate a box and its contents.
1.	transform: rotate(-10deg);  
2.	/*This will tip the box and everything in it, ten degrees anti-clockwise.*/  
3.	  
4.	transform: skew(20deg,10deg);  
5.	/*This will tip over the x-axis by 20 degrees on the y-axis by 10 degrees.*/  
6.	  
7.	transform: scale(2);  
8.	/*This will multiply the size by two.*/  
9.	transform: scale(1,2);  
10.	/*This will leave the horizontal as is and multiply the vertical by two.*/  
11.	  
12.	transform: translate(100px,200px);  
13.	/*Similar to position: relative; left: 100px; top: 200px;, this will move a box 100 pixels to the right and 200 pixels down.*/  
14.	  
15.	/*If you want to target an individual axis, you can also use skewX, skewY, scaleX, scaleY, translateX, and translateY.*/  
Combining transformations:
1.	transform: rotate(-10deg) scale(2);  
2.	/*The order of the values is important - the latter will be executed before the former*/  
3.	/*Alternatively, you could use the matrix function:*/  
4.	transform: matrix(2,-0.35,0.35,2,0,0);  
If you are transforming a box, there is a further parameter involved: the origin of the transformation.
If you are rotating, for example, it will, by default, turn on the point that is the center of the box.
This will tell the box to transform (rotate, in the previous example) from the top left:
1.	transform-origin: 0 0;  
Duplicate transform and transform-origin properties with:
-webkit-transform
-webkit-transform-origin
-ms-transform
-ms-transform-origin
25.	Animations
http://www.w3schools.com/css/css3_animations.asp
26.	Multiple Columns
http://www.w3schools.com/css/css3_multiple_columns.asp
27.	User Interface
http://www.w3schools.com/css/css3_user_interface.asp
CSS3 has new user interface features such as resizing elements, outlines, and box sizing:
resize
outline-offset
28.	Box Sizing
http://www.w3schools.com/css/css3_box-sizing.asp
29.	Flexible Box
http://www.w3schools.com/css/css3_flexbox.asp
Use of flexbox ensures that elements behave predictably when the page layout must accommodate different screen sizes and different display devices.
For many applications, the flexible box model provides an improvement over the block model in that it does not use floats, nor do the flex container's margins collapse with the margins of its contents.
30.	Media Queries
http://www.w3schools.com/css/css3_mediaqueries.asp
If we want to apply some CSS solely to screen-based media:
1.	@media screen {  
2.	    body { font: 12px arial, sans-serif }  
3.	    #nav { display: block }  
4.	}  
Not only can screen-based media be targeted, screen-based media of a certain size can be targeted as well. You can apply more than one @media rule, so you could have a number of different designs that are browser size dependent:
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
Orientation-specific CSS:
1.	@media screen and (orientation: landscape) {  
2.	    #nav { float: left }  
3.	}  
4.	  
5.	@media screen and (orientation: portrait) {  
6.	    #nav { float: none }  
7.	}  



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

http://www.w3schools.com/css/css_rwd_viewport.asp
http://www.w3schools.com/w3css/default.asp


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
