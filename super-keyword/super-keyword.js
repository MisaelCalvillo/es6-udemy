// ES5 Refactoring Constructors
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHello = function(){
  return "Hello " + this.firstName + " " + this.lastName;
}

// How could we make a cleaner code to avoid duplication ?

// function Student(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

function Student(){
  Person.apply(this, arguments);
}



// ES6 - Use of the 'super' keyword
class Car {
  constructor(manufacturer, numWheels){
    this.manufacturer = manufacturer;
    this.numWheels = numWheels;
  }
  sayHello(){
    return `This car was made by ${this.manufacturer} and has ${this.numWheels}`;
  }
}

class Truck extends Car {
  constructor(manufacturer, numWheels){
    super(manufacturer, lastName);
  }
}

