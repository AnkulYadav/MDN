/**
 * Using Classes
 *
 * Javascript is a prototype based language  - An object's behaviors are specified by its own properties and its prototype's properties.
 *
 *
 * In many other languages, classes or constructors, are clearly distinguished from objects.
 */

const bigDay = new Date(2024, 6, 19);
console.log(bigDay.toLocaleDateString());

if (bigDay.getTime() > Date.now()) {
  console.log("Big Day is in the future");
}

/**
 * Classes create objects through the new operator.
Each object has some properties (data or method) added by the class.
The class stores some properties (data or method) itself, which are usually used to interact with instances.
These correspond to the three key features of classes:

Constructor;
Instance methods and instance fields;
Static methods and static fields.
 */

// Declaring a class

class MyClass {
  // Constructor
  constructor() {
    // Constructor body
  }
  // Instance field
  myField = "foo";
  // Instance method
  myMethod() {
    // myMethod body
  }
  // Static field
  static myStaticField = "bar";
  // Static method
  static myStaticMethod() {
    // myStaticMethod body
  }
  // Static block
  static {
    // Static initialization code
  }
  // Fields, methods, static fields, and static methods all have
  // "private" forms
  #myPrivateField = "bar";
}

//   Constructing a class
// After a class has been declared , you can create instances of it using the new operator.

const myInstance = new MyClass();
console.log(myInstance.myField); // foo
myInstance.myMethod();

// Typical function constructor can both be constructed with new and called without new. However , attempting to call a class without new will throw an error.

// Class declaration hoisting
// Unlike function declarations , class declarations are not hoisted. which means you can't use a class before it is declared.

// Class expressions

const MyClass2 = class {
  // Class body
};


// Constructor
/**
 * Perhaps the most important job of a class is to act as a "factory" for objects. For Example , when we use the Date constructor ,we expect it to give a new object which represents the date data we passed in 
 */

class Color {
    constructor(r, g, b) {
        this.values = [r, g, b];
    }
}
const red = new Color(255, 0, 0);
console.log(red.values); // [255, 0, 0]
console.log(red);

// You have successfully created a Color instance, and the instance has a value property, which is an array of the RGB values you passed in.

function createColor(r, g, b) {
    return {
        values: [r, g, b]
    };
}

const blue = createColor(0, 0, 255);
console.log(blue.values); // [0, 0, 255]





// Private fields
// you might be wondering : why do we want to go to the trouble of using getRed and setRed methods, when we can directly access the values array on the instance.

class Color2 {
    constructor(r, g, b) {
        this.values = [r, g, b];
    }
}

const green = new Color2(0, 255, 0);
green.values[1] = 0;
console.log(green.values); // [0, 255, 0]

// There is a philosophy in object-oriented programming called encapsulation.This means you should not access the underlying implementation of an object, but instead use well-abstract methods to interact with it.

// #values is a private field, which means it can only be accessed from within the class. This is a new feature in JavaScript, and it is not yet supported in all browsers.