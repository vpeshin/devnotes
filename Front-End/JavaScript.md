## 1. Where To

JavaScript can be placed in the `<body>` and the `<head>` sections of an HTML page.\
It is a good idea to place scripts at the bottom of the `<body>` element. This can improve page load, because HTML display is not blocked by scripts loading.

Scripts can also be placed in external files.


## 2. JavaScript Output ([1](http://www.w3schools.com/js/js_output.asp))

JavaScript can "display" data in different ways:
- Writing into an alert box, using `window.alert()`
- Writing into the HTML output using `document.write()` (only for testing)
- Writing into an HTML element, using `innerHTML`
- Writing into the browser console, using `console.log()`


## 3. JavaScript Data Types ([1](http://www.w3schools.com/js/js_datatypes.asp))

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


## 4. Objects ([1](http://www.w3schools.com/js/js_objects.asp))

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

Though JavaScript has no classes, you can mimic many of the characteristics with its functions.\
The new keyword allows us to create a new instance of an Object. Remember that functions are objects. In the code brlow, you can think of the function Car as a JavaScript version of a class definition.

``` javascript
function Car() {};
/*
var Car = function() {};
*/
var car1 = new Car();
```

## 5. Scope ([1](http://www.w3schools.com/js/js_scope.asp))

local, global, automatically global


## 6. Events ([1](http://www.w3schools.com/js/js_events.asp))

An HTML event can be something the browser does, or something a user does.

In this example, the code changes the content of its own element (using `this.innerHTML`):

``` html
<button onclick="this.innerHTML=Date()">The time is?</button>
```

It is more common to see event attributes calling functions:

``` html
<button onclick="displayDate()">The time is?</button>  
```


## 7. Strings ([1](http://www.w3schools.com/js/js_strings.asp)) ([2](http://www.w3schools.com/js/js_string_methods.asp))

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

The `lastIndexOf()` method returns the index of the last occurrence of a specified text in a string.\
The `search()` method searches a string for a specified value and returns the position of the match:

``` javascript
var str = "Please locate where 'locate' occurs!";  
var pos = str.search("locate");  
```

There are 3 methods for extracting a part of a string:\
`slice(start, end)`\
`substring(start, end)`\
`substr(start, length)`\
You need only first.

`slice()` extracts a part of a string and returns the extracted part in a new string:

``` javascript
var str = "Apple, Banana, Kiwi";  
var res = str.slice(7,13);  
// result: Banana  
var str = "Apple, Banana, Kiwi";  
var res = str.slice(-12,-6);  
// result: Banana  
```

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

The `charAt()` method returns the character at a specified index (position) in a string.\
The `charCodeAt()` method returns the unicode of the character at a specified index in a string.

``` javascript
var str = "HELLO WORLD";  
str.charAt(0);            // returns H   
str.charCodeAt(0);        // returns 72   
```

Accessing a string as an array is unsafe. If you want to read a string as an array, convert it to an array first.\
A string can be converted to an array with the split() method:

``` javascript
var txt = "a,b,c,d,e";   // String  
txt.split(",");          // Split on commas  
txt.split(" ");          // Split on spaces  
txt.split("|");          // Split on pipe   
txt.split("");           // Split in characters   
// If the separator is omitted, the returned array will contain the whole string in index [0].  
```


## 8. Numbers ([1](http://www.w3schools.com/js/js_numbers.asp)) ([2](http://www.w3schools.com/js/js_number_methods.asp))

JavaScript numbers are always stored as double precision 64 bit floating point numbers.

Integers are considered accurate up to 15 digits.

The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:

``` javascript
var x = 0.2 + 0.1;         // x will be 0.30000000000000004  
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3  
```

JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

1.	var x = 0xFF;             // x will be 255   

By default, Javascript displays numbers as base 10 decimals. But you can use the toString() method to output numbers as base 16 (hex), base 8 (octal), or base 2 (binary).

1.	var myNumber = 128;  
2.	myNumber.toString(16);     // returns 80  
3.	myNumber.toString(8);      // returns 200  
4.	myNumber.toString(2);      // returns 10000000  

Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number. Division by 0 (zero) also generates Infinity.

1.	var myNumber = 2;  
2.	while (myNumber != Infinity) {          // Execute until Infinity  
3.	    myNumber = myNumber * myNumber;  
4.	}  
5.	  
6.	var x =  2 / 0;          // x will be Infinity  
7.	var y = -2 / 0;          // y will be -Infinity   

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number). However, if the string contains a numeric value , the result will be a number:

1.	var x = 100 / "Apple";  // x will be NaN (Not a Number)  
2.	var x = 100 / "10";     // x will be 10  

You can use the global JavaScript function isNaN() to find out if a value is a number.

1.	var x = 100 / "Apple";  
2.	isNaN(x);               // returns true because x is Not a Number   

