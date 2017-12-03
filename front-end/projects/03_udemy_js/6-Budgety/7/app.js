/*
Adding a New Item to the UI

- A technique to for adding big chunks of HTML into the DOM
- How to replace parts of strings
- How to do DOM manipulation using the insertAdjacentHTML method
*/

// BUDGET CONTROLLER
var budgetController = (function () {

  // Custom function constructors for incomes and expenses
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // Custom data structure for incomes and expenses
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }

  // Public method which allows other modules to add a new item to data structure
  return {
    addItem: function (type, desc, val) {
      var newItem, ID;

      // Create new ID
      // ID = last ID of array + 1
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, desc, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, desc, val);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },

    testing: function () {
      console.log(data);
    }
  };

})();


// UI CONTROLLER
var UIController = (function () {

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  }

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    // 1)
    addListItem: function (obj, type) {
      var html, newHtml, element;
      
      // 1. Create HTML string with placeholder text
      if (type == 'inc') {
        element = DOMStrings.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMStrings.expensesContainer;        
        html = `<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
      }

      // 2. Replace placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      // 3. Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    // Make private DOMStrings object public (getter)
    getDOMStrings: function () {
      return DOMStrings;
    }
  };

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

    var input, newItem;

    // 1. Get filled input data
    input = UICtrl.getInput();
    // console.log(input); // test

    // 2. Add the item to the budget controller
    newItem = budgetController.addItem(input.type, input.description, input.value);

    // 3. Add the item to the UI
    // 2)
    UICtrl.addListItem(newItem, input.type);

    // 4. Calculate the budget

    // 5. Display the budget on the UI

  };

  // Public init function
  return {
    init: function () {
      console.log('Application has started.');
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();