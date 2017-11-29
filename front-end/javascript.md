<!-- TOC depthTo:3 orderedList:true -->

1. [Data Types](#data-types)
2. [Arrays](#arrays)
  1. [Array Iteration](#array-iteration)
  2. [Array Methods](#array-methods)
3. [[Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)](#stringshttpsdevelopermozillaorgen-usdocswebjavascriptreferenceglobal_objectsstring)
4. [[Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)](#numbershttpsdevelopermozillaorgen-usdocswebjavascriptreferenceglobal_objectsnumber)
  1. [Number Methods](#number-methods)
5. [[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)](#mathhttpsdevelopermozillaorgen-usdocswebjavascriptreferenceglobal_objectsmath)
  1. [Math Constants](#math-constants)
6. [[Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)](#dateshttpsdevelopermozillaorgen-usdocswebjavascriptreferenceglobal_objectsdate)
7. [[Booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)](#booleanshttpsdevelopermozillaorgen-usdocswebjavascriptreferenceglobal_objectsboolean)
8. [Conditional Statements](#conditional-statements)
9. [[Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)](#loopshttpsdevelopermozillaorgen-usdocswebjavascriptguideloops_and_iteration)
10. [[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)]](#functionshttpsdevelopermozillaorgen-usdocswebjavascriptguidefunctions)
  1. [First Class Functions: Passing Functions as arguments](#first-class-functions-passing-functions-as-arguments)
  2. [First Class Functions: Functions Returning Functions](#first-class-functions-functions-returning-functions)
  3. [Immediately Invoked Function Expressions (IIFE)](#immediately-invoked-function-expressions-iife)
11. [OOP in JavaScript](#oop-in-javascript)
  1. [Objects](#objects)
  2. [Classes. Bind, Call and Apply](#classes-bind-call-and-apply)
  3. [Inheritance, Prototypes, Function Constructors](#inheritance-prototypes-function-constructors)
  4. [Object.create](#objectcreate)
  5. [Closures](#closures)
12. [[Scope](https://scotch.io/tutorials/understanding-scope-in-javascript)](#scopehttpsscotchiotutorialsunderstanding-scope-in-javascript)
13. [Keyword `this`](#keyword-this)
  1. [1. Global Context](#1-global-context)
  2. [2. Implicit/Object](#2-implicitobject)
  3. [3. Explicit](#3-explicit)
  4. [3. The `new` keyword](#3-the-new-keyword)
14. [The DOM (Document Object Model)](#the-dom-document-object-model)
  1. [Node Relationships](#node-relationships)
  2. [Select and Manipulate Nodes](#select-and-manipulate-nodes)
  3. [Manipulating Style:](#manipulating-style)
  4. [Manipulating Text](#manipulating-text)
  5. [Manipulating Attributes](#manipulating-attributes)
  6. [Creating and Adding Nodes](#creating-and-adding-nodes)
  7. [Deleting Nodes](#deleting-nodes)
  8. [Cloning Nodes](#cloning-nodes)
15. [[Events](https://developer.mozilla.org/en-US/docs/Web/Events)](#eventshttpsdevelopermozillaorgen-usdocswebevents)
  1. [Event Bubbling and Event Delegation](#event-bubbling-and-event-delegation)
16. [ES6/ES2105](#es6es2105)
  1. [Variable Declarations with `let` and `const`](#variable-declarations-with-let-and-const)
  2. [Strings](#strings)
  3. [Arrow Functions](#arrow-functions)
  4. [Destructuring](#destructuring)
  5. [Arrays](#arrays-1)
  6. [The Spread Operator](#the-spread-operator)
  7. [Function Rest Parameters](#function-rest-parameters)
  8. [Function Default Parameters](#function-default-parameters)
  9. [Maps](#maps)
  10. [Classes](#classes)
  11. [Classes with Subclasses (Inheritance)](#classes-with-subclasses-inheritance)
17. [Useful Resources](#useful-resources)

<!-- /TOC -->


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

JavaScript has dynamic types. This means that the same variable can be used as different types.

You can use the JavaScript `typeof` operator to find the type of a JavaScript variable.


## Arrays

[[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)]

- You can have variables of different types in the same Array
- Arrays use only numbered indexes
- `Array.isArray()` function determines whether the passed value is an Array

``` javascript
var cars = ["Saab", "Volvo", "BMW"];  
var cars = new Array("Saab", "Volvo", "BMW");  // no need to use  
var name = cars[0];  
cars[0] = "Opel";   // modifies the first element in cars  
```

The `length` property provides an easy way to append a new element to an array:

``` javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits
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

### Array Iteration

You can go through every element of array using `for` loop or [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method that takes function as an argument:

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
```

Also you can use [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method, which returns new array.


### Array Methods

- [Object.prototype.valueOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) method is the default behavior for an array. It returns an array as a string.
- `valueOf()` and [toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) are equal.
- [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method also joins all array elements into a string. It behaves just like `toString()`, but you can specify the separator.
- [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method removes the last element from an array and returns the value that was "popped out".
- [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method adds a new element to an array (at the end) and returns the new array length.
- [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method removes the first element of an array, and "shifts" all other elements one place up. It returns the string that was "shifted out"  
- [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) method adds a new element to an array (at the beginning), and "unshifts" older elements. It returns the new array length.
- Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator `delete`. Using `delete` on array elements leaves undefined holes in the array. Use `pop()` or `shift()` instead.
- [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method changes the contents of an array by removing existing elements and/or adding new elements. It returns an array containing the deleted elements.
- [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method slices out a piece of an array into a new array and returns new array.
- [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method sorts an array alphabetically.  
- [reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) method reverses the elements in an array. You can use it to sort an array in descending order.
- [concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method creates a new array by concatenating two arrays. `concat()` can take any number of array arguments.
- [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method creates a new array with all elements that pass the test implemented by the provided function:

``` js
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

- [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value:

```js
// ES5
const total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 1);
// total is 7

// ES6 version
const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
// total is 7
```


## [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

- [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method returns the index of the first occurrence of a specified text in a string.
- [lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) method returns the index of the last occurrence of a specified text in a string.  
- [search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) method searches a string for a specified value and returns the position of the match:
- [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) method extracts a section of a string and returns it as a new string.
- Don't use `substring()` and `substr()`.
- [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
- A string is converted to upper case with `toUpperCase()` and converted to lower case with `toLowerCase()`.
[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat) method combines the text of one or more strings and returns a new string.
- [charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) method returns the character at a specified index in a string.  
- [charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) method returns the UTF-16 code of the character at a specified index in a string.
- Accessing a string as an array is unsafe. If you want to read a string as an array, convert it to an array first using the [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method:

``` javascript
var txt = "a,b,c,d,e";   // String  
txt.split(",");          // Split on commas  
txt.split(" ");          // Split on spaces  
txt.split("|");          // Split on pipe   
txt.split("");           // Split in characters   
// If the separator is omitted, the returned array will contain the whole string in index [0].  
```


## [Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

- JavaScript numbers are always stored as double precision 64 bit floating point numbers.
- Integers are considered accurate up to 15 digits.
- The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate.
- JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x:

``` javascript
var x = 0xFF;             // x will be 255   
```

- By default, Javascript displays numbers as base 10 decimals. But you can use the `toString()` method to output numbers as base 16 (hex), base 8 (octal), or base 2 (binary).

``` javascript
var myNumber = 128;  
myNumber.toString(16);     // returns 80  
myNumber.toString(8);      // returns 200  
myNumber.toString(2);      // returns 10000000  
```

- `Infinity` (or `-Infinity`) is the value JavaScript will return if you calculate a number outside the largest possible number. Division by 0 also generates `Infinity`.
- Trying to do arithmetic with a non-numeric string will result in `NaN` (Not a Number). However, if the string contains a numeric value, the result will be a number.
- You can use the global JavaScript function `isNaN()` to find out if a value is a NaN.

### Number Methods

- [toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) returns a number as a string.  
- [toExponential()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) returns a string, with a number rounded and written using exponential notation.  
- [toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) returns a string, with the number written with a specified number of decimals.  
- [toPrecision()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision) method returns a string representing the Number object to the specified precision.
- There are 3 JavaScript functions that can be used to convert variables to numbers:  
`Number()`, [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt), [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat).
- `valueOf()` returns a number as a number. The `valueOf()` method is used internally in JavaScript to convert Number objects to primitive values. There is no reason to use it in your code.


## [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) returns a random number between 0 (inclusive), and 1 (exclusive).
- [Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) and [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) can be used to find the lowest or highest value in a list of arguments.
- [Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) rounds a number to the nearest integer.
- [Math.ceil()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) rounds a number up to the nearest integer.
- [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) rounds a number down to the nearest integer.

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


## [Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)


## [Booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)


## Conditional Statements

([if..else](http://www.w3schools.com/js/js_if_else.asp)],
[[switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)]

Use `===` for comparison (to compare value AND type).

JavaScript has a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) for conditional expressions:

``` js
var allowed = (age > 18) ? "yes" : "no";
```


## [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

- `for-in` loops are considered to be general bad practice when writing JavaScript because it has some inconsistent behavior with arrays and objects.

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


## [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)]

- A function is an instance of the `Object` type
- A function behaves like any other object
- We can store function in a variable
- We can pass a function as an argument to another function (first class functions)
- We can return a function from a function

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

### First Class Functions: Passing Functions as arguments

``` js
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i])); // fn is a callback function
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

console.log(ages);  // [ 26, 51, 79, 11, 18 ]
```

```js
function add(first, second, callback) {
  console.log(first + second);
  callback();
}

add(4, 5, function() {
  console.log('done');
});
```

### First Class Functions: Functions Returning Functions

```js
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('Mark');

interviewQuestion('teacher')('Mark');
```

### Immediately Invoked Function Expressions (IIFE)

```js
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// IIFE way
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
```


## OOP in JavaScript

### Objects

- JavaScript objects cannot be compared.

```js
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};  
person.lastName;	// dot notation
person["lastName"]; 	// square bracket notation
```

### Classes. Bind, Call and Apply

Though JavaScript has no classes, you can mimic many of the characteristics with its functions.  

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

In [call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) the subsequent arguments are passed in to the function as they are, while [apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) expects the second argument to be an array that it unpacks as arguments for the called function.  
`call()`/`apply()` call the function immediately, whereas [bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) returns a function that, when later executed, will have the correct context set for calling the original function.

```js
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name 
                  + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job 
                  + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

// method borrowing
john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['friendly', 'afternoon']); // not gonna work because array expected

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

// fn() takes only 1 argument but ifFullAge() takes 2 argument.
// So we can make a preset using bind():
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
```

### Inheritance, Prototypes, Function Constructors

- Every JavaScript object has a `prototype` property, which makes inheritance possible.
- The `prototype` property is where we put methods and properties that we want other objects to inherit.
- The Constructor's `prototype` property is NOT the prototype of Constructor itself, it's the prorotype of ALL instances that are created through it.
- When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: *prototype chain*.

Anytime an object is created using the `new` keyword, a property called `__proto__` gets created, linking the object and the prototype property of the constructor function.

```js
// this is the constructor function
function Person(name){
  this.name = name;
  sayHi: function() {
    return "Hi " + this.name;
  }
}

// This is an object created from the Person constructor.
// So 'this' variable in Person class points to new object and not to global Object.
var elie = new Person("Elie");

// Since we used the new keyword, we have established a link between the object and the prototype property we can access that using __proto__
elie.__proto__ === Person.prototype; // true

// The Person.prototype object also has a property
// called constructor which points back to the function
Person.prototype.constructor === Person; // true
```

Use prototype-based classes for efficiency:

```js
function Person(name){
  this.name = name;
}

Person.prototype.sayHi = function(){
  return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi(); // Hi Elie
```

### Object.create

Alternativelly to function constructors (`new` keyword) you can use `Object.create()` method:

```js
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1986 },
  job: { value: 'designer' }
});
```

### Closures

A closure is a function that makes use of variables defined in outer functions that have previously returned.

```js
function outer(a){
  return function inner(b){
      // the inner function is making use of the variable "a"
      // which was defined in an outer function called "outer"
      // and by the time this is called, that outer function has returned
      // this function called "inner", which is a closure!
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

## [Scope](https://scotch.io/tutorials/understanding-scope-in-javascript)

Scope determines the visibility of variables and other resources in areas of your code:
local, global, automatically global.

Block statements like `if` and `switch` conditions or `for` and `while` loops, unlike functions, don't create a new scope. Variables defined inside of a block statement will remain in the scope they were already in.

ECMAScript 6 introduced the `let` and `const` keywords. These keywords can be used in place of the `var` keyword. Contrary to the `var` keyword, the `let` and `const` keywords support the declaration of local scope inside block statements.


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

`getElementById()` is faster than querySelector().

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

`querySelectorAll` method returns *NodeList*. We can to convert it to an array so we can use array methods:

```js
var boxes = document.querySelectorAll('.box');

var boxesArr5 = Array.prototype.slice.call(boxes);
var boxesArr5 = [].prototype.slice.call(boxes);
// ES6
var boxesArr6 = Array.from(boxes);
var boxesArr6 = [...boxes];

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


## [Events](https://developer.mozilla.org/en-US/docs/Web/Events)

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

### Event Bubbling and Event Delegation

DOM elements can be nested inside each other. And somehow, the handler of the parent works even if you click on it’s child. The reason is *event bubbling*. The bubbling goes right to the top. When an event occurs on an element - it will bubble up to `<HTML>`, triggering handlers on it’s way.  
*Event delegation* refers to the process of using event bubbling to handle events at a higher level in the DOM than the element on which the event originated.

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

Use cases for event delegation:

1. When we have an element with lots of child elements that we are interested in;
2. When we want an event handler attached to an element that is not yet in the DOM when our page is loaded.


## ES6/ES2105

### Variable Declarations with `let` and `const`

```js
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

// ES6
const name6 = 'Jane Smith'; // cannot be changed
let age6 = 23;
```

Variables in ES6 are not *function-scoped* but *block-scoped*.

```js
// ES5
function driversLicense5(passedTest) {
  console.log(firstName); // -> undefined

  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(firstName + ' born in ' + yearOfBirth + ' is allowed to drive a car.');
}

driversLicense5(true);  // works

// ES6
function driversLicense6(passedTest) {
  if (passedTest) {
    let firstName = 'John';
    const yearOfBirth = 1990;
  }
  console.log(firstName + ' born in ' + yearOfBirth + ' is allowed to drive a car.');
}

driversLicense6(true);  // error

// ES6
function driversLicense6(passedTest) {
  console.log(firstName); // -> error

  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(firstName + ' born in ' + yearOfBirth + ' is allowed to drive a car.');
}

driversLicense6(true);  // works
```

### Strings

```js
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2017 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

// ES6 string methods
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // -> true
console.log(n.endsWith('th')); // -> true
console.log(n.includes(' ')); // -> true
console.log(`${firstName} `.repeat(3)); // -> John John John
```

### Arrow Functions

```js
const years = [1995, 1965, 1986, 1937];

// ES5
var ages5 = years.map(function (el) {
  return 2017 - el;
});

// ES6
let ages6 = years.map(el => 2017 - el);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
```

Arrow functions don't get their own `this` keyword. They share the surrounding `this` keyword (lexical `this` variable).

```js
// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    var self = this; // doesn't work without 'self' variable

    document.querySelector('.green').addEventListener('click', function () {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}

// Hack: without 'self' variable 'this.position' and 'this.color' points to global object ('Window').

box5.clickMe();

// ES6
var box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {

    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

// By using arrow function we have access to 'this' keyword of 'clickMe' method

box6.clickMe();
```

```js
function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(function (el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6  = function (friends) {
  var arr = friends.map(el => {
    `${this.name} is friends with ${el}`;
  });
}

new Person('Mike').myFriends6(friends);
```

### Destructuring

*Destructuring* gives us convenient way to extract data from a data structure like an object or an array.

```js
// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];

// ES6
const [name, age] = ['John', 26];

const obj = {
  firstName = 'John',
  lastName = 'Smith'
};

const { firstName, lastName } = obj;
const { firstName: a, lastName: b } = obj;
console.log(a); // -> 'John'


function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age]
};

const [age, retirement] = calcAgeRetirement(1990);
console.log(age); // -> 27
console.log(retirement); // -> 40
```

### Arrays

`querySelectorAll` method returns NodeList. We need to convert it to an array so we can use array methods:

```js
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
```

If we can't use `forEach` or `map` methods (loops with `continue` or `break`):

```js
// ES5
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === 'box blue') {
    continue;
  }

  boxesArr5[i].textContent = 'I changed to blue';
}

// ES6
for (const cur of boxesArr6) {
  if (boxesArr6.className.includes('blue')) {
    continue;
  }

  cur.textContent = 'I changed to blue';  
}
```

New methods to find elements in an array:

```js
var ages = [12, 17, 8, 21, 14, 11];

// ES5
var fullAge = ages.map(function (cur) {
  return cur >= 18;
});

console.log(fullAge.indexOf(true)); // -> 3
console.log(ages[fullAge.indexOf(true)]); // -> 21

// ES6
console.log(ages.findIndex(cur => cur >= 18)); // -> 3
console.log(ages.find(cur => cur >= 18)); // -> 21
```

### The Spread Operator

`...` operator expands array into its components

```js
function addFourAges(a, b, c, d) {
  return a + b + c + d;
};

var sum1 = addFourAges(18, 30, 12, 21);

var ages = [18, 30, 12, 21];

// ES5
var sum2 = addFourAges.apply(null, ages);
console.log(sum2); // -> 81

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3); // -> 81

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily); // -> ['John', 'Jane', 'Mark', 'Lily', 'Mary', 'Bob', 'Ann']
```

`...` also works on another structures like NodeLists

```js
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
```

### Function Rest Parameters

*Rest parameters* allow us to pass an arbitrary number of arguments into a function.

The *spread operator* is used in the function call while the *rest parameters* is used in the function declaration.

```js
// ES5
function isFullAge5() {
  console.log(arguments); // array-like structure, but not an array
  // transform to an array
  var argsArray = Array.prototype.slice(arguments);

  argsArray.forEach(function (cur) {
    console.log((2016 - cur) >= 18);
  });
}

isFullAge5(1990, 1999, 1965); // -> true false true

// ES6
function isFullAge6(...years) {
  console.log(years); // array!
  years.forEach(cur => console.log((2016 - cur) >= 18));
};

isFullAge6(1990, 1999, 1965); // -> true false true
```

```js
// ES5
function isFullAge5(limit) {
  var argsArray = Array.prototype.slice(arguments, 1); // start cutting at index 1 so we can exclude the first argument ('limit')

  argsArray.forEach(function (cur) {
    console.log((2016 - cur) >= limit);
  });
}

isFullAge5(16, 1990, 1999, 1965); // -> true true true

// ES6
function isFullAge6(limit, ...years) {
  console.log(years); // array!
  years.forEach(cur => console.log((limit - cur) >= 18));
};

isFullAge6(16, 1990, 1999, 1965); // -> true true true
```

### Function Default Parameters

```js
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'american' : nationality = nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); // 'lastName' and 'nationality' are 'Smith' and 'american' by default

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); // 'lastName' and 'nationality' are 'Smith' and 'american' by default
```

### Maps

A *map* is a new data structure in ES6.  
In objects we are limited to strings, but in maps we can use anything for the keys.  
The maps are iterable.

```js
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again');

console.log(question.get('question')); // -> 'What is ...'
console.log(question.size); // -> 8

if (question.has(4)) {
  question.delete(4);
}

question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for (let [key, value] of question.entries()) {
  // print only numbered answer options
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));

question.clear();
```

### Classes

Classes are syntatic sugar in ES6

```js
// ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


// ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - yearOfBirth;
    console.log(age);
  }

  // Static class
  static greeting() {
    console.log('Hey there!');
  }
}

const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting();
```

### Classes with Subclasses (Inheritance)

```js
// ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - yearOfBirth;
  console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
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
