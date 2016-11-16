<!-- TOC depthTo:2 orderedList:true -->

1. [Where To](#where-to)
2. [JavaScript Output](#javascript-output)
3. [Data Types](#data-types)
4. [Objects](#objects)
5. [Scope](#scope)
6. [Events](#events)
7. [Strings](#strings)
8. [Numbers](#numbers)
9. [Math](#math)
10. [Dates](#dates)
11. [Arrays](#arrays)
12. [Booleans](#booleans)
13. [Conditional Statements](#conditional-statements)
14. [Loops](#loops)

<!-- /TOC -->


## Where To

JavaScript can be placed in the `<body>` and the `<head>` sections of an HTML page.  
It is a good idea to place scripts at the bottom of the `<body>` element. This can improve page load, because HTML display is not blocked by scripts loading.

Scripts can also be placed in external files.


## JavaScript Output

[[W3Schools](http://www.w3schools.com/js/js_output.asp)]

JavaScript can "display" data in different ways:
- Writing into an alert box, using `window.alert()`
- Writing into the HTML output using `document.write()` (only for testing)
- Writing into an HTML element, using `innerHTML`
- Writing into the browser console, using `console.log()`


## Data Types

[[W3Schools](http://www.w3schools.com/js/js_datatypes.asp)]

`String`, `Number`, `Boolean`, `Array`, `Object`.

``` javascript
var x1 = 34.00, x2 = 34;  // Numbers
var cars = ["Saab", "Volvo", "BMW"];  // Array  
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};  // Object
```

JavaScript has dynamic types. This means that the same variable can be used as different types:

``` javascript
var x;               // Now x is undefined  
var x = 5;           // Now x is a Number  
var x = "John";      // Now x is a String  
```

You can use the JavaScript `typeof` operator to find the type of a JavaScript variable.

In JavaScript, an array is a special type of object. Therefore `typeof [1,2,3,4]` returns `"object"`


## Objects

[[W3Schools](http://www.w3schools.com/js/js_objects.asp)]

``` javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};  
```

You can access object properties in two ways: 

``` javascript
person.lastName;	// dot notation
person["lastName"]; 	// square bracket notation
```

You access an object method with the following:

``` javascript
name = person.fullName();  
```

JavaScript objects cannot be compared.

Though JavaScript has no classes, you can mimic many of the characteristics with its functions.  
The new keyword allows us to create a new instance of an Object. Remember that functions are objects. In the code brlow, you can think of the function Car as a JavaScript version of a class definition.

``` javascript
function Car() {};
/*
var Car = function() {};
*/
var car1 = new Car();
```


## Scope

[[W3Schools](http://www.w3schools.com/js/js_scope.asp)]

local, global, automatically global


## Events

[[W3Schools](http://www.w3schools.com/js/js_events.asp)]

An HTML event can be something the browser does, or something a user does.

In this example, the code changes the content of its own element (using `this.innerHTML`):

``` html
<button onclick="this.innerHTML=Date()">The time is?</button>
```

It is more common to see event attributes calling functions:

``` html
<button onclick="displayDate()">The time is?</button>  
```


## Strings

[[W3Schools 1](http://www.w3schools.com/js/js_strings.asp)], [[W3Schools 2](http://www.w3schools.com/js/js_string_methods.asp)]

The length of a string is found in the built in property `length`:

``` javascript
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
var sln = txt.length;  
```

Other string properties: `constructor`, `prototype`.

### String Methods

The `indexOf()` method returns the index of the first occurrence of a specified text in a string:

``` javascript
var str = "Please locate where 'locate' occurs!";  
var pos = str.indexOf("locate");  
```

The `lastIndexOf()` method returns the index of the last occurrence of a specified text in a string.  
The `search()` method searches a string for a specified value and returns the position of the match:

``` javascript
var str = "Please locate where 'locate' occurs!";  
var pos = str.search("locate");  
```

There are 3 methods for extracting a part of a string:  
`slice()`, `substring()`, `substr()`.

`slice()` extracts a part of a string and returns the extracted part in a new string:

``` javascript
var str = "Apple, Banana, Kiwi";  
var res = str.slice(7,13);  
// result: Banana  
var str = "Apple, Banana, Kiwi";  
var res = str.slice(-12,-6);  
// result: Banana  
```

Don't use `substring()` and `substr()`.

The `replace()` method replaces a specified value with another value in a string. The `replace()` method can also take a regular expression as the search value.

``` javascript
str = "Please visit Microsoft!";  
var n = str.replace("Microsoft","W3Schools");  
```

A string is converted to upper case with `toUpperCase()` and converted to lower case with `toLowerCase()`.

`concat()` joins two or more strings. The `concat()` method can be used instead of the `+` operator.

``` javascript
var text1 = "Hello";  
var text2 = "World";  
text3 = text1.concat(" ", text2);   
```

The `charAt()` method returns the character at a specified index (position) in a string.  
The `charCodeAt()` method returns the unicode of the character at a specified index in a string.

``` javascript
var str = "HELLO WORLD";  
str.charAt(0);            // returns H   
str.charCodeAt(0);        // returns 72   
```

Accessing a string as an array is unsafe. If you want to read a string as an array, convert it to an array first.  
A string can be converted to an array with the split() method:

``` javascript
var txt = "a,b,c,d,e";   // String  
txt.split(",");          // Split on commas  
txt.split(" ");          // Split on spaces  
txt.split("|");          // Split on pipe   
txt.split("");           // Split in characters   
// If the separator is omitted, the returned array will contain the whole string in index [0].  
```


## Numbers

[[W3Schools 1](http://www.w3schools.com/js/js_numbers.asp)], [[W3Schools 2](http://www.w3schools.com/js/js_number_methods.asp)]

JavaScript numbers are always stored as double precision 64 bit floating point numbers.

Integers are considered accurate up to 15 digits.

The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:

``` javascript
var x = 0.2 + 0.1;         // x will be 0.30000000000000004  
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3  
```

JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

``` javascript
var x = 0xFF;             // x will be 255   
```

By default, Javascript displays numbers as base 10 decimals. But you can use the `toString()` method to output numbers as base 16 (hex), base 8 (octal), or base 2 (binary).

``` javascript
var myNumber = 128;  
myNumber.toString(16);     // returns 80  
myNumber.toString(8);      // returns 200  
myNumber.toString(2);      // returns 10000000  
```

`Infinity` (or `-Infinity`) is the value JavaScript will return if you calculate a number outside the largest possible number. Division by 0 also generates `Infinity`.

``` javascript
var myNumber = 2;  
while (myNumber != Infinity) {          // Execute until Infinity  
    myNumber = myNumber * myNumber;  
}  
  
var x =  2 / 0;          // x will be Infinity  
var y = -2 / 0;          // y will be -Infinity   
```

Trying to do arithmetic with a non-numeric string will result in `NaN` (Not a Number). However, if the string contains a numeric value, the result will be a number:

``` javascript
var x = 100 / "Apple";  // x will be NaN (Not a Number)  
var x = 100 / "10";     // x will be 10  
```

You can use the global JavaScript function `isNaN()` to find out if a value is a number.

``` javascript
var x = 100 / "Apple";  
isNaN(x);               // returns true because x is Not a Number   
```

### Number Properties

Value | Description
- | -
MAX_VALUE 			| Returns the largest number possible in JavaScript
MIN_VALUE 			| Returns the smallest number possible in JavaScript
NEGATIVE_INFINITY 	| Represents negative infinity (returned on overflow)
NaN 				| Represents a "Not-a-Number" value
POSITIVE_INFINITY 	| Represents infinity (returned on overflow)
					|

Number properties belongs to the JavaScript's number object wrapper called `Number`.

``` javascript
var x = Number.MAX_VALUE;  // 1.7976931348623157e+308
var x = 6;
var y = x.MAX_VALUE;  // y becomes undefined  
```

### Number Methods

`toString()` returns a number as a string.  
`toExponential()` returns a string, with a number rounded and written using exponential notation.  
`toFixed()` returns a string, with the number written with a specified number of decimals.  
`toPrecision()` returns a string, with a number written with a specified length.

``` javascript
var x = 123;  
  
x.toString();           // returns 123 from variable x  
(123).toString();       // returns 123 from literal 123  
(100 + 23).toString();  // returns 123 from expression 100 + 23   

x.toExponential(2);     // returns 9.66e+0  
x.toExponential(6);     // returns 9.656000e+0   
  
x.toFixed(0);           // returns 10  
x.toFixed(4);           // returns 9.6560  
x.toFixed(6);           // returns 9.656000   
  
x.toPrecision();        // returns 9.656  
x.toPrecision(4);       // returns 9.656  
x.toPrecision(6);       // returns 9.65600   
```

There are 3 JavaScript functions that can be used to convert variables to numbers:  
`Number()`, `parseInt()`, `parseFloat()`.

`Number()`, can be used to convert JavaScript variables to numbers:

``` javascript
x = true;  
Number(x);        // returns 1  
x = false;       
Number(x);        // returns 0  
x = new Date();  
Number(x);        // returns 1404568027739  
x = "10"  
Number(x);        // returns 10  
x = "10 20"  
Number(x);        // returns NaN   
```

`parseInt()` and `parseFloat()` parse a string and return a number. Spaces are allowed. Only the first number is returned.

``` javascript
parseInt("10");         // returns 10  
parseInt("10.33");      // returns 10  
parseInt("10 20 30");   // returns 10  
parseInt("10 years");   // returns 10  
parseInt("years 10");   // returns NaN  
  
parseFloat("10");        // returns 10  
parseFloat("10.33");     // returns 10.33  
parseFloat("10 20 30");  // returns 10  
parseFloat("10 years");  // returns 10  
parseFloat("years 10");  // returns NaN   
```

`valueOf()` returns a number as a number. The `valueOf()` method is used internally in JavaScript to convert Number objects to primitive values. There is no reason to use it in your code.

In JavaScript, all data types have a `valueOf()` and a `toString()` method.


## Math

`Math.random()` returns a random number between 0 (inclusive), and 1 (exclusive).

`Math.min()` and `Math.max()` can be used to find the lowest or highest value in a list of arguments:

``` javascript
Math.min(0, 150, 30, 20, -8, -200);      // returns -200   
Math.max(0, 150, 30, 20, -8, -200);      // returns 150   
```

`Math.round()` rounds a number to the nearest integer.  
Math.ceil() rounds a number up to the nearest integer.  
ath.floor() rounds a number down to the nearest integer.

``` javascript
Math.round(4.7);            // returns 5  
Math.round(4.4);            // returns 4   
Math.ceil(4.4);             // returns 5   
Math.floor(4.7);            // returns 4   
Math.floor(Math.random() * 11);   // returns a random number between 0 and 10   
```

### Math Constants

``` javascript
Math.E          // returns Euler's number  
Math.PI         // returns PI  
Math.SQRT2      // returns the square root of 2  
Math.SQRT1_2    // returns the square root of 1/2  
Math.LN2        // returns the natural logarithm of 2  
Math.LN10       // returns the natural logarithm of 10  
Math.LOG2E      // returns base 2 logarithm of E  
Math.LOG10E     // returns base 10 logarithm of E   
```

### Math Object Methods

[[W3Schools](http://www.w3schools.com/jsref/jsref_obj_math.asp)]


## Dates

[[W3Schools 1](http://www.w3schools.com/js/js_dates.asp)],  [[W3Schools 2](http://www.w3schools.com/js/js_date_formats.asp)], [[W3Schools 3](http://www.w3schools.com/js/js_date_methods.asp)]

A JavaScript date can be written as a string or a number:

`Wed Oct 14 2015 17:11:07 GMT+0700` (SE Asia Standard Time)  
`1444817467948` (number of milliseconds since January 1, 1970, 00:00:00)

Date objects are created with the new `Date()` constructor. There are 4 ways of initiating a date:

``` javascript
new Date()  
new Date(milliseconds)  
new Date(dateString)  
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```


## Arrays

[[W3Schools 1](http://www.w3schools.com/js/js_arrays.asp)], [[W3Schools 2](http://www.w3schools.com/js/js_array_methods.asp)], [[W3Schools 3](http://www.w3schools.com/js/js_array_methods.asp)]

``` javascript
1.	var cars = ["Saab", "Volvo", "BMW"];  
2.	var cars = new Array("Saab", "Volvo", "BMW");  // no need to use  
3.	var name = cars[0];  
4.	cars[0] = "Opel";   // modifies the first element in cars  
```

Arrays are a special type of objects. Because of this, you can have variables of different types in the same Array.

JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes. 

The length property provides an easy way to append a new element to an array:

``` javascript
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruit  
```

Looping array elements:

``` javascript
1.	var index;
2.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
3.	for (index = 0; index < fruits.length; index++) {  
4.	    text += fruits[index];  
5.	}  
```

When to use arrays. When to use objects:

- JavaScript does not support associative arrays.
- You should use objects when you want the element names to be strings (text).
- You should use arrays when you want the element names to be numbers.

How do I know if a variable is an array (because `typeOf` returns object)?

``` javascript
1.	function isArray(myArray) {  
2.	    return myArray.constructor.toString().indexOf("Array") > -1;  
3.	}  
```

### Array Methods

The `valueOf()` method is the default behavior for an array. It returns an array as a string.

For JavaScript arrays, `valueOf()` and `toString()` are equal.

``` javascript
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	document.getElementById("demo").innerHTML = fruits.valueOf();   
3.	document.getElementById("demo").innerHTML = fruits.toString();  
```

The `join()` method also joins all array elements into a string. It behaves just like `toString()`, but you can specify the separator:

``` javascript
1.	var fruits = ["Banana", "Orange","Apple", "Mango"];  
2.	document.getElementById("demo").innerHTML = fruits.join(" * ");  
```

The `pop()` method removes the last element from an array and returns the value that was "popped out".

``` javascript
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits.pop();              // Removes the last element ("Mango") from fruits  
3.	var x = fruits.pop();      // the value of x is "Apple"  
```

The `push()` method adds a new element to an array (at the end) and returns the new array length.

``` javascript
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits.push("Kiwi");            //  Adds a new element ("Kiwi") to fruits  
3.	var x = fruits.push("Peach");   //  the value of x is 6  
```

The `shift()` method removes the first element of an array, and "shifts" all other elements one place up. It returns the string that was "shifted out"  
The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements. It returns the new array length.

``` javascript
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits.shift();            // Removes the first element "Banana" from fruits   
3.	  
4.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
5.	fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits   
```

Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator `delete`. Using `delete` on array elements leaves undefined holes in the array. Use pop() or shift() instead.

The `splice()` method can be used to add new items to an array or to remove items: 

``` javascript
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits.splice(2, 0, "Lemon", "Kiwi");  
3.	/* 
4.	The first parameter (2) defines the position where new elements should be added (spliced in). 
5.	The second parameter (0) defines how many elements should be removed. 
6.	The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. 
7.	*/  
8.	  
9.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
10.	fruits.splice(0, 1);        // Removes the first element of fruits   
```

The `sort()` method sorts an array alphabetically.  
The `reverse()` method reverses the elements in an array. You can use it to sort an array in descending order.

``` javascript
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits.sort();            // Sorts the elements of fruits   
3.	fruits.reverse();         // Reverses the order of the elements  
```

The `concat()` method creates a new array by concatenating two arrays. `concat()` can take any number of array arguments.

``` javascript
1.	var arr1 = ["Cecilie", "Lone"];  
2.	var arr2 = ["Emil", "Tobias","Linus"];  
3.	var arr3 = ["Robin", "Morgan"];  
4.	var myChildren = arr1.concat(arr2, arr3);     // Concatenates arr1 with arr2 and arr3   
```

The `slice()` method slices out a piece of an array into a new array:

``` javascript
1.	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];  
2.	var citrus = fruits.slice(1, 3);  
```


## Booleans

[[W3Schools 1](http://www.w3schools.com/js/js_booleans.asp)], [[W3Schools 2](http://www.w3schools.com/js/js_comparisons.asp)]


## Conditional Statements

([W3Schools 1](http://www.w3schools.com/js/js_if_else.asp)], [[W3Schools 2](http://www.w3schools.com/js/js_switch.asp)]


## Loops

[[W3Schools 1](http://www.w3schools.com/js/js_loop_for.asp)], [[W3Schools 2](http://www.w3schools.com/js/js_loop_while.asp)]

JavaScript supports different kinds of loops:  
`for`, `for/in`, `while`, `do/while`

``` javascript
for (i = 0; i < 5; i++) {  
     text += "The number is " + i + "<br>";  
}  
```

``` javascript
var person = {fname:"John", lname:"Doe", age:25};   
  
var text = "";  
var x;  
for (x in person) {  
     text += person[x];  
}  
```

``` javascript
while (i < 10) {  
     text += "The number is " + i;  
     i++;  
}  
```

``` javascript
do {  
     text += "The number is " + i;  
     i++;  
}  
while (i < 10);  
```
