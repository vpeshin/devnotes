/*
Setting Up the First Event Listener to Handle Input Button

- How to setup event listeners for keypass events
- How to use event object
*/

// BUDGET CONTROLLER
var budgetController = (function () {

  // some code

})();


// UI CONTROLLER
var UIController = (function () {

  // some code

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var ctrlAddItem = function () {

    // 1. Get filled input data

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

    // test
    console.log('It works');
  }

  // Check if button is clicked
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  // Check if ENTER is pressed
  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
