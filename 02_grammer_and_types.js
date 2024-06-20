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

// String Conversion
let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string

// Numeric Conversion
let data = "123";
console.log(typeof data); // string

date = parseInt(data);
console.log(typeof data); // number



/**
 * Converting strings to numbers
 *
 * 1. parseInt() - parses a string and returns an integer.
 * 2. parseFloat() - parses a string and returns a floating point number.
 */
console.log(typeof parseInt("10")); // 10

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
const fish = ["Lion", , , "Angel", "Clown", "Mandarin", ,];
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
if (b) {
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
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = {
  myCar: "Alto",
  getCar: carTypes("Honda"),
  special: sales,
};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

const car1 = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };
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

/**
 * Tagged Templates
 * Tagged templates are advanced form of template literals.
 */

/*Example*/
/**
 * 1. There are 5 movie tickets Each Rs 200 and if you buy 5 tickets then you will get 50% discount.
 * 2. There are 5 movie tickets Each Rs 200 and if you buy less than 5 tickets then you will get 0% discount.
 */

let noOfTickets = 5;
let buyTickets = 2;
let ticketPrice = 200;
let discount = 50;

function ticket(theory, ...rest) {
  if (buyTickets < 5) {
    rest[3] = 0;
    return `${theory[0]} ${rest[0]} ${theory[1]}${rest[1]} ${theory[2]}  ${rest[2]}  ${theory[3]}  ${rest[3]} ${theory[4]}`;
  } else {
    return `${theory[0]} ${rest[0]} ${theory[1]}  ${rest[1]} ${theory[2]} ${rest[2]} ${theory[3]} ${rest[3]} ${theory[4]}`;
  }
}

console.log(
  ticket`There are ${noOfTickets} movie tickets Each Rs ${ticketPrice} and if you buy ${buyTickets} tickets then you will get ${discount}% discount.`
);

// Example 2
const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Print a bulleted list
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // This object will be serialized to "[object Object]".
    // Let's print something nicer.
    return JSON.stringify(arg);
  }
  return arg;
};

const print = (segments, ...args) => {
    console.log(segments);
    console.log(args);
  // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];

const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
  ${todos}
  My current progress is: ${progress}
  `;


/**
 * Special characters in strings
 * 
 * 1. \0 - Null
 * 2. \b - Backspace
 * 3. \f - Form feed
 * 4. \n - New line
 * 5. \r - Carriage return
 * 6. \t - Horizontal tab
 * 7. \v - Vertical tab
 * 8. \' - Single quote
 * 9. \" - Double quote
 * 10. \\ - Backslash
 * 11. \XXX - The character with the Latin-1 encoding specified by up to three octal digits between 0 and 377. For example, \251 is the octal sequence for the copyright symbol.
 * 12. \xXX - The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF. For example, \xA9 is the hexadecimal sequence for the copyright symbol.
 * 13. \uXXXX - The Unicode character specified by the four hexadecimal digits XXXX. For example, \u00A9 is the Unicode sequence for the copyright symbol.
 * 14. \u{XXXXX} - Unicode code point escapes. For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Escaping Characters
 **/ 
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);


