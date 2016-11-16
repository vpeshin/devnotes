1.	HTML Entities
http://www.w3schools.com/html/html_entities.asp
http://www.w3schools.com/charsets/ref_utf_symbols.asp
Unicode symbol \u20bd:
&#x20bd;
2.	Lists
Unordered lists - ul, li
ordered lists - ol, li
definition lists – dl, dt (any number of either)
3.	Links, Images
4.	<a href="http://www.htmldog.com"><img src="http://www.htmldog.com/badge1.gif" width="120" height="90" alt="HTML Dog"></a> 
5.	<a href="http://www.htmldog.com"><img src="http://www.htmldog.com/badge1.gif" alt="HTML Dog" style="width:120px;height:90px"></a> 
6.	  
7.	<a href="#top">Click me to go to the top of the page</a>  
8.	  
9.	<h2 id="moss">Moss</h2>  
10.	<a href="#moss">Go to moss</a>  
11.	  
12.	<a href="inept.html" title="Why I'm rubbish at writing link text: An explanation and an apology." target="_blank">Click here</a> to find out more.</p>
target values:
_blank		Opens the linked document in a new window or tab
_self		Opens the linked document in the same frame as it was clicked (this is default)
_parent	Opens the linked document in the parent frame
_top		Opens the linked document in the full body of the window
framename	Opens the linked document in a named frame
Use the map tag to define an image-map. An image-map is an image with clickable areas.
1.	<img src="planets.gif" alt="Planets" usemap="#planetmap" style="width:145px;height:126px;">  
2.	  
3.	<map name="planetmap">  
4.	  <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">  
5.	  <area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">  
6.	   <area shape="circle" coords="124,58,8" alt="Venus" href="venus.htm">  
7.	</map>  
4.	Tables
1.	<table>  
2.	    <caption>Locust mating habits</caption>  
3.	    <tr>  
4.	        <th>Column 1 heading</th>  
5.	        <th>Column 2 heading</th>  
6.	        <th>Column 3 heading</th>  
7.	    </tr>  
8.	    <tr>  
9.	        <td>Row 2, cell 1</td>  
10.	        <td colspan="2">Row 2, cell 2, also spanning Row 2, cell 3</td>  
11.	    </tr>  
12.	    <tr>  
13.	        <td rowspan="2">Row 3, cell 1, also spanning Row 4, cell 1</td>  
14.	        <td>Row 3, cell 2</td>  
15.	        <td>Row 3, cell 3</td>  
16.	    </tr>  
17.	    <tr>  
18.	        <td>Row 4, cell 2</td>  
19.	        <td>Row 4, cell 3</td>  
20.	    </tr>  
21.	</table>
To add borders, use the CSS border property:
1.	table, th, td {  
2.	     border: 1px solid black;  
3.	}  
The caption element should be used straight after the opening table tag. A caption will appear above the table by default, although you can use CSS caption-side: bottom.
Colgroup and col tags allow you to define the table columns and style them as desired. In this example the styles of the CSS class “alternative” will be applied to the second column, or the second cell in every row:
1.	 <table>  
2.	    <colgroup>  
3.	        <col>  
4.	        <col class="alternative">  
5.	        <col>  
6.	    </colgroup>  
7.	    <tr>  
8.	        <td>This</td>  
9.	        <td>That</td>  
10.	        <td>The other</td>  
11.	    </tr>  
12.	    <tr>  
13.	        <td>Ladybird</td>  
14.	        <td>Locust</td>  
15.	        <td>Lunch</td>  
16.	    </tr>  
17.	</table>  
This would apply “alternative” to the last two columns:
1.	<colgroup>  
2.	    <col>  
3.	    <col span="2" class="alternative">  
4.	</colgroup> 
thead, tfoot and tbody allow you to separate the table into header, footer and body:
1.	<table>  
2.	    <thead>  
3.	        <tr>  
4.	            <td>Header 1</td>  
5.	            <td>Header 2</td>  
6.	        </tr>  
7.	    </thead>  
8.	    <tfoot>  
9.	        <tr>  
10.	            <td>Footer 1</td>  
11.	            <td>Footer 2</td>  
12.	        </tr>  
13.	    </tfoot>  
14.	    <tbody>  
15.	        <tr>  
16.	            <td>Cell 1</td>  
17.	            <td>Cell 2</td>  
18.	        </tr>  
19.	        <!-- etc. -->  
20.	    </tbody>  
21.	</table>  
5.	Forms
1.	<form action="processingscript.php" method="post">  <!-- method="get" -->  
2.	    <input type="text" name="firstname" value="Byron">  
3.	    <input type="password" name="password">  
4.	    <input type="radio" name="gender" value="male"> Male  
5.	    <input type="radio" name="gender" value="female"> Female  
6.	    <input type="checkbox" checked name="areyousheep">  
7.	    <textarea name="comments" rows="7" cols="60">Some text
8.	    <input type="reset" name="resetform" value="Reset Form">  
9.	    <input type="submit" name="submitform" value="Submit Form">  
10.	    <select>  
11.	        <option>NSW</option>  
12.	        <option selected>NY</option>  
13.	        <option value="third option">Option 3</option>  
14.	    </select>  
15.	    <!-- Option groups -->  
16.	    <select name="country">  
17.	        <optgroup label="Africa">  
18.	            <option value="gam">Gambia</option>  
19.	            <option value="mad">Madagascar</option>  
20.	            <option value="nam">Namibia</option>  
21.	        </optgroup>  
22.	        <optgroup label="Europe">  
23.	            <option value="fra">France</option>  
24.	            <option value="rus">Russia</option>  
25.	            <option value="uk">UK</option>  
26.	        </optgroup>  
27.	    </select>  
28.	</form>
http://www.w3schools.com/html/html_forms.asp

