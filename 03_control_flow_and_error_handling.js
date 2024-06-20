/**
 * Control Flow and Error Handling
 *
 *
 *
 *
 * Block Statement
 * The most basic statement is a block statement that is used to group statements. The block is delimited by a pair of curly brackets.
 *
 *
 * {
 *     statement_1;
 *     statement_2;
 *     ....
 *     statement_n;
 * }
 *
 *
 * Conditional Statements
 * A Conditional statement is a set of commands that executes if a specified condition is true.
 *
 * 1. if statement
 * 2. if...else statement
 * 3. if...else if...else statement
 * 4. switch statement
 *
 *
 *
 * Falsy Values
 * 1. false
 * 2. undefined
 * 3. null
 * 4. 0
 * 5. NaN
 * 6. the empty string ("")
 */
// Example
let data = -10;

if (data > 0) {
  console.log(`${data} is a positive number`);
} else if (data === 0) {
  console.log(`${data} is zero`);
} else {
  console.log(`${data} is a negative number`);
}

switch (data) {
  case data === 0:
    console.log(`${data} is zero`);
    break;
  case data > 0:
    console.log(`${data} is a positive number`);
    break;
  default:
    console.log(`${data} is a negative number`);
}

// try...catch statement
// The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.
// try_catch work synchronously.
// throw
let obtMarks = 70;
try{
    if(obtMarks >= 60){
        console.log('Student Passed With First Division');
    }else if(obtMarks >= 45 && obtMarks < 60){
        console.log('Student Passed With Second Division');
    }else if(obtMarks >= 33 && obtMarks < 45){
        console.log('Student Passed With Third Division');
    }else{
        console.log('Student Failed');
    }
}catch(error){
    throw new Error(error);
}
