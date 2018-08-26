"use strict";
(function () {

  function Phone(brand, price, color, weight) {
    this.brand = brand;
    //by using this, the "brand" property of the object we create will assume the value of the brand argument
    this.price = price;
    this.color = color;
    this.weight = weight;

  }

  Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " the price is " + this.price + "and the weight is " + this.weight + "g.");
  }

  var iPhone6S = new Phone("Apple", 2250, "silver", 143);
  var galaxyS6 = new Phone ("Samsung", 1000, "white", 138);
  var onePlusOne = new Phone ("OnePlus", 1100, "black", 162);

  iPhone6S.printInfo();
  galaxyS6.printInfo();

  Phone.prototype.priceInfo = function() {
    console.log("The phone " + this.brand + ", net price is " + Math.floor(this.price/ 1.22) + ".");
  }

  onePlusOne.priceInfo();
  galaxyS6.priceInfo();
  iPhone6S.priceInfo();

  

})();