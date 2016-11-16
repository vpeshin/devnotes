
        HTML Entities
        DOM
        Lists
        Links
        Images
        Tables
        Forms
        HTML5 Forms: Input Types
        HTML5 Forms: Attributes and Data Lists
        Span and Div
        Iframes
        Text: Abbreviations, Quotations, and Code
        Text: Addresses, Definitions, and Editorial
        Text: Time, Mark
        Sectioning        
        Embedded Content: Video, Audio, and Canvas
-------------------------------------------------------------------------------

        HTML Entities

http://www.w3schools.com/html/html_entities.asp
http://www.w3schools.com/charsets/ref_utf_symbols.asp

<!-- Unicode symbol \u20bd: -->
&#x20bd;
-------------------------------------------------------------------------------

        DOM

<!-- Put styles in the header, and scripts in the Footer -->
-------------------------------------------------------------------------------

        Lists

<!-- Unordered lists - ul, li
     ordered lists - ol, li
     definition lists - dl, dt (any number of either) -->
-------------------------------------------------------------------------------

        Links

<a href="http://www.htmldog.com"><img src="http://www.htmldog.com/badge1.gif" width="120" height="90" alt="HTML Dog"></a>

<a href="#top">Click me to go to the top of the page</a>

<h2 id="moss">Moss</h2>
<a href="#moss">Go to moss</a>

<a href="inept.html" title="Why I'm rubbish at writing link text: An explanation and an apology.">Click here</a> to find out more.</p>
-------------------------------------------------------------------------------
        
        Images

<img src="http://www.htmldog.com/badge1.gif" width="120" height="90" alt="HTML Dog">
<!-- Always specify the width and height of an image. -->
-------------------------------------------------------------------------------

        Tables

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
<!-- The caption element should be used straight after the opening table tag. A caption will appear above the table by default, although you can use CSS caption-side: bottom. -->

 <!-- colgroup and col tags allow you to define the table columns and style them as desired. -->
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
<!-- In this example the styles of the CSS class “alternative” will be applied to the second column, or the second cell in every row. -->

    <colgroup>
        <col>
        <col span="2" class="alternative">
    </colgroup>
<!-- This would apply “alternative” to the last two columns. -->

<!-- thead, tfoot and tbody allow you to separate the table into header, footer and body. -->
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
-------------------------------------------------------------------------------

        Forms

<form action="processingscript.php" method="post">  <!-- method="get" -->
    <input type="text" name="firstname" value="Byron">
    <input type="password" name="password">
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    <input type="checkbox" checked name="areyousheep">
    <textarea name="comments" rows="7" cols="60">Some text</textarea>
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
-------------------------------------------------------------------------------

        HTML5 Forms: Input Types

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

<!-- There are several input types for dates and times: -->
type="datetime"
type="date"
type="month"
type="week"
type="time"
type="datetime-local"
<!-- step, min, and max attributes can be used with dates and times, too, as can the CSS pseudo classes to style according to validity. -->

<input type="color" name="color" value="#ff8800">
-------------------------------------------------------------------------------

        HTML5 Forms: Attributes and Data Lists

<!-- The placeholder attribute can be used with text input fields (and their text-like cousins, such as type="email" and type="number") as well as textarea elements. It is intended as a hint, rather than a label, for which a label element should still be used. -->
<label for="email_address">Email address</label>
<input type="email" placeholder="you@somewhere.com" name="email_address" id="email_address">

<!-- You might want focus to land on a form field when a page loads. -->
<input name="query" autofocus>

<!-- A data list takes the form of a list of suggestions that accompanies a text field: -->
<input name="country" list="country_name">
<datalist id="country_name">
    <option value="Afghanistan">
    <option value="Albania">
    <option value="Algeria">
    <option value="Andorra">
    <!-- etc. -->
</datalist>
-------------------------------------------------------------------------------

        Iframes

<!-- An iframe is used to display a web page within a web page. -->
<iframe src="demo_iframe.htm" width="200" height="200" style="border:5px dotted red"></iframe>

-------------------------------------------------------------------------------


        Span and Div