Number Properties

MAX_VALUE			Returns the largest number possible in JavaScript
MIN_VALUE			Returns the smallest number possible in JavaScript
NEGATIVE_INFINITY		Represents negative infinity (returned on overflow)
NaN				Represents a "Not-a-Number" value
POSITIVE_INFINITY		Represents infinity (returned on overflow)

Number properties belongs to the JavaScript's number object wrapper called Number.
1.	var x = Number.MAX_VALUE;  
2.	  
3.	var x = 6;  
4.	var y = x.MAX_VALUE;    // y becomes undefined  

Number Methods

toString() returns a number as a string.
toExponential() returns a string, with a number rounded and written using exponential notation.
toFixed() returns a string, with the number written with a specified number of decimals.
toPrecision() returns a string, with a number written with a specified length

1.	var x = 123;  
2.	  
3.	x.toString();            // returns 123 from variable x  
4.	(123).toString();        // returns 123 from literal 123  
5.	(100 + 23).toString();   // returns 123 from expression 100 + 23   
6.	  
7.	x.toExponential(2);      // returns 9.66e+0  
8.	x.toExponential(6);      // returns 9.656000e+0   
9.	  
10.	x.toFixed(0);           // returns 10  
11.	x.toFixed(4);           // returns 9.6560  
12.	x.toFixed(6);           // returns 9.656000   
13.	  
14.	x.toPrecision();        // returns 9.656  
15.	x.toPrecision(4);       // returns 9.656  
16.	x.toPrecision(6);       // returns 9.65600   

There are 3 JavaScript functions that can be used to convert variables to numbers.

Number(), can be used to convert JavaScript variables to numbers:

1.	x = true;  
2.	Number(x);        // returns 1  
3.	x = false;       
4.	Number(x);        // returns 0  
5.	x = new Date();  
6.	Number(x);        // returns 1404568027739  
7.	x = "10"  
8.	Number(x);        // returns 10  
9.	x = "10 20"  
10.	Number(x);        // returns NaN   

parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.
parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned.

1.	parseInt("10");         // returns 10  
2.	parseInt("10.33");      // returns 10  
3.	parseInt("10 20 30");   // returns 10  
4.	parseInt("10 years");   // returns 10  
5.	parseInt("years 10");   // returns NaN  
6.	  
7.	parseFloat("10");        // returns 10  
8.	parseFloat("10.33");     // returns 10.33  
9.	parseFloat("10 20 30");  // returns 10  
10.	parseFloat("10 years");  // returns 10  
11.	parseFloat("years 10");  // returns NaN   

valueOf() returns a number as a number.
The valueOf() method is used internally in JavaScript to convert Number objects to primitive values. There is no reason to use it in your code.

In JavaScript, all data types have a valueOf() and a toString() method.

9.	Math

Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

1.	Math.random();       // returns a random number   

Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

1.	Math.min(0, 150, 30, 20, -8, -200);      // returns -200   
2.	Math.max(0, 150, 30, 20, -8, -200);      // returns 150   

Math.round() rounds a number to the nearest integer.
Math.ceil() rounds a number up to the nearest integer.
ath.floor() rounds a number down to the nearest integer.

1.	Math.round(4.7);            // returns 5  
2.	Math.round(4.4);            // returns 4   
3.	Math.ceil(4.4);             // returns 5   
4.	Math.floor(4.7);            // returns 4   
5.	Math.floor(Math.random() * 11);   // returns a random number between 0 and 10   

Math Constants

1.	Math.E          // returns Euler's number  
2.	Math.PI         // returns PI  
3.	Math.SQRT2      // returns the square root of 2  
4.	Math.SQRT1_2    // returns the square root of 1/2  
5.	Math.LN2        // returns the natural logarithm of 2  
6.	Math.LN10       // returns the natural logarithm of 10  
7.	Math.LOG2E      // returns base 2 logarithm of E  
8.	Math.LOG10E     // returns base 10 logarithm of E   

