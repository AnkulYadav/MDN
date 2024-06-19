/**
 * 1. Constant
 */
const PI = 3.14159;
console.log(PI);

/**
 * Declarations
 * javascript has three kinds of declarations.
 * 1. var 
 * 2. let
 * 3. const
 * 
 * 
 * 
 * Variables 
 * - Variables are containers for storing data values.
 * 
 * 
 * Declaring Variables.
 * There are two ways to declare a variable in javascript.
 * 1. Using var - local and global scope
 * var x = 5;
 * 
 * 2. const or let - block scope
 * const y = 6;
 * let z = 7;
 * 
 * 
 * 
 * Variable Scope
 * 1. Global Scope
 * 2. Module Scope
 * 3. Function Scope
 * 4. Block Scope
 * 
 * 
 * 
 * 
 * Variable Hoisting
 * - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
 * 
 * However, if you access a variable before it's declared, the value is always undefined, because only its declaration and default initialization (with undefined) is hoisted, but not its value assignment.
 * 
 * 
 * 
 * 
 * 
 * 
 * Data structures and types
 * 
 * 1. Data Types
 * The Latest ECMAScript standard defines Eight data types:
 * Seven data types that are primitives:
 * 1. Boolean - true and false.
 * 2. null - A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.
 * 3. undefined - A top-level property whose value is undefined.
 * 4. Number - An integer or floating point number. For example: 42 or 3.14159.
 * 5. String - A sequence of characters that represent a text value. For example, "Howdy"
 * 6. Symbol (new in ECMAScript 6) - A data type whose instances are unique and immutable.
 * 7. BigInt (new in ECMAScript 2020) - A data type that can represent whole numbers larger than 2^53 - 1.
 * 8. Object - The object type is special. It represents a special type of data that is mutable and can be changed after it is created.
 * 
 * 
 * 
 * 
 * 
 * 
 * Data type conversion
 * Javascript is a Dynamically typed language.
 * 
 * 
 */
console.log(5 + "5"); // 55
console.log(5 - "5"); // 0
console.log(5 * "5"); // 25

/**
 * Converting strings to numbers
 * 
 * 1. parseInt() - parses a string and returns an integer.
 * 2. parseFloat() - parses a string and returns a floating point number.
 */
console.log(typeof(parseInt("10"))); // 10


/**
 * Literals
 * Literals represent values in javascript. These are fixed values, not variables, that you literally provide in your script.
 * 
 * 1. Array Literals
 * 2. Boolean Literals
 * 3. Numeric Literals
 * 4. Object Literals
 * 5. String Literals
 * 6. RegExp Literals
 * 
 * 
 * 
 * 
 * 1. Array Literals
 * const  coffees = ["French Roast", "Colombian", "Kona"];
 */
const fish = ['Lion',,,'Angel', 'Clown', 'Mandarin',,];
console.log(fish);
// Array.prototype.map empty slots are skipped. 
// index-accessing fish[1] returns undefined.
fish.map((v) => console.log(v)); 
for (let i = 0; i < fish.length; i++) {
    console.log(fish[i]);
}

/**
 * 2. Boolean Literals
 */
const b = true;
if(b) {
    console.log("true");
}

/**
 * 3. Numeric Literals
 * javascript numeric literals include integer literals in differents bases as well as floating-point literals in base-10.
 * 
 * 
 * 3.1415926
.123456789
3.1E+12
.1e-23

 */
const decimal = 42;


/**
 * 4. Object Literals
 * An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).
 */
const sales = 'Toyota';

function carTypes(name){
    return name === 'Honda' ? name :`Sorry, we don't sell ${name}.`; 
}

const car = {
    myCar:'Alto',
    getCar: carTypes('Honda'),
    special: sales
}

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

const car1 ={ manyCars: {a: 'Saab', 'b': 'Jeep'}, 7: 'Mazda'};
console.log(car1.manyCars.b);
console.log(car1[7]);


// Not Understand
// const obj = {
//     __proto__: theProtoObj,
//     // Shorthand for ‘handler: handler’
//     handler,
//     // Methods
//     toString() {
//      // Super calls
//      return "d " + super.toString();
//     },
//     // Computed (dynamic) property names
//     [ 'prop_' + (() => 42)() ]: 42
// };
// console.log(obj);


/**
 * 5. RegExp Literals
 * 
 */
console.log(/ab+c/);

/**
 * 6. String Literals
 * A string literal is zero or more characters enclosed in single or double quotes.
 * Example:
 * "Ankul Yadav"
 */
console.log("Ankul Yadav");

/**
 * Template Literals
 * Template literals are string literals allowing embedded expressions.
 * 
 * 
 */
const name = "Ankul";
const age = 100;
console.log(`My name is ${name} and age is ${age}`);