/**
 * Object in Javascript
 *
 *
 * Object in Javascript , similar to objects in real life, have properties and methods. A property is a value that is attached to an object. A method is a function that is attached to an object.
 */
// Creating An Object
// Object Literal or Object Initializer
const person = {
  name: "Modit",
  age: 25,
  designation: "Software Engineer",
  company: "Google",
  salary: 1000000,
  // Method
  getDetails: function () {
    return `${this.name} is a ${this.designation} at ${this.company}`;
  },
};

// Using a Constructor Function
function Person(name, age, designation, company, salary) {
  this.name = name;
  this.age = age;
  this.designation = designation;
  this.company = company;
  this.salary = salary;
  this.getDetails = function () {
    return `${this.name} is a ${this.designation} at ${this.company}`;
  };
}

const person1 = new Person("Modit", 25, "Software Engineer", "Google", 1000000);

// Using the Object.create() method

const employee = {
  name: "Modit",
  age: 25,
  designation: "Software Engineer",
  company: "Google",
  salary: 1000000,
  getDetails: function () {
    return `${this.name} is a ${this.designation} at ${this.company}`;
  },
};

const person2 = Object.create(employee);
console.log(typeof person2);
console.log(typeof employee);

// Accessing Object Properties
console.log(person.name);

// Accessing Object Methods
console.log(person.getDetails());

for (let key in person) {
  console.log(person[key]);
}

Object.keys(person).forEach((key) => {
  console.log(person[key]);
});

Object.getOwnPropertyNames(person).forEach((key) => {
  console.log(person[key]);
});

// Modifying Object Properties
person.name = "Prabhat";

// Adding New Properties
person.location = "Lucknow";

// Deleting Properties
delete person.age;

console.log(person);

// Inheritance in Javascript
/**
 * All Objects in javascript inherit from at least one other object. The Object being inherited from is known as the prototype, and the inherited properties can be found in the prototype object of the constructor function.
 */



console.log(`\n This is Car Object \n`);



function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);


console.log(typeof Car);

Car.prototype.color = "red";
console.log(myCar.color);
console.log(myCar);



// Defining a Method 

/***
 * A method is a function associated with an object, or put differently, a method is a property of an object that is a function. Methods are defined the same way as regular functions, but they are assigned as the property of an object.
 */

// Methods are typically defined on the prototype object of the constructor . So that all Objects of the same type share the same method.

Car.prototype.displayCar = function () {
  return `This is a ${this.make} ${this.model} from ${this.year}`;
};

console.log(myCar.displayCar());


/**
 * Using (this) for object references
 * 
 * Javascript has a special keyword (this), that you can use within a method to refer to the current object 
 */

// Example 
const Manager = {
    name: "Shashank",
    age: 25,
    designation: "Manager",
};

const Intrn = {
    name:"Ankul",
    age:21,
    designation:"Intern",
};

function getDetails(){
    return `${this.name} is a ${this.designation}`;
}

Manager.getDetails = getDetails;
Intrn.getDetails = getDetails;

console.log(Manager.getDetails());
console.log(Intrn.getDetails());



// Defining getter and setter methods

/* A getter is a function associated with a property that get the value of a specific property.

A setter is a function associated with a property that sets the value of a specific property.
*/

const myObj = {
    get b(){
        return this._a_;
    },
    set a(val){
        this._a_ = val;
    }
};

myObj.a = 5;
console.log(myObj.b);


// Comparing Objects

/**
 * Comparing Objects 
 * In javascript , Objects are a reference type . Two Distinct Objects are never equal , even if they have the same properties. Only the references are equal.
 */

const fruit = {
    name:"Apple",
};
const fruit1 = {
    name:"Apple",
};

console.log(fruit === fruit1); // false

const fruit2 = fruit;
console.log(fruit === fruit2); // true

fruit.name = "Banana";
console.log(fruit2.name); // Banana
