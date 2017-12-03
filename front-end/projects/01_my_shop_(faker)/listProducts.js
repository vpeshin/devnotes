var fakeData = require("faker");

for (var i = 0; i < 10; i++) {
  console.log(fakeData.commerce.productName() + " - " + fakeData.commerce.price(10, 1000));
}  