<!-- span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code. -->
<div id="scissors">
    <p>This is <span class="paper">crazy</span></p>
</div>
-------------------------------------------------------------------------------

        Text: Abbreviations, Quotations, and Code

<p>This web site is about <abbr title="HyperText Markup Language">HTML</abbr></p>

<p>So I asked Bob about quotations on the Web and he said <q>I know as much about quotations as I do about pigeon fancying</q>. Luckily, I found HTML Dog and it said:</p>
<blockquote cite="http://www.htmldog.com/guides/html/intermediate/text/">
    <p>blockquote and q are used for quotations. blockquote is generally used for standalone often multi-line quotations whereas q is used for shorter, in-line quotations.</p>
</blockquote>

<!-- A cite tag can be used to define the title of a work, such as a book. -->
<p>According to <cite>the Bible</cite>, after six days God said <q>screw this for a lark, I'm having a nap</q>.</p>

<!-- In code var can be used for variables, samp for sample output, and kbd for user input. -->
<p>If you add the line <code><var>givevaderachuckle</var> = true;</code> to the <code>destroy_planet</code> subroutine and then type <kbd>ilovejabba</kbd> into the console, the big bad green Death Star laser will etch <samp>Slug Lover!</samp> on the planet's surface.</p>

<!-- pre (preformatted text) is most commonly used for blocks of code. -->
<pre><code>
&lt;div id="intro"&gt;
    &lt;h1&gt;Some heading&lt;/h1&gt;
    &lt;p&gt;Some paragraph paragraph thing thing thingy.&lt;/p&gt;
&lt;/div&gt;
</code></pre>
-------------------------------------------------------------------------------

        Text: Addresses, Definitions, and Editorial

<!-- address should be used specifically for the contact details relating either to the entire web page (and so only used once) or to an article element. -->

<!-- dfn is a definition term and is used to highlight the first use of a term. -->
<dfn title="A mutation that combines two or more sets of chromosomes from different species">allopolyploid</dfn> organism</p>

<!-- ins and del are used to display editorial insertions and deletions respectively. -->
<p>I have decided to <del datetime="2013-01-26">decrease</del> <ins cite="http://www.icecreamforall.com/changeofpolicy/">increase</ins> the amount of free ice cream that the State will provide for its citizens.</p>
-------------------------------------------------------------------------------

        Text: Time, Mark

<p>Written by Doctor Who on <time datetime="2052-11-21">Thursday 21st November 2052</time>.</p>

<!-- Text can be highlighted, as if with a marker pen, using mark. -->
<p>He wants to play with his <mark>Legos</mark></p>


-------------------------------------------------------------------------------

        Sectioning

<!-- An article element can be used to mark up a standalone section of content. 
A section element represents a more general section and could be used to split up an article, or to represent chapters, for example.
header and footer provide further specialized, self-descriptive, sections. -->
<article>
    <header>
        <h1>Alternatively&hellip;</h1>
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

<!-- An aside can be used to represent content that is related the content surrounding it. -->
<section id="main_content">
    <h1>Tixall</h1>
    <p>[All about Tixall]</p>
    <aside>
        <h2>Tixall Obelisk</h2>
        <p>[A short note about Tixall Obelisk]</p>
    </aside>
    <p>[Maybe a bit more about Tixall]</p>
</section>

<!-- nav used to mark up a group of navigation links. -->
<nav id="main_nav">
    <ul>
        <li><a href="/tutorials/">Tutorials</a></li>
        <li><a href="/reference/">Reference</a></li>
    </ul>
</nav>

<!-- figures -->
<figure>
    <img src="obelisk.jpg">
    <figcaption>Tixall Obelisk</figcaption>
</figure>
-------------------------------------------------------------------------------

        Embedded Content: Video, Audio, and Canvas

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

<!-- canvas element is designed to provide a canvas onto which JavaScript can be used to paint dynamic images such as graphs, animated sprites, etc. -->
<canvas id="wittykitty" width="800" height="450">
    <!-- Fall-back content here, just like with video and audio -->
</canvas>
-------------------------------------------------------------------------------

		Other
		
<!--Setting the Viewport-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

