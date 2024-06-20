/**
 * Numbers and Dates
 */

/**
 * Numbers
 *
 * There are four types of number literals:
 * 1.Decimal Numbers
 * 2.Binary Numbers
 * 3.Octal Numbers
 * 4.Hexadecimal Numbers
 *
 *
 * Decimal Numbers
 * Decimal numbers use the base 10 and can have the digits 0 through 9.
 *
 *
 * Binary Numbers
 * Binary numbers use the base 2 and can have the digits 0 and 1. To write a binary number, prefix it with 0b or 0B.
 *
 *
 *
 * Octal Numbers
 * Octal numbers use the base 8 and can have the digits 0 through 7. To write an octal number, prefix it with 0o or 0O.
 *
 *
 *
 * Hexadecimal Numbers
 * Hexadecimal numbers use the base 16 and can have the digits 0 through 9 and the letters A through F. To write a hexadecimal number, prefix it with 0x or 0X.
 *
 *
 *
 *
 *
 *
 *
 *
 * Number Object
 * Number Object has properties and numerical constants, such as maximum value , not-a-number , and infinity.
 *
 * Example*/
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);

// Methods
// Number.isFinite()
// Number.isFinite() determines whether the passed value is a finite number.

console.log(Number.isFinite(0));

// Number.isInteger()
// Number.isInteger() determines whether the passed value is an integer.

console.log(Number.isInteger(0.5));

// Number.isNaN()
// Number.isNaN() determines whether the passed value is NaN.

console.log(Number.isNaN(0 / 0));

// Number.isSafeInteger()
// Number.isSafeInteger() determines whether the passed value is a safe integer.

console.log(Number.isSafeInteger(0.5));

// Number.prototype.toExponential()
// Number.prototype.toExponential() returns a string representing the number in exponential notation.

console.log((123456).toExponential(2));

// Number.parseFloat()
// Number.parseFloat() parses an argument and returns a floating point number.

console.log(Number.parseFloat("10.00"));

// Number.parseInt()
// Number.parseInt() parses a string argument and returns an integer of the specified radix.

console.log(Number.parseInt("10.00"));

/**
 * Math Object
 *
 * Math.PI returns the value of PI
 *
 * Math.round() returns the value of a number rounded to the nearest integer.
 *
 * Math.pow() returns the value of a number raised to the power of another number.
 *
 * Math.sqrt() returns the square root of a number.
 *
 * Math.abs() returns the absolute value of a number.
 *
 * Math.ceil() returns the smallest integer greater than or equal to a number.
 *
 * Math.floor() returns the largest integer less than or equal to a number.
 *
 * Math.sin() returns the sine of a number.
 *
 *
 * Math.cos() returns the cosine of a number.
 *
 */

/**
 * Date Object
 *
 * Javascript Does not have a date data type.
 * Date Object has a large number of methods for setting , getting and manipulating dates.
 */

console.log(`\nDate Object\n`);
// To Create a Date Object.
const dateObjectName = new Date();
console.log(dateObjectName);

// Date Object Methods
// Method	Description
// getDate()	Get the day as a number (1-31)
// getDay()	Get the weekday as a number (0-6)
// getFullYear()	Get the four digit year (yyyy)
// getHours()	Get the hour (0-23)
// getMilliseconds()	Get the milliseconds (0-999)
// getMinutes()	Get the minutes (0-59)
// getMonth()	Get the month (0-11)
// getSeconds()	Get the seconds (0-59)
// getTime()	Get the time (milliseconds since January 1, 1970)
// toString()	Get the date as a string
// toDateString()	Get the date as a string
// toTimeString()	Get the time as a string
// toUTCString()	Get the date as a string, according to universal time
// getUTCDate()	Get the day as a number (1-31), according to universal time
// getUTCDay()	Get the weekday as a number (0-6), according to universal time
// getUTCFullYear()	Get the four digit year (yyyy), according to universal time
// getUTCHours()	Get the hour (0-23), according to universal time
// getUTCMilliseconds()	Get the milliseconds (0-999), according to universal time
// getUTCMinutes()	Get the minutes (0-59), according to universal time
// getUTCMonth()	Get the month (0-11), according to universal time
// getUTCSeconds()	Get the seconds (0-59), according to universal time
// getYear()	Get the year as a 2-digit or 4-digit number
// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)
// setUTCDate()	Set the day as a number (1-31), according to universal time
// setUTCFullYear()	Set the year (optionally month and day), according to universal time
// setUTCHours()	Set the hour (0-23), according to universal time
// setUTCMilliseconds()	Set the milliseconds (0-999), according to universal time
// setUTCMinutes()	Set the minutes (0-59), according to universal time
// setUTCMonth()	Set the month (0-11), according to universal time
// setUTCSeconds()	Set the seconds (0-59), according to universal time
// setYear()	Set the year as a 2-digit or 4-digit number

// Example
const date = new Date();
console.log(date);

const endYear = new Date(2024, 8, 30, 23, 59, 59, 999);
endYear.setFullYear(date.getFullYear());

const msPerDay = 24 * 60 * 60 * 1000;
let daysLeft = (endYear.getTime() - date.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft);

console.log(`Days left in the year ${daysLeft}`);
