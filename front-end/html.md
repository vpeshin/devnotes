<!-- TOC depthTo:2 orderedList:true -->

1. [HTML Entities](#html-entities)
2. [Lists](#lists)
3. [Links, Images](#links-images)
4. [Tables](#tables)
5. [Forms](#forms)
6. [Iframes](#iframes)
7. [Span and Div](#span-and-div)
8. [Text](#text)
9. [Sectioning](#sectioning)
10. [Embedded Content: Video, Audio, and Canvas](#embedded-content-video-audio-and-canvas)
11. [Responsive Web Design](#responsive-web-design)
12. [Colors](#colors)
13. [HTML APIs](#html-apis)
14. [Other](#other)

<!-- /TOC -->


## HTML Entities  

[[W3Schools 1](http://www.w3schools.com/html/html_entities.asp)],
[[W3Schools 2](http://www.w3schools.com/charsets/ref_utf_symbols.asp)]

Unicode symbol `\u20bd`:
&#x20bd;


## Lists

Unordered lists - `ul`, `li`,
ordered lists - `ol`, `li`,
definition lists – `dl`, `dt` (any number of either)


## Links, Images

``` html
<a href="http://www.htmldog.com"><img src="http://www.htmldog.com/badge1.gif" width="120" height="90" alt="HTML Dog"></a> 
<a href="http://www.htmldog.com"><img src="http://www.htmldog.com/badge1.gif" alt="HTML Dog" style="width:120px;height:90px"></a> 
  
<a href="#top">Click me to go to the top of the page</a>  
  
<h2 id="moss">Moss</h2>  
<a href="#moss">Go to moss</a>  
  
<a href="inept.html" title="Why I'm rubbish at writing link text: An explanation and an apology." target="_blank">Click here</a> to find out more.</p>
// target values:
// _blank		Opens the linked document in a new window or tab
// _self		Opens the linked document in the same frame as it was clicked (this is default)
// _parent	Opens the linked document in the parent frame
// _top		Opens the linked document in the full body of the window
// framename	Opens the linked document in a named frame
// Use the map tag to define an image-map. An image-map is an image with clickable areas.

<img src="planets.gif" alt="Planets" usemap="#planetmap" style="width:145px;height:126px;">  
  
<map name="planetmap">  
  <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">  
  <area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">  
   <area shape="circle" coords="124,58,8" alt="Venus" href="venus.htm">  
</map>
```
  

## Tables

``` html
<table>  
	<caption>Locust mating habits</caption>  
	<tr>  
		<th>Column 1 heading</th>  
		<th>Column 2 heading</th>  
		<th>Column 3 heading</th>  
	</tr>  
	<tr>  
		<td>Row 2, cell 1</td>  
		<td colspan="2">Row 2, cell 2, also spanning Row 2, cell 3</td>  
	</tr>  
	<tr>  
		<td rowspan="2">Row 3, cell 1, also spanning Row 4, cell 1</td>  
		<td>Row 3, cell 2</td>  
		<td>Row 3, cell 3</td>  
	</tr>  
	<tr>  
			<td>Row 4, cell 2</td>  
			<td>Row 4, cell 3</td>  
		</tr>  
	</table>
// To add borders, use the CSS border property:
// 	table, th, td {  
// 	     border: 1px solid black;  
// 	}  
```

The caption element should be used straight after the opening table tag. A caption will appear above the table by default, although you can use CSS caption-side: bottom.
Colgroup and col tags allow you to define the table columns and style them as desired. In this example the styles of the CSS class “alternative” will be applied to the second column, or the second cell in every row:

``` html
<table>  
   <colgroup>  
	   <col>  
	   <col class="alternative">  
	   <col>  
   </colgroup>  
   <tr>  
	   <td>This</td>  
	   <td>That</td>  
	   <td>The other</td>  
   </tr>  
   <tr>  
	   <td>Ladybird</td>  
	   <td>Locust</td>  
	   <td>Lunch</td>  
   </tr>  
</table>  
```

This would apply “alternative” to the last two columns:

``` html
1.	<colgroup>  
2.	    <col>  
3.	    <col span="2" class="alternative">  
4.	</colgroup> 
```

`thead`, `tfoot` and `tbody` allow you to separate the table into header, footer and body:

``` html
<table>  
	<thead>  
		<tr>  
			<td>Header 1</td>  
			<td>Header 2</td>  
		</tr>  
	</thead>  
	<tfoot>  
		<tr>  
			<td>Footer 1</td>  
			<td>Footer 2</td>  
		</tr>  
	</tfoot>  
	<tbody>  
		<tr>  
			<td>Cell 1</td>  
			<td>Cell 2</td>  
		</tr>  
		<!-- etc. -->  
	</tbody>  
</table>
```


## Forms  
[[W3Schools](http://www.w3schools.com/html/html_forms.asp)]

``` html
<form action="processingscript.php" method="post">  <!-- method="get" -->  
	<input type="text" name="firstname" value="Byron">  
	<input type="password" name="password">  
	<input type="radio" name="gender" value="male"> Male  
	<input type="radio" name="gender" value="female"> Female  
	<input type="checkbox" checked name="areyousheep">  
	<textarea name="comments" rows="7" cols="60">Some text
	<input type="reset" name="resetform" value="Reset Form">  
	<input type="submit" name="submitform" value="Submit Form">  
	<select>  
		<option>NSW</option>  
		<option selected>NY</option>  
		<option value="third option">Option 3</option>  
	</select>  
	<!-- Option groups -->  
	<select name="country">  
		<optgroup label="Africa">  
			<option value="gam">Gambia</option>  
			<option value="mad">Madagascar</option>  
			<option value="nam">Namibia</option>  
		</optgroup>  
		<optgroup label="Europe">  
			<option value="fra">France</option>  
			<option value="rus">Russia</option>  
			<option value="uk">UK</option>  
		</optgroup>  
	</select>  
</form>
```

### HTML5 Forms: Input Types

``` html
<input type="search" name="search">  
<!-- You can also target this element with a CSS attribute selector: -->  
input[type=search] { background: url(magnifyingglass.png) right no-repeat) }  
  
<input type="tel" name="telephone_number">  
<input type="url" name="web_address">  
<input type="email" name="email_address">  
<!-- You can use the :valid and :invalid CSS3 pseudo classes to style these fields depending on whether their content is considered valid. -->  
input[type=email]:valid { background: green }  
input[type=email]:invalid { background: red }  
  
<input type="number" name="quantity" step="2" min="20" max="30">  
<!-- You can use the :valid and :invalid pseudo classes in relation to this, too. -->  
  
<input type="range" name="temperature" min="15" max="25" step="0.5" value="18.5">
<input type="color" name="color" value="#ff8800">
```

There are several input types for dates and times:  
`type="datetime"`  
`type="date"`  
`type="month"`  
`type="week"`  
`type="time"`  
`type="datetime-local"`  

`step`, `min`, and `max` attributes can be used with dates and times, too, as can the CSS pseudo classes to style according to validity.

### HTML5 Forms: Attributes and Data Lists

The `placeholder` attribute can be used with text input fields (and their text-like cousins, such as `type="email"` and `type="number"`) as well as `textarea` elements. It is intended as a hint, rather than a label, for which a `label` element should still be used.

``` html
<label for="email_address">Email address</label>  
<input type="email" placeholder="you@somewhere.com" name="email_address" id="email_address" autofocus>  
<!-- You might want focus to land on a form field when a page loads. -->  
```

``` html
A data list takes the form of a list of suggestions that accompanies a text field:
<input name="country" list="country_name">  
<datalist id="country_name">  
	<option value="Afghanistan">  
	<option value="Albania">  
	<option value="Algeria">  
	<option value="Andorra">  
	<!-- etc. -->  
</datalist>
```


## Iframes

An `iframe` is used to display a web page within a web page.

``` html
<iframe src="demo_iframe.htm" width="200" height="200" style="border:5px dotted red"></iframe>  
```


## Span and Div

`span` element is in-line and usually used for a small chunk of HTML inside a line 
(such as inside a paragraph) whereas a `div` (division) element is block-line 
(which is basically equivalent to having a line-break before and after it) 
and used to group larger chunks of code.

``` html
<div id="scissors">  
    <p>This is <span class="paper">crazy</span></p>  
</div>  
```

`class` attribute makes it possible to define equal styles for "equal"
`div` and `span` elements


## Text

### Abbreviations, Quotations, and Code

``` html
<p>This web site is about <abbr title="HyperText Markup Language">HTML</abbr></p>  
  
<p>So I asked Bob about quotations on the Web and he said <q>I know as much about quotations as I do about pigeon fancying</q>. Luckily, I found HTML Dog and it said:</p>  
<blockquote cite="http://www.htmldog.com/guides/html/intermediate/text/">  
    <p>blockquote and q are used for quotations. blockquote is generally used for standalone often multi-line quotations whereas q is used for shorter, in-line quotations.</p>  
</blockquote>  
```

A `cite` tag can be used to define the title of a work, such as a book:

``` html
<p>According to <cite>the Bible</cite>, after six days God said <q>screw this for a lark, I'm having a nap</q>.</p>  
```

In code `var` can be used for variables, `samp` for sample output, and `kbd` for user input.

``` html
<p>If you add the line <code><var>givevaderachuckle</var> = true;</code> to the <code>destroy_planet</code> subroutine and then type <kbd>ilovejabba</kbd> into the console, the big bad green Death Star laser will etch <samp>Slug Lover!</samp> on the planet's surface.</p>  
```

`pre` (preformatted text) is most commonly used for blocks of code:

``` html
<pre><code>  
&lt;div&gt; id="intro"&gt;  
    &lt;h1&gt;Some heading&lt;/h1&gt;  
    &lt;p&gt;Some paragraph paragraph thing thing thingy.&lt;/p&gt;  
&lt;/div&gt;  
&lt;/code&gt;&lt;/pre&gt; </code></pre>  
```

### Addresses, Definitions, Editorial, Time, Mark

`address` should be used specifically for the contact details relating either to the entire web page (and so only used once) or to an article element.  
`dfn` is a definition term and is used to highlight the first use of a term:

``` html
<dfn title="A mutation that combines two or more sets of chromosomes from different species">allopolyploid</dfn> organism</p>  
```

`ins` and `del` are used to display editorial insertions and deletions respectively:

``` html
<p>I have decided to <del datetime="2013-01-26">decrease</del> <ins cite="http://www.icecreamforall.com/changeofpolicy/">increase</ins> the amount of free ice cream that the State will provide for its citizens.</p> 
```

Date:

``` html
<p>Written by Doctor Who on <time datetime="2052-11-21">Thursday 21st November 2052</time>.</p>
```

Text can be highlighted, as if with a marker pen, using `mark`:

``` html
<p>He wants to play with his <mark>Legos</mark></p>  
```


## Sectioning

An `article` element can be used to mark up a standalone section of content.  
A `section` element represents a more general section and could be used to split up an article, or to represent chapters, for example.  
`header` and `footer` provide further specialized, self-descriptive, sections.

``` html
<article>  
    <header>  
        <h1>Alternatively…</h1>  
        <p>[An introduction]</p>  
    </header>  
    <section id="main_content">  
        <p>[Content]</p>  
    </section>  
    <footer>  
        <p>[End notes]</p>  
    </footer>  
</article>  
<footer>  
    <p>[Copyright]</p>  
</footer>  
<!-- The footer is the footer of the section in which it is contained. -->
```
 
An `aside` can be used to represent content that is related the content surrounding it.

``` html
<section id="main_content">  
    <h1>Tixall</h1>  
    <p>[All about Tixall]</p>  
    <aside>  
        <h2>Tixall Obelisk</h2>  
        <p>[A short note about Tixall Obelisk]</p>  
    </aside>  
    <p>[Maybe a bit more about Tixall]</p>  
</section>  
```

`nav` used to mark up a group of navigation links.

``` html
<nav id="main_nav">  
    <ul>  
        <li><a href="/tutorials/">Tutorials</a></li>  
        <li><a href="/reference/">Reference</a></li>  
    </ul>  
</nav>  
```

Figures:

``` html
<figure>  
    <img src="obelisk.jpg">  
    <figcaption>Tixall Obelisk</figcaption>  
</figure>  
```


## Embedded Content: Video, Audio, and Canvas

[[W3Schools 1](http://www.w3schools.com/html/html5_canvas.asp)],
[[W3Schools 2](http://www.w3schools.com/html/html5_svg.asp)]

``` html
<video src="kitties.mp4" poster="fluffy.jpg" width="300" height="200" loop muted autoplay controls>  
  <img src="hahahaha.jpg" alt="Hilarious cat and caption saying 'soz'."> <!-- fall-back content -->  
</video>  
  
<!-- Alternative content -->  
<video controls>  
    <source src="kitties.mp4" type="video/mp4; codecs='avc1, mp4a'">  
    <source src="kitties.webm" type="video/webm; codecs='vp8.0, vorbis'">  
    <p>Browser no likey HTML 5.</p>  
</video>  
  
<audio src="meow_mix.mp3" controls>  
    Your stupid browser doesn't support HTML 5 audio.  
</audio>  
<!-- Alternative content can also be defined in exactly the same way as with the video and source tags. -->  
```

The `track` tag specifies text tracks for media elements (audio and video).  
`canvas` element is designed to provide a canvas onto which JavaScript can
be used to paint dynamic images such as graphs, animated sprites, etc.

``` html
<canvas id="wittykitty" width="800" height="450">  
    <!-- Fall-back content here, just like with video and audio -->  
</canvas>  
```

The `object` element defines an embedded object within an HTML document.

``` html
<object width="400" height="50" data="bookmark.swf"></object>  
<object width="100%" height="500px" data="snippet.html"></object>  
<object data="audi.jpeg"></object>
```


##	Responsive Web Design

[[W3Schools](http://www.w3schools.com/w3css/default.asp)]


## Colors

[[W3Schools](http://www.w3schools.com/html/html_colornames.asp)]


## HTML APIs

[[W3Schools 1](http://www.w3schools.com/html/html5_geolocation.asp)],
[[W3Schools 2](http://www.w3schools.com/html/html5_draganddrop.asp)],
[[W3Schools 3](http://www.w3schools.com/html/html5_webstorage.asp)],
[[W3Schools 4](http://www.w3schools.com/html/html5_app_cache.asp)],
[[W3Schools 5](http://www.w3schools.com/html/html5_webworkers.asp)]


## Other
		
### Setting the Viewport

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```