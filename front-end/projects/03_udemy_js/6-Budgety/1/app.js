/*
Implementing Module Pattern

- How to use the module pattern
- Private and public data, encapsulation and separation of concerns
*/

// BUDGET CONTROLLER
var budgetController = (function () {

  var x = 23;

  var add = function (a) {
    return a + x;
  }

  return {
    publicTest: function (b) {
      return add(b);
    }
  }
})();

// test
budgetController.publicTest(5); // 28


// UI CONTROLLER
var UIController = (function () {

  // some code
  
})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function () {
      console.log(z);
    }
  }

})(budgetController, UIController);

// test
controller.anotherPublic() // 28