Math Object Methods
[1](http://www.w3schools.com/jsref/jsref_obj_math.asp


## 10. Dates
[1](http://www.w3schools.com/js/js_dates.asp
[1](http://www.w3schools.com/js/js_date_formats.asp
[1](http://www.w3schools.com/js/js_date_methods.asp
A JavaScript date can be written as a string or a number:
Wed Oct 14 2015 17:11:07 GMT+0700 (SE Asia Standard Time)
1444817467948 (number of milliseconds since January 1, 1970, 00:00:00)
Date objects are created with the new Date() constructor. There are 4 ways of initiating a date:
1.	new Date()  
2.	new Date(milliseconds)  
3.	new Date(dateString)  
4.	new Date(year, month, day, hours, minutes, seconds, milliseconds)
11.	Arrays
[1](http://www.w3schools.com/js/js_arrays.asp
[1](http://www.w3schools.com/js/js_array_methods.asp
[1](http://www.w3schools.com/js/js_array_methods.asp
1.	var cars = ["Saab", "Volvo", "BMW"];  
2.	var cars = new Array("Saab", "Volvo", "BMW");  // no need to use  
3.	var name = cars[0];  
4.	cars[0] = "Opel";   // modifies the first element in cars  
Arrays are a special type of objects. Because of this, you can have variables of different types in the same Array.
JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes. 
Array Properties
1.	var x = cars.length;         // The length property returns the number of elements in cars  
2.	var y = cars.sort();         // The sort() method sort cars in alphabetical order   
The length property provides an easy way to append a new element to an array:
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruit  
Looping Array Elements
1.	var index;
2.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
3.	for (index = 0; index < fruits.length; index++) {  
4.	    text += fruits[index];  
5.	}  
When to Use Arrays. When to use Objects.
- JavaScript does not support associative arrays.
- You should use objects when you want the element names to be strings (text).
- You should use arrays when you want the element names to be numbers.
How do I know if a variable is an array (because typeOf returns object)?
This function always returns true if the argument is an array:
1.	function isArray(myArray) {  
2.	    return myArray.constructor.toString().indexOf("Array") > -1;  
3.	}  
Array Methods
The valueOf() method is the default behavior for an array. It returns an array as a string.
For JavaScript arrays, valueOf() and toString() are equal.
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	document.getElementById("demo").innerHTML = fruits.valueOf();   
3.	document.getElementById("demo").innerHTML = fruits.toString();  
The join() method also joins all array elements into a string. It behaves just like toString(), but you can specify the separator:
1.	var fruits = ["Banana", "Orange","Apple", "Mango"];  
2.	document.getElementById("demo").innerHTML = fruits.join(" * ");  
The pop() method removes the last element from an array.
The pop() method returns the value that was "popped out".
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits.pop();              // Removes the last element ("Mango") from fruits  
3.	var x = fruits.pop();      // the value of x is "Apple"  
The push() method adds a new element to an array (at the end).
The push() method returns the new array length.
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits.push("Kiwi");            //  Adds a new element ("Kiwi") to fruits  
3.	var x = fruits.push("Peach");   //  the value of x is 6  
The shift() method removes the first element of an array, and "shifts" all other elements one place up.
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits.shift();            // Removes the first element "Banana" from fruits   
3.	  
4.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
5.	fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits   
The shift() method returns the string that was "shifted out".
The unshift() method returns the new array length.
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete.
Using delete on array elements leaves undefined holes in the array. Use pop() or shift() instead.
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	delete fruits[0];           // Changes the first element in fruits to undefined  
The splice() method can be used to add new items to an array or to remove items: 
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
The sort() method sorts an array alphabetically.
The reverse() method reverses the elements in an array. You can use it to sort an array in descending order.
1.	var fruits = ["Banana", "Orange", "Apple", "Mango"];  
2.	fruits.sort();            // Sorts the elements of fruits   
3.	fruits.reverse();         // Reverses the order of the elements  
The concat() method creates a new array by concatenating two arrays.
The concat() method can take any number of array arguments.
1.	var arr1 = ["Cecilie", "Lone"];  
2.	var arr2 = ["Emil", "Tobias","Linus"];  
3.	var arr3 = ["Robin", "Morgan"];  
4.	var myChildren = arr1.concat(arr2, arr3);     // Concatenates arr1 with arr2 and arr3   
The slice() method slices out a piece of an array into a new array:
1.	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];  
2.	var citrus = fruits.slice(1, 3);  
12.	Booleans 
[1](http://www.w3schools.com/js/js_booleans.asp
[1](http://www.w3schools.com/js/js_comparisons.asp
13.	Conditional Statements
[1](http://www.w3schools.com/js/js_if_else.asp
[1](http://www.w3schools.com/js/js_switch.asp
14.	Loops
[1](http://www.w3schools.com/js/js_loop_for.asp
[1](http://www.w3schools.com/js/js_loop_while.asp
JavaScript supports different kinds of loops:
for - loops through a block of code a number of times
for/in - loops through the properties of an object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
1.	for (i = 0; i < 5; i++) {  
2.	     text += "The number is " + i + "<br>";  
3.	}  

1.	var person = {fname:"John", lname:"Doe", age:25};   
2.	  
3.	var text = "";  
4.	var x;  
5.	for (x in person) {  
6.	     text += person[x];  
7.	}  

1.	while (i < 10) {  
2.	     text += "The number is " + i;  
3.	     i++;  
4.	}  

1.	do {  
2.	     text += "The number is " + i;  
3.	     i++;  
4.	}  
5.	while (i < 10);  

