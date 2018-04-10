// ES5 Inheritance
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHello = function() {
  return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Two way of inherit before ES6
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


// ES6 Inheritance - Use the extends keyword
class Car {
  constructor(manufacturer, numWheels){
    this.manufacturer = manufacturer;
    this.numWheels = numWheels;
  }
  sayHello(){
    return `This car is made by ${this.manufacturer} and has ${this.numWheels} wheels`;
  }
}

// This is the modern way to inherit properties from other objects
class Motorbike extends Car {

}