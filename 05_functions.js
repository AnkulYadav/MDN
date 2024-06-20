/**
 * functions
 *
 * function is group of statements that perform a task
 *
 *
 * Function Declaration
 * A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
 * The name of the function.
 * A list of parameters to the function, enclosed in parentheses and separated by commas.
 * The JavaScript statements that define the function, enclosed in curly brackets, {...}.
 */
function square(number) {
  return number * number;
}
console.log(square(4));

// Function Expression
// A function expression is similar to and has the same syntax as a function definition (see above). However, the main difference between a function expression and a function definition is that a function expression is often used as a function value assigned to a variable.
const square1 = function (number) {
  return number * number;
};
// calling function square1
console.log(square1(4));

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
// calling function factorial
console.log(factorial(3));

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function map(f, a) {
  const result = new Array(a.length);
  a.forEach((element, index) => {
    result[index] = f(element);
  });
  return result;
}
// calling function map
console.log(map(square1, numbers));

/**
 * Function Hoisting
 *
 * console.log(square(5)); // 25
 *
 *   function square(n) {
 *       return n * n;
 *  }
 *
 * This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope
 * 
 * 
 * Function hoisting only works with function declarations — not with function expressions. The following code will not work:
 * 
 * console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};

 */

/**
 * Function Scope
 * Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.
 */

/**
 * Scope And The Function Stack
 *
 * Recursion
 * A function can refer to and call itself. There are Three ways for a function to refer to itself:
 *
 * 1. The function's name
 * 2. arguments.callee
 * 3. An in-scope variable that refers to the function
 *
 */

const foo = function bar() {
  console.log("bar");
};

// bar(); REferenceError: bar is not defined

foo();
// agruements.callee();

console.log(`\n\nRecursion\n\n`);
function loop(x) {
  if (x >= 10) return;
  console.log(x);
  loop(x + 1);
}
loop(0);



/**
 * Getting All the Node of a Tree
 */
// function walkTree(node) {
//     if (node === null) {
//       return;
//     }
//     // do something with node
//     for (let i = 0; i < node.childNodes.length; i++) {
//       walkTree(node.childNodes[i]);
//     }
//   }
  
console.log(`\nGetting All the Node of a Tree\n`);
function stackBehavior(i){
    if(i < 0){
        return;
    }
    console.log('begin: ' + i);
    stackBehavior(i - 1);
    console.log('end: ' + i);
}


stackBehavior(5);

/**
 * Nested Functions and Closures
 */
console.log(`Nested Functions and Closures\n`);
function addSquares(a, b){
    function square(x){
        return x * x;
    }
    return square(a) + square(b);
}
console.log(addSquares(2, 3));


console.log(`Example 2\n`);
function outside(x){
    function inside(y){
        return x + y;
    }
    return inside;
}

const fnInside = outside(3);
const fnInside1 = outside(4);


console.log(fnInside(10));
console.log(outside(3)(20));


/**
 * Preservation of Variables
 * In the Above Example 2 , How x is preserved in the inside is returned.
 * 
 * A closure must preserve the arguments and variables in all scopes it references. Since each call provides potentially different arguments, a new closure is created for each call to outside. The memory can be freed only when the returned inside is no longer accessible.
 */



/***
 * Multiply-nested Functions
 * 
 * 
 * Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called scope chaining. (The reason it is called "chaining" is explained later.)
 * 
 * Scope Chaining
 * 
 * 
 * 
 * 
 * This can be done because:

B forms a closure including A (i.e., B can access A's arguments and variables).
C forms a closure including B.
Because C's closure includes B and B's closure includes A, then C's closure also includes A. This means C can access both B and A's arguments and variables. In other words, C chains the scopes of B and A, in that order.
The reverse, however, is not true. A cannot access C, because A cannot access any argument or variable of B, which C is a variable of. Thus, C remains private to only B.
 */
console.log(`Multiply-nested Functions\n`);
function A(x){
    function B(y){
        function C(z){
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1);


/**
 * Name conflicts
 * When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More nested scopes take precedence. So, the inner-most scope takes the highest precedence, while the outer-most scope takes the lowest. This is the scope chain.
 */

console.log(`Name conflicts\n`);
function outside(){
    const x = 10;
    function inside(x){
        return x;
    }
    return inside;
}
console.log(outside()(20)); // 20 (instead of 10)



/**
 * Closures
 * Closures are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).
 * 
 * However , the outer function does not have access to the variables and functions defined inside the inner function.
 * 
 * Example Given Above
 */



/**
 * Using the arguments object
 * The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:
 */ 
console.log(`Using the arguments object\n`);
function myConcat(separator){
    console.log(separator);
    let result = '';
    console.log(arguments);
    for(let i = 1; i < arguments.length; i++){
        result += arguments[i] + separator;
    }
    return result;
}
console.log(myConcat(', ', 'red', 'orange', 'blue'));


/**
 * Function parameters
 * 
 * Default parameters
 */ 
console.log(`Default parameters\n`);
function add(a, b= 1){
    return a + b;
}
console.log(add(4, 2));
console.log(add(4));


/**
 * Rest Parameters
 * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
 */

console.log(`Rest Parameters\n`);
function multiply(multiplier, ...theArgs){
    return theArgs.map(x => multiplier * x);
}
let r = multiply(2, 1, 2, 3);
console.log(r);


/**
 * Arrow functions
 * 
 * An Arrow Function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions and they cannot be used as constructors.
 * 
 * 
 */
console.log(`Arrow functions\n`);
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));

/**
 * No separate this
 * 
 */
// function Person(){
//     this.age = 0;
//     setInterval(() => {
//         console.log(this);
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }
// const p = new Person();
/**
 * Bound Funciton 
 */
// function Person(){
//     const self = this;
//     self.age = 0;
//     setInterval(function growUp() {
//         console.log(self);
//         self.age++;
//         console.log(self.age);
//       }, 1000);
// }
// const p = new Person();

// with Arrow Function
function Person1(){
    this.age = 0;
    setInterval(() => {
        console.log(this);
        this.age++;
        console.log(this.age);
    }, 1000);
}

const p1 = new Person1();