6.	HTML5 Forms: Input Types
1.	<input type="search" name="search">  
2.	<!-- You can also target this element with a CSS attribute selector: -->  
3.	input[type=search] { background: url(magnifyingglass.png) right no-repeat) }  
4.	  
5.	<input type="tel" name="telephone_number">  
6.	<input type="url" name="web_address">  
7.	<input type="email" name="email_address">  
8.	<!-- You can use the :valid and :invalid CSS3 pseudo classes to style these fields depending on whether their content is considered valid. -->  
9.	input[type=email]:valid { background: green }  
10.	input[type=email]:invalid { background: red }  
11.	  
12.	<input type="number" name="quantity" step="2" min="20" max="30">  
13.	<!-- You can use the :valid and :invalid pseudo classes in relation to this, too. -->  
14.	  
15.	<input type="range" name="temperature" min="15" max="25" step="0.5" value="18.5">
16.	<input type="color" name="color" value="#ff8800">

There are several input types for dates and times:
1.	type="datetime"  
2.	type="date"  
3.	type="month"  
4.	type="week"  
5.	type="time"  
6.	type="datetime-local"  
7.	<!-- step, min, and max attributes can be used with dates and times, too, as can the CSS pseudo classes to style according to validity. -->  
7.	HTML5 Forms: Attributes and Data Lists
The placeholder attribute can be used with text input fields (and their text-like cousins, such as type="email" and type="number") as well as textarea elements. It is intended as a hint, rather than a label, for which a label element should still be used.
1.	<label for="email_address">Email address</label>  
2.	<input type="email" placeholder="you@somewhere.com" name="email_address" id="email_address" autofocus>  
3.	<!-- You might want focus to land on a form field when a page loads. -->  
A data list takes the form of a list of suggestions that accompanies a text field:
1.	<input name="country" list="country_name">  
2.	<datalist id="country_name">  
3.	    <option value="Afghanistan">  
4.	    <option value="Albania">  
5.	    <option value="Algeria">  
6.	    <option value="Andorra">  
7.	    <!-- etc. -->  
8.	</datalist>  
8.	Iframes
An iframe is used to display a web page within a web page.
1.	<iframe src="demo_iframe.htm" width="200" height="200" style="border:5px dotted red"></iframe>  
9.	Span and Div
span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.
1.	<div id="scissors">  
2.	    <p>This is <span class="paper">crazy</span></p>  
3.	</div>  
class attribute makes it possible to define equal styles for "equal" div and span elements
10.	        Text: Abbreviations, Quotations, and Code
1.	<p>This web site is about <abbr title="HyperText Markup Language">HTML</abbr></p>  
2.	  
3.	<p>So I asked Bob about quotations on the Web and he said <q>I know as much about quotations as I do about pigeon fancying</q>. Luckily, I found HTML Dog and it said:</p>  
4.	<blockquote cite="http://www.htmldog.com/guides/html/intermediate/text/">  
5.	    <p>blockquote and q are used for quotations. blockquote is generally used for standalone often multi-line quotations whereas q is used for shorter, in-line quotations.</p>  
6.	</blockquote>  
A cite tag can be used to define the title of a work, such as a book:
1.	<p>According to <cite>the Bible</cite>, after six days God said <q>screw this for a lark, I'm having a nap</q>.</p>  
In code var can be used for variables, samp for sample output, and kbd for user input.
1.	<p>If you add the line <code><var>givevaderachuckle</var> = true;</code> to the <code>destroy_planet</code> subroutine and then type <kbd>ilovejabba</kbd> into the console, the big bad green Death Star laser will etch <samp>Slug Lover!</samp> on the planet's surface.</p>  
pre (preformatted text) is most commonly used for blocks of code:
1.	<pre><code>  
2.	&lt;div&gt; id="intro"&gt;  
3.	    &lt;h1&gt;Some heading&lt;/h1&gt;  
4.	    &lt;p&gt;Some paragraph paragraph thing thing thingy.&lt;/p&gt;  
5.	&lt;/div&gt;  
6.	&lt;/code&gt;&lt;/pre&gt; </code></pre>  
11.	        Text: Addresses, Definitions, Editorial, Time, Mark
address should be used specifically for the contact details relating either to the entire web page (and so only used once) or to an article element.
dfn is a definition term and is used to highlight the first use of a term:
1.	<dfn title="A mutation that combines two or more sets of chromosomes from different species">allopolyploid</dfn> organism</p>  
ins and del are used to display editorial insertions and deletions respectively:
1.	<p>I have decided to <del datetime="2013-01-26">decrease</del> <ins cite="http://www.icecreamforall.com/changeofpolicy/">increase</ins> the amount of free ice cream that the State will provide for its citizens.</p> 
Date:
1.	<p>Written by Doctor Who on <time datetime="2052-11-21">Thursday 21st November 2052</time>.</p>
Text can be highlighted, as if with a marker pen, using mark:
1.	<p>He wants to play with his <mark>Legos</mark></p>  
12.	Sectioning

