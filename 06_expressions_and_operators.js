/**
 * Expressions and operators
 * 
 * 
 * 1. Assignment operators
 * 2. Comparison operators
 * 3. Arithmetic operators
 * 4. Bitwise operators
 * 5. Logical operators
 * 6. BigInt operators
 * 7. String operators
 * 8. Conditional (ternary) operator
 * 9. Comma operator
 * 10. Unary operators
 * 11. Relational operators
 * 
 * 
 * 
 * Example 
 * const x = 1 + 2 * 3;
 * const y = 2 * 3 + 1;
 * 
 * 
 * 1. Assignment operators
 * An Assignment operator assigns a value to its left operand based on the value of its right operand.
 * 
 * Example 1: x = y
 * Name                 Shorthand operator      Meaning
 * Assignment           x = y                    x = y
 * Addition assignment  x += y                   x = x + y
 * Subtraction assignment x -= y                 x = x - y
 * Multiplication assignment x *= y              x = x * y
 * Division assignment  x /= y                   x = x / y
 * Remainder assignment x %= y                   x = x % y
 * Exponentiation assignment x **= y             x = x ** y
 * Left shift assignment x <<= y                 x = x << y
 * Right shift assignment x >>= y                x = x >> y
 * Unsigned right shift assignment x >>>= y     x = x >>> y
 * Bitwise AND assignment x &= y                 x = x & y
 * Bitwise XOR assignment x ^= y                 x = x ^ y
 * Bitwise OR assignment x |= y                  x = x | y
 * Logical AND assignment x &&= y                x && (x = y)
 * Logical OR assignment x ||= y                 x || (x = y)
 * Logical nullish assignment x ??= y            x ?? (x = y)
 * 
 * 
 * 
 * 
 * 
 * Destructing
 * 
 */
// WithOut Destructing
const person =["Ram","Shayam", "Hari", "Sita"];

const p1 = person[0];
const p2 = person[1];
const p3 = person[2];
const p4 = person[3];


console.log(p1, p2, p3, p4);

// With Destructing
const [p5, p6, p7, p8] = person;
console.log(p5, p6, p7, p8);

/**
 * Comparison operators
 * It compares its operands and returns a logical value based on whether the comparison is true.
 * 
 * Name                   Operator        Description
 * Equal                  ==              Returns true if the operands are equal.
 * Not equal              !=              Returns true if the operands are not equal.
 * Strict equal           ===             Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.
 * Strict not equal       !==             Returns true if the operands are of the same type but not equal, or are of different type.
 * Greater than           >               Returns true if the left operand is greater than the right operand.
 * Greater than or equal  >=              Returns true if the left operand is greater than or equal to the right operand.
 * Less than              <               Returns true if the left operand is less than the right operand.
 * Less than or equal     <=              Returns true if the left operand is less than or equal to the right operand.
 * 
 */


/**
 * Arithmetic operators
 * An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value.
 * 
 * Name                 Operator        Description
 * Addition             +               Adds two operands.
 * Subtraction          -               Subtracts the right operand from the left operand.
 * Multiplication       *               Multiplies two operands.
 * Division             /               Divides the left operand by the right operand.
 * Remainder            %               Returns the division remainder.
 * Increment            ++              Increases an integer value by one.
 * Decrement            --              Decreases an integer value by one.
 * Exponentiation       **              Returns the result of raising the left operand to the power of the right operand.
 * 
 */

/**
 * Bitwise operators
 * A bitwise operator treats their operands as a set of 32 bits (zeros and ones) and returns a 32-bit number.
 * 
 * Name                 Operator        Description
 * Bitwise AND          &               Returns a one in each position where both operands have a one.
 * Bitwise OR           |               Returns a one in each position where either of the operands has a one.
 * Bitwise XOR          ^               Returns a one in each position where only one of the operands has a one.
 * Bitwise NOT          ~               Inverts the bits of its operand.
 * Left shift           <<              Shifts the left operand by the number of bits specified by the right operand.
 * Sign-propagating right shift  >>      Shifts the left operand by the number of bits specified by the right operand. The sign bit is propagated.
 * Zero-fill right shift  >>>           Shifts the left operand by the number of bits specified by the right operand. Zeros are filled in from the left.
 * 
 * 
 * 
 * 
 * logical operators
 * 
 * Name                 Operator        Description
 * Logical AND          &&              Returns true if both operands are true.
 * Logical OR           ||              Returns true if one of the operands is true.
 * Logical NOT          !               Returns true if its operand is false.
 */ 


/**
 * BigInt operators
 * BigInt is a new numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInt, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.
 * 
 * 
 * 
 * 
 * String operators
 * console.log('Hello'+ 'World');
 * 
 * 
 * Ternary Operator
 * (condition) ? expression on true : expression on false
 * 
 * 
 * 
 * Comma Operator
 * The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
 * 
 * const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
 *
 *
 * 
 *
 *  
 *
 *  Unary operators
 * A unary operation is an operation with only one operand.
 * 
 * delete 
 * The delete operator deletes a property from an object.
 * 
 * delete object.property
 * 
 * 
 * typeof
 * The typeof operator returns a string indicating the type of the unevaluated operand.
 * 
 * void
 * The void operator discards an expression's return value.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Relational operators
 * A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.
 * 
 * 
 * in 
 * The in operator returns true if the specified property is in the specified object or its prototype chain.
 * 
 * propertyName in Object
 * 
 * 
 * 
 * 
 * instanceof
 * The instanceof operator returns true if the specified object is of the specified object type.
 * 
 * object instanceof type
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 







Basic Expressions
An expression is any valid unit of code that resolves to a value.


this 
Use this keyword to refer to the current object. In general, this refers to the calling object in a method.

this.propertyName
this['propertyName']













Grouping operator

The grouping operator () controls the precedence of evaluation in expressions.

( expression )
 (a + b) * c
 a + (b * c)













 new operator 
 new Operator is use to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.


















 super 
    The super keyword is used to access and call functions on an object's parent.
 */
// Example of super 
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Rex');
dog.speak(); 