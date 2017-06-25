<!-- TOC depthTo:2 orderedList:true -->

1. [Where To](#where-to)
2. [JavaScript Output](#javascript-output)
3. [Data Types](#data-types)
4. [Objects](#objects)
5. [OOP in JavaScript](#oop-in-javascript)
6. [Arrays](#arrays)
7. [Functions](#functions)
8. [Scope](#scope)
9. [Strings](#strings)
10. [Numbers](#numbers)
11. [Math](#math)
12. [Dates](#dates)
13. [Booleans](#booleans)
14. [Conditional Statements](#conditional-statements)
15. [Loops](#loops)
16. [Keyword `this`](#keyword-this)
17. [The DOM (Document Object Model)](#the-dom-document-object-model)
18. [Events](#events)
19. [Useful Resources](#useful-resources)

<!-- /TOC -->


## Where To

JavaScript can be placed in the `<body>` and the `<head>` sections of an HTML page.  
It is a good idea to place scripts at the bottom of the `<body>` element. This can improve page load, because HTML display is not blocked by scripts loading.

Scripts can also be placed in external files.

``` js
<script src="myScript.js"></script>
```


## JavaScript Output

[[W3Schools](http://www.w3schools.com/js/js_output.asp)]

JavaScript can "display" data in different ways:
- Writing into an alert box, using `window.alert()`
- Writing into the HTML output using `document.write()` (only for testing)
- Writing into an HTML element, using `innerHTML`
- Writing into the browser console, using `console.log()`


## Data Types

[[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)]

- Six data types that are *primitives*:
  - `Boolean`
  - `Null`
  - `Undefined`
  - `Number`
  - `String`
  - `Symbol (new in ECMAScript 6)`
- and `Object`

`Arrays` are regular objects for which there is a particular relationship between integer-key-ed properties and the `length` property. Additionally, arrays inherit from `Array.prototype` which provides to them a handful of convenient methods to manipulate arrays like `indexOf` or `push`. This makes arrays a perfect candidate to represent lists or sets.

``` javascript
var x1 = 34.00, x2 = 34;  // Numbers
var cars = ["Saab", "Volvo", "BMW"];  // Object (Array)
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};  // Object
```

JavaScript has dynamic types. This means that the same variable can be used as different types:

``` javascript
var x;               // Now x is undefined  
var x = 5;           // Now x is a Number  
var x = "John";      // Now x is a String  
```

You can use the JavaScript `typeof` operator to find the type of a JavaScript variable.


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


## OOP in JavaScript

Though JavaScript has no classes, you can mimic many of the characteristics with its functions.  
The `new` keyword allows us to create a new instance of an `Object`. Remember that functions are objects. In the code below, you can think of the function `Car` as a JavaScript version of a class definition.

```js
function House(bedrooms, bathrooms, numSqft){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

var firstHouse = new House(2,2,1000);
firstHouse.bedrooms; // 2
firstHouse.bathrooms; // 2
firstHouse.numSqft; // 1000
```

```js
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + " just barked!");
  }  
}

var rusty = new Dog('Rusty', 3); 
var fido = new Dog('Fido', 1);

rusty.bark(); // Rusty just barked!
fido.bark(); // Fido just barked!
```

Multiple constructors:

```js
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Motorcycle(make, model, year){
  // using call
  Car.call(this, make, model, year)
  this.numWheels = 2;
}

function Motorcycle(make, model, year){
  // using apply
  Car.apply(this, [make,model,year]);
  this.numWheels = 2;
}

function Motorcycle(make, model, year){
  // even better using apply with arguments
  Car.apply(this, arguments);
  this.numWheels = 2;
}
```

### Prototypes

Every constructor function has a property on it called `prototype`, which is an object.  
The prototype object has a property on it called `constructor`, which points back to the constructor function.  
Anytime an object is created using the `new` keyword, a property called `__proto__` gets created, linking the object and the prototype property of the constructor function.

```js
// this is the constructor function
function Person(name){
  this.name = name;
}

// this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

// since we used the new keyword, we have established
// a link between the object and the prototype property
// we can access that using __proto__
elie.__proto__ === Person.prototype; // true
colt.__proto__ === Person.prototype; // true

// The Person.prototype object also has a property
// called constructor which points back to the function
Person.prototype.constructor === Person; // true
```

Refactoring using prototypes:

```js
function Person(name){
  this.name = name;
  this.sayHi = function(){
      return "Hi " + this.name; 
  }
}

elie = new Person("Elie");
elie.sayHi(); // Hi Elie

// now this code works, but it is inefficient
// every time we make an object using the new keyword we have to redefine this function
// but its the same for everyone! Let's put it on the prototype instead!
function Person(name){
  this.name = name;
}

Person.prototype.sayHi = function(){
  return "Hi " + this.name; 
}

elie = new Person("Elie");
elie.sayHi(); // Hi Elie
```

Another example:

```js
function Vehicle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.isRunning = false;

Vehicle.prototype.turnOn = function(){
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
  this.isRunning = false;
}

Vehicle.prototype.honk = function(){
  if(this.isRunning){
      return "beep!";
  }
}
```

### Closures

A closure is a function that makes use of variables defined in outer functions that have previously returned.

```js
function outer(a){
  return function inner(b){
      // the inner function is making use of the variable "a"
      // which was defined in an outer function called "outer"
      // and by the time this is called, that outer function has returned
      // this function called "inner" is a closure!
      return a + b
  }
}

outer(5)(5) // 10

var storeOuter = outer(5)
storeOuter(10) // 15
```

We can use closures to define private variables (which JavaScript doesn't have built in)

```js
function counter(){
  var count = 0
  return function(){
      return ++count
  }
}

counter1 = counter()
counter1() // 1
counter1() // 2

counter2 = counter()
counter2() // 1
counter2() // 2

counter1() // 3 this is not affected by counter2!

count // ReferenceError: count is not defined - because it is private!
```

```js
function classRoom(){
  var instructors = ["Colt", "Elie"]
  return {
      getInstructors: function(){
          return instructors;
      },
      addInstructor: function(instructor){
          instructors.push(instructor);
          return instructors;
      }
  }
}

course1 = classRoom()
course1.getInstructors() // ["Elie", "Colt"]
course1.addInstructor("Ian") // ["Elie", "Colt","Ian"]
course1.getInstructors() // ["Elie", "Colt", "Ian"]

course2 = classRoom()
course2.getInstructors() // ["Elie", "Colt"] - not affected by course1

// we also have NO access to the instructors variable
// which makes it private - no one can modify it...you're stuck with Colt and Elie
```


## Arrays

[[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)]

``` javascript
var cars = ["Saab", "Volvo", "BMW"];  
var cars = new Array("Saab", "Volvo", "BMW");  // no need to use  
var name = cars[0];  
cars[0] = "Opel";   // modifies the first element in cars  
```

Arrays are a special type of objects. Because of this, you can have variables of different types in the same Array.

JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes.

The `length` property provides an easy way to append a new element to an array:

``` javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits
```

How do I know if a variable is an array (because `typeOf` returns object)?

``` javascript
function isArray(myArray) {  
    return myArray.constructor.toString().indexOf("Array") > -1;  
}  
```

Array of objects:

``` js
var posts = [
  {
    title: "cats are mediocre",
    author: "Colt",
    comments: ["Awesome post", "terrible post"]
  },
  {
    title: "cats are actually awesome",
    author: "Cat Luvr",
    comments: ["<3", "Go to hell"]
  },
]

posts[1].comments[1]; // "Go to hell"
```

### Object methods

``` js
var cats = {
  speak: function() {
    return "MEOW";
  }
};

cat.speak(); // "MEOW"
```

### Array Iteration

You can go through every element of array using `for` loop or [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method that takes function as an argument:

``` javascript
var index;
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
for (index = 0; index < fruits.length; index++) {  
    text += fruits[index];  
}  
```

``` javascript
var a = ['a', 'b', 'c'];

a.forEach(function(element) {
    console.log(element);
});


var pets = ["Dog", "Cat", "Rabbit"];

pets.forEach(alert);
```

### Array Methods

The `valueOf()` method is the default behavior for an array. It returns an array as a string.

For JavaScript arrays, `valueOf()` and `toString()` are equal.

``` javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
document.getElementById("demo").innerHTML = fruits.valueOf();   
document.getElementById("demo").innerHTML = fruits.toString();  
```

The `join()` method also joins all array elements into a string. It behaves just like `toString()`, but you can specify the separator:

``` javascript
var fruits = ["Banana", "Orange","Apple", "Mango"];  
document.getElementById("demo").innerHTML = fruits.join(" * ");  
```

The `pop()` method removes the last element from an array and returns the value that was "popped out".

``` javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.pop();              // Removes the last element ("Mango") from fruits  
var x = fruits.pop();      // the value of x is "Apple"  
```

The [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method adds a new element to an array (at the end) and returns the new array length.

``` javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.push("Kiwi");            //  Adds a new element ("Kiwi") to fruits  
var x = fruits.push("Peach");   //  the value of x is 6  
```

The `shift()` method removes the first element of an array, and "shifts" all other elements one place up. It returns the string that was "shifted out"  
The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements. It returns the new array length.

``` javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.shift();            // Removes the first element "Banana" from fruits   
  
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits   
```

Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator `delete`. Using `delete` on array elements leaves undefined holes in the array. Use pop() or shift() instead.

The [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method can be used to add new items to an array or to remove items: 

``` javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.splice(2, 0, "Lemon", "Kiwi");  
/* 
The first parameter (2) defines the position where new elements should be added (spliced in). 
The second parameter (0) defines how many elements should be removed. 
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. 
*/  
  
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
	fruits.splice(0, 1);        // Removes the first element of fruits   
```

The `sort()` method sorts an array alphabetically.  
The `reverse()` method reverses the elements in an array. You can use it to sort an array in descending order.

``` javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.sort();            // Sorts the elements of fruits   
fruits.reverse();         // Reverses the order of the elements  
```

The `concat()` method creates a new array by concatenating two arrays. `concat()` can take any number of array arguments.

``` javascript
var arr1 = ["Cecilie", "Lone"];  
var arr2 = ["Emil", "Tobias","Linus"];  
var arr3 = ["Robin", "Morgan"];  
var myChildren = arr1.concat(arr2, arr3);     // Concatenates arr1 with arr2 and arr3   
```

The [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method slices out a piece of an array into a new array:

``` javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];  
var citrus = fruits.slice(1, 3);  
```

The `map()` method creates a new array with the results of calling a provided function on every element in this array:

``` js
var numbers = [1, 5, 10, 15];
var roots = numbers.map(function(x){
   return x * 2;
});
// roots is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
```

The [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method creates a new array with all elements that pass the test implemented by the provided function.

``` js
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```


## Functions

[[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)]

Functions can be defined with two different syntaxes:

``` javascript
// Function declaration
function myFunc(param1, param2, ...) {
    // code goes here
}
```

``` javascript
// Function expression
var myFunc = function(param1, param2, ...) {
    // code goes here
}
```

Anonymous function as an argument to higher order function:

``` js
setInterval(function(){
    console.log("I am anonymous fuction");
}, 2000)
```

Custom `myForEach()` function:

``` js
// VERSION 1
function myForEach(arr, func){
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
myForEach(colors, function(color){
	console.log(color);
});

// VERSION 2 
Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++) {
   func(this[i]);
  }
};

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
colors.myForEach(function(color){
	console.log(color);
});
```

First class functions:

```js
function add(first, second, callback) {
  console.log(first + second);
  callback();
}

add(4, 5, function() {
  console.log('done');
});
// 9
// done
```


## Scope

[[W3Schools](http://www.w3schools.com/js/js_scope.asp)]

local, global, automatically global


## Strings

[[W3Schools 1](http://www.w3schools.com/js/js_strings.asp)],
[[W3Schools 2](http://www.w3schools.com/js/js_string_methods.asp)]

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

[[W3Schools 1](http://www.w3schools.com/js/js_numbers.asp)],
[[W3Schools 2](http://www.w3schools.com/js/js_number_methods.asp)]

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

[[W3Schools 1](http://www.w3schools.com/js/js_dates.asp)],
[[W3Schools 2](http://www.w3schools.com/js/js_date_formats.asp)],
[[W3Schools 3](http://www.w3schools.com/js/js_date_methods.asp)]

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


## Booleans

[[W3Schools 1](http://www.w3schools.com/js/js_booleans.asp)],
[[W3Schools 2](http://www.w3schools.com/js/js_comparisons.asp)]


## Conditional Statements

([W3Schools 1](http://www.w3schools.com/js/js_if_else.asp)],
[[W3Schools 2](http://www.w3schools.com/js/js_switch.asp)]

Use `===` for comparison (to compare value AND type).

JavaScript has a ternary operator for conditional expressions:

``` js
var allowed = (age > 18) ? "yes" : "no";
```


## Loops

[[W3Schools 1](http://www.w3schools.com/js/js_loop_for.asp)],
[[W3Schools 2](http://www.w3schools.com/js/js_loop_while.asp)]

JavaScript supports different kinds of loops:  
`for`, `for-in`, `while`, `do/while`

``` javascript
for (i = 0; i < 5; i++) {  
     text += "The number is " + i + "<br>";  
}  
```

`for-in` loops are considered to be general bad practice when writing JavaScript because it has some inconsistent behavior with arrays and objects.

``` javascript
var person = {fname:"John", lname:"Doe", age:25};   
  
var text = "";  
var x;

for (x in person) {      // item x in object person
     text += person[x];  
}    // => JohnDoe25
```

``` js
// Check if string contains "yes"
var answer = prompt("are we there yet?");

while(answer.indexOf("yes" || "yeah") === -1) {
  var answer = prompt("are we there yet?");
}

alert("Yes, we made it!");
```

``` javascript
do {  
     text += "The number is " + i;  
     i++;  
}  
while (i < 10);  
```


## Keyword `this`

### 1. Global Context

When `this` is not inside of a declared object, it's a value that refers to a global object `Window`. Bad practice.

### 2. Implicit/Object

When `this` is inside of a declared object.

```js
var person = {
    firstName: "Elie",
    sayHi: function(){
        return "Hi " + this.firstName
    },
    determineContext: function(){
        return this === person
    }
}

person.sayHi() // "Hi Elie"
person.determineContext() // true
```

Nested objects:

```js
var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }        
    }
}

person.sayHi() // "Hi Colt"
person.determineContext() // true

// but what is the value of the keyword this right now?
person.dog.sayHello() // "Hello undefined"
person.dog.determineContext() // false
```

### 3. Explicit

`call()`, `apply()` and `bind()` are used to explicitly set the value of `this`.

```js
What about Apply?
var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName 
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just calculated " + (a+b+c+d);
    }
}

var elie = {
    firstName: "Elie"
}

colt.sayHi() // Hi Colt
colt.sayHi.call(elie) // Hi Elie
colt.sayHi.apply(elie) // Hi Elie
colt.addNumbers(1,2,3,4) // Colt just calculated 10
colt.addNumbers.call(elie,1,2,3,4) // Elie just calculated 10
colt.addNumbers.apply(elie,[1,2,3,4]) // Elie just calculated 10

// The bind() parameters work like call, but bind() returns a function with the context of 'this' bound already
var elieCalc = colt.addNumbers.bind(elie,1,2,3,4) // function(){}...
elieCalc() // Elie just calculated 10
// With bind - we do not need to know all the arguments up front
var elieCalc = colt.addNumbers.bind(elie,1,2) // function(){}... 
elieCalc(3,4) // Elie just calculated 10
```

Very commonly we lose the context of `this`, but in functions that we do not want to execute right away.  
Use bind to set the correct context of 'this':

```js
var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName)
        },1000)
    }
}

colt.sayHi() // Hi undefined (1000 milliseconds later)

var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName)
        }.bind(this),1000)
    }
}

colt.sayHi() // Hi Colt (1000 milliseconds later)
```

### 3. The `new` keyword

We can set the context of the keyword `this` using the `new` keyword

```js
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var elie = new Person("Elie", "Schoppik");

elie.firstName // "Elie"
elie.lastName // "Schoppik"

```


## The DOM (Document Object Model)

Everything is stored inside of the `document` object.

### Node Relationships

`firstChild`  
`lastChild`  
`childNodes[0]`  
`parentNode`  
`nextSibling`  
`previousSibling`

This function shows path to a clicked node:

``` javascript
function handleClick(event) {
    event.stopPropagation();

    var node = event.target;
    var thisPath = node.nodeName;

    while (node.parentNode) {
        node = node.parentNode;
        thisPath = node.nodeName + " > " + thisPath;
    }

    alert(thisPath);
}
```

### Select and Manipulate Nodes

Selecting:

- Using full path to the node
- `getElementById()`
- `getElementByClassName()'
- `getElementsByTagName()`
- `querySelector()` - returns the first element that matches a given CSS-style selector
- `querySelectorAll()' - returns a list of elements that matches a given CSS-style selector

``` html
<body>
<h2 style="color:black" id="cute_text">
	Click on a button to change a colour
</h2>

<form>
<input onclick="change_color1()" type="button"
	value="Change using full path">
<input onclick="change_color2()" type="button"
	value="Change using getElementByTagName()">
<input onclick="change_color3()" type="button"
	value="Change using getElementById()">
<input onclick="change_color4()" type="button"
	value="Change using querySelector()">
</form>

</body>
```

``` javascript
function change_color1(){
	document.childNodes[0].childNodes[2].childNodes[1].style.color="red";
}

function change_color2(){
	document.getElementsByTagName("h2")[0].style.color="yellow";
}

function change_color3(){
	document.getElementById("cute_text").style.color="blue";
}

function change_color4(){
  document.querySelector("#h1").style.color = "pink";
}
```

### Manipulating Style:

- `.style` - not recommended
- `.classList.add()`, `.classList.remove()`, `.classList.toggle()`
- `setAttribute()` (also see "Manipulating Attributes" below)

Rather than directly manipulating style with JS (see above), we can define a CSS class and then toggle it on or off with JS.

``` css
.some-class {
  color: "blue";
}
```

``` js
var tag = document.getElementById("cute_text");
// Add a class to the selected element
tag.classList.add("some-class");
// Remove a class
tag.classList.remove("some-class");
// Toggle a class
tag.classList.toggle("some-class");
```

``` javascript
the_node = getElementById("thisNode");
the_node.setAttribute("style", "color:red");
```

Simple TODO list (also see "Events")

``` html
<ul>
	<li>Wash Cat</li>
	<li>Feed Cat</li>
	<li>Feed Cat to Dog</li>
</ul>
```

``` css
.done {
	text-decoration: line-through;
	opacity: 0.5;
}

.selected {
	color: green;
}
```

``` js
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});

	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}
```

### Manipulating Text

- `textContext`
- `innerHTML` - keeps html elements intact

``` html
<p>
  This is an <strong>awesome</strong> paragraph.
</p>
```

``` js
var tag = document.querySelector("p");

tag.textContent // "This is awesome paragraph"
tag.innerHTML // "This is <strong>awesome</strong> paragraph"

// Alter the textContent
tag.textContent = "blah blah blah";
```

### Manipulating Attributes

Use `getAttribute()` and `setAttribute()` to read and write attributes like `src` or `href`

``` html
<a href="www.google.com">I am a link</a>
<img src="logo.png">
```

``` js
var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"
link.setAttribute("href","www.dogs.com"); 
//<a href="www.dogs.com">I am a link</a>

//To change image src
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">
```

### Creating and Adding Nodes

Creating nodes:  
- `createElement()`
- `createTextNode()`

Adding nodes:  
- `insertBefore()`
- `appendChild()`

``` html
<body onclick="insert_new_text()">
<h1 id="my_text">Please click on the page</h1>
```

``` javascript
function insert_new_text() {
	var newHR = document.createElement("hr");
	var destParent = document.getElementsByTagName("body")[0];
	destParent.insertBefore(newHR, destParent.firstChild);

	var newText = document.createTextNode("This is dynamically added Text!");
	var textPart = document.getElementById("my_text");
	textPart.appendChild(result);
}
```

### Deleting Nodes

`removeChild`

``` html
<body id="the_body"><p id="firstP">Hello.</p>
<p id="secondP">It's a nice day!</p>
<button type="button" onclick="delete1()">Example 1</button>
<button type="button" onclick="delete2()">Example 2</button>
<button type="button" onclick="delete3()">Example 3</button>
<button type="button" onclick="deleteAllChildren()">Example 4</button>
```

``` javascript
function delete1() {
    var the_node = document.getElementById("firstP");
    the_node.parentNode.removeChild(the_node);
}

function delete2() {
    var the_node = document.getElementByTagName("p")[0];
    the_node.parentNode.removeChild(the_node);
}

function delete3() {
    var the_parent = document.getElementById("theBody");
    the_parent.removeChild(the_parent.firstChild);
}

function deleteAllChildren() {
    var the_node = document.getElementById("theBody");

    while (the_node.firstChild) // While there is a child
        the_node.removeChild(the_node.firstChild);
}
```

### Cloning Nodes

``` html
<ul id="myList"><li>Good Morning></li><li>Hello</li></ul>
<p>Click on the button to cloneNode(true)</p>
<button onclick="myFunction()">Copy it!"</button>
</body>
```

``` javascript
function myFunction() {
    var the_node = document.getElementById("myList").lastChild;
    var the_clone = the_node.cloneNode(true);
    document.getElementById("myList").appendChild(the_clone);
}
```


## Events

[[MDN](https://developer.mozilla.org/en-US/docs/Web/Events)]

`onclick`  
`onchange`  
`onmouseover`  
`onmouseout`  
`onkeydown`  
`onload`  
etc.

An HTML event can be something the browser does, or something a user does.  
We select an element and then add an *event listener*.

To add a listener, we use a method called `addEventListener`

``` html
<html><body>
    <script>
        function do_something() {
            alert("Page has loaded")
        }
        window.addEventListener("load", do_something);
    </script>
</body></html>
```

Let's display a message when a button is clicked

``` html
<button>Click Me</button>
<p>No One Has Clicked Me Yet</p>
```

``` js
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// Setup click listener
button.addEventListener("click", function() {
  paragraph.textContent = "Someone Clicked the Button!";
});
```

In this example, the code changes the content of its own element (using `this.innerHTML`):

``` html
<button onclick="this.innerHTML=Date()">The time is?</button>
```

### Event Bubbling

DOM elements can be nested inside each other. And somehow, the handler of the parent works even if you click on it’s child. The reason is *event bubbling*. The bubbling goes right to the top. When an event occurs on an element - it will bubble up to `<HTML>`, triggering handlers on it’s way.

``` js
// Stopping the bubbling
element.onclick = function(event) {
  event = event || window.event // cross-browser event
  if (event.stopPropagation) {
      // W3C standard variant
      event.stopPropagation()
    } else {
      // IE<9 variant
      event.cancelBubble = true
    }
}

// One-lined variant
element.onclick = function(event) {
  event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true)
}
```


## Useful Resources

- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [You might not need jQuery](http://youmightnotneedjquery.com/): Vanilla JavaScript instead of jQuery
- [Underscore.js](http://underscorejs.org/)
- [Lodash](https://lodash.com/)
- [reqwest](https://github.com/ded/Reqwest), [then-request](https://github.com/then/request), [superagent](https://github.com/visionmedia/superagent): AJAX alternatives
- [Animate.css](https://daneden.github.io/animate.css/), [Move.js](https://github.com/visionmedia/move.js): Animation
- [bonzo](https://github.com/ded/bonzo), [$dom](https://github.com/julienw/dollardom): DOM utilities
- [qwery](https://github.com/ded/qwery), [sizzle](http://sizzlejs.com/): CSS selector engines
- [EventEmitter](https://github.com/Olical/EventEmitter), [Vine](https://github.com/arextar/Vine), [microevent](https://github.com/jeromeetienne/microevent.js): Events
- [cdnjs](https://cdnjs.com/): CDNs for all the popular libraries
- [Paper.js](http://paperjs.org/): Vector graphics scripting 
- [howler.js](https://howlerjs.com/): Audio library
- [Passport](http://passportjs.org/): Authentication for Node.js