An article element can be used to mark up a standalone section of content.
A section element represents a more general section and could be used to split up an article, or to represent chapters, for example.
header and footer provide further specialized, self-descriptive, sections.



1.	<article>  
2.	    <header>  
3.	        <h1>Alternatively…</h1>  
4.	        <p>[An introduction]</p>  
5.	    </header>  
6.	    <section id="main_content">  
7.	        <p>[Content]</p>  
8.	    </section>  
9.	    <footer>  
10.	        <p>[End notes]</p>  
11.	    </footer>  
12.	</article>  
13.	<footer>  
14.	    <p>[Copyright]</p>  
15.	</footer>  
16.	<!-- The footer is the footer of the section in which it is contained. -->  
An aside can be used to represent content that is related the content surrounding it.
1.	<section id="main_content">  
2.	    <h1>Tixall</h1>  
3.	    <p>[All about Tixall]</p>  
4.	    <aside>  
5.	        <h2>Tixall Obelisk</h2>  
6.	        <p>[A short note about Tixall Obelisk]</p>  
7.	    </aside>  
8.	    <p>[Maybe a bit more about Tixall]</p>  
9.	</section>  
nav used to mark up a group of navigation links.
1.	<nav id="main_nav">  
2.	    <ul>  
3.	        <li><a href="/tutorials/">Tutorials</a></li>  
4.	        <li><a href="/reference/">Reference</a></li>  
5.	    </ul>  
6.	</nav>  
Figures:
1.	<figure>  
2.	    <img src="obelisk.jpg">  
3.	    <figcaption>Tixall Obelisk</figcaption>  
4.	</figure>  
13.	Embedded Content: Video, Audio, and Canvas
http://www.w3schools.com/html/html5_canvas.asp
http://www.w3schools.com/html/html5_svg.asp
1.	<video src="kitties.mp4" poster="fluffy.jpg" width="300" height="200" loop muted autoplay controls>  
2.	  <img src="hahahaha.jpg" alt="Hilarious cat and caption saying 'soz'."> <!-- fall-back content -->  
3.	</video>  
4.	  
5.	<!-- Alternative content -->  
6.	<video controls>  
7.	    <source src="kitties.mp4" type="video/mp4; codecs='avc1, mp4a'">  
8.	    <source src="kitties.webm" type="video/webm; codecs='vp8.0, vorbis'">  
9.	    <p>Browser no likey HTML 5.</p>  
10.	</video>  
11.	  
12.	<audio src="meow_mix.mp3" controls>  
13.	    Your stupid browser doesn't support HTML 5 audio.  
14.	</audio>  
15.	<!-- Alternative content can also be defined in exactly the same way as with the video and source tags. -->  
The track tag specifies text tracks for media elements (audio and video).
canvas element is designed to provide a canvas onto which JavaScript can be used to paint dynamic images such as graphs, animated sprites, etc.
1.	<canvas id="wittykitty" width="800" height="450">  
2.	    <!-- Fall-back content here, just like with video and audio -->  
3.	</canvas>  
The object element defines an embedded object within an HTML document.
1.	<object width="400" height="50" data="bookmark.swf"></object>  
2.	<object width="100%" height="500px" data="snippet.html"></object>  
3.	<object data="audi.jpeg"></object>
14.	Responsive Web Design
http://www.w3schools.com/w3css/default.asp
15.	Colors
http://www.w3schools.com/html/html_colornames.asp
16.	HTML APIs
http://www.w3schools.com/html/html5_geolocation.asp
http://www.w3schools.com/html/html5_draganddrop.asp
http://www.w3schools.com/html/html5_webstorage.asp
http://www.w3schools.com/html/html5_app_cache.asp
http://www.w3schools.com/html/html5_webworkers.asp



		Other
		
<!--Setting the Viewport-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
