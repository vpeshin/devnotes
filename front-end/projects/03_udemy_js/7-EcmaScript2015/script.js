// Lecture: let and const
// ======================

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

// ES6
const name6 = 'Jane Smith'; // cannot be changed
let age6 = 23;

// variables in ES6 are not function-scoped but block-scoped

// ES5
function driversLicense5(passedTest) {
  if (passedTest) {
    console.log(firstName); // -> undefined

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

// driversLicense6(true);  // -> error

// ES6
function driversLicense6(passedTest) {
  // console.log(firstName); // -> error
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(firstName + ' born in ' + yearOfBirth + ' is allowed to drive a car.');
}

driversLicense6(true);  // works


// Lecture: Blocks and IIFEs
// =========================

// Make a variable which is not accessible from the outside:

// ES5
(function () {
  var c = 3;
})();

// ES6
// Only c is accessible from the outside of the block
{
  const a = 1;
  let b = 2;
  var c = 3;
}


// Lecture: Strings
// ================

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


// Lecture: Arrow Functions
// ========================

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


// Lexical 'this' variable

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

// box5.clickMe();

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

// box6.clickMe();


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
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map(el => {
    `${this.name} is friends with ${el}`;
  });
}

new Person('Mike').myFriends6(friends);


// Lection: Destructuring
// ======================

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


// Lection: Arrays
// ===============

const boxes = document.querySelectorAll('.box');

// 'querySelectorAll' method returns NodeList. We need to convert it to an array so we can use array methods

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// If we can't use 'forEach' or 'map' methods (Loops with 'continue' or 'break'):

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


// New methods to find elements in an array

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


// Lecture: The Spread Operator
// ============================

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

// '...' operator expands array 'ages' into its components


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily); // -> ['John', 'Jane', 'Mark', 'Lily', 'Mary', 'Bob', 'Ann']


// '...' also works on another structures like NodeLists

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');


// Lection: Rest Parameters
// ========================

// Rest Parameters allow us to pass an arbitrary number of arguments into a function

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


// The spread operator is used in the function call while the rest parameter is used in the function declaration


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


// Lecture: Default Parameters
// ===========================

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


// Lecture: Maps
// =============

// A map is a new data structure in ES6.
// In objects we are limited to strings, but in maps we can use anything for the keys. The maps are iterable.

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
  if (typeof (key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));

question.clear();


// Lecture: Classes
// ================

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


// Lecture: Classes with Subclasses
// ================================

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