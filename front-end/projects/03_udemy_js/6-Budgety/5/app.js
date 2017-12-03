/*
Creating Income and Expense Function Constructors

- How to choose function constructors that meet our application's needs
- How to set up proper data structure for our budget controller
*/

// BUDGET CONTROLLER
  var budgetController = (function () {

    // 1) Custom function constructors for incomes and expenses
    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
    
    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };

    // 2) Custom data structure for incomes and expenses
    var data = {
      allItems = {
        exp: [],
        inc: []
      },
      totals = {
        exp: 0,
        inc: 0
      }
    }

  })();


// UI CONTROLLER
var UIController = (function () {

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      }
    },

    // Make private DOMStrings object public (getter)
    getDOMStrings: function () {
      return DOMStrings;
    }
  }

})();


// GLOBAL APP CONTROLLER

var controller = (function (budgetCtrl, UICtrl) {

  // Private function to setup event listeners
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMStrings();

    // Check if button is clicked
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    // Check if ENTER is pressed
    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  }

  var ctrlAddItem = function () {

    // 1. Get filled input data
    var input = UICtrl.getInput();
    // console.log(input); // test

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

  }

  // Public init function
  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();