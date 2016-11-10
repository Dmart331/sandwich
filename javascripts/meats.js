var Sandwich = (function(oldSandwich) {

  // Private variable to store the different meat prices
  var meatPrices = {
  		turkey: 1.00,
  		beef: 1.50,
  		ham: 3.50,
  		alien:5.00,
  }

  // Augment the original object with another method
  oldSandwich.addMeat = function() {
    for(i=0; i<meatPrices.length; i++){
    
    }
};
  

  // Return the new, augmented object with the new method on it
  return oldSandwich;
  console.log(meatPrices[turkey])
})(Sandwich || {});