/* 
- Every JavaScript object has a `prototype` property, which makes inheritance possible.
- The `prototype` property is where we put methods and properties that we want other
objects to inherit.
- The Constructor's `prototype` property is NOT the prototype of Constructor itself,
it's the prorotype of ALL instances that are created through it.
- When a certain method (or property) is called, the search starts in the object itself,
and if it cannot be found, the search moves on to the object's prototype.
This continues until the method is found: prototype chain.
*/

/*
// Function constructor

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge() {
  console.log(2016 - this.yearOfBirth);
}

// Instantiation. 'new' variable creates an empty object, so 'this' variable
// points to this object and not to global Object.
var john = new Person('John', 1990, 'teacher')
john.calculateAge();
*/

/*
// Object.create

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
*/


// Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

// Objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


// Passing functions as arguments

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


// Functions returning functions

function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function (name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');


// Immediately Invoked Function Expressions (IIFE)

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


// Closures

function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

retirement(66)(1990);


function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestion('teacher')('John');


// Bind, call and apply

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


// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate
   data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers
  (each question should have a number)
  (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input
   the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor
   (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code.
   So make sure that all your code is private and doesn't interfere with the other programmers code
   (Hint: we learned a special technique to do exactly that).
*/


// 7
(function () {
  // 1
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  // 4.2
  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ". " + this.answers[i]);
    }
  }

  // 6.1
  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer!');
    }
  }

  // 2
  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'], 0);

  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'], 2);

  var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

  // 3
  var questions = [q1, q2, q3];

  // 4.1
  var n = Math.floor(Math.random() * questions.length);

  // 4.3
  questions[n].displayQuestion();

  // 5
  var answer = parseInt(prompt('Please select the correct answer.'));

  // 6.2
  questions[n].checkAnswer(answer);
})();



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends
   (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit 
   the game if the user writes 'exit' instead of the answer. 
   In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct,
    add 1 point to the score (Hint: I'm going to use the power of closures for this,
    but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// 7
(function () {
  // 1
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  // 4.2
  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ". " + this.answers[i]);
    }
  }

  // 6.1, 10.3
  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;

    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer!');
      sc = callback(false);
    }

    this.displayScore(sc);
  }

  // 11
  Question.prototype.displayScore = function (score) {
    console.log('Your current score is: ' + score);
    console.log('------------------------');
  }

  // 2
  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'], 0);

  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'], 2);

  var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

  // 3
  var questions = [q1, q2, q3];

  // 10.1
  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) sc++;
      return sc;
    }
  }

  var keepScore = score();

  // 8
  function nextQuestion() {

    // 4.1
    var n = Math.floor(Math.random() * questions.length);

    // 4.3
    questions[n].displayQuestion();

    // 5
    var answer = prompt('Please select the correct answer.');

    // 9
    if (answer !== 'exit') {
      // 6.2, 10.2
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();

})();


/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();
*/