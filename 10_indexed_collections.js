/**
 * Indexed collections
 *
 * An Array is an ordered list of values that you refer to with a name and an index.
 */
const emp = ["Modit", "Prabhat", "Shashank", "Amit", "Anup", "Ankul"];
console.log(emp[0]);
console.log(emp[1]);
console.log(emp[2]);
console.log(emp[3]);

/**
 * Javascript Does not have an explicit array data type. However, you can use the predefined Array object and its methods to work with arrays in your applications.
 */

// Creating An Array
const arr1 = new Array("Modit", "Prabhat", "Shashank", "Amit", "Anup", "Ankul");
console.log(arr1);
const arr2 = ["Modit", "Prabhat", "Shashank", "Amit", "Anup", "Ankul"];
console.log(arr2);
const arr3 = Array("Modit", "Prabhat", "Shashank", "Amit", "Anup", "Ankul");

// const arr4 = Array(5); // creates an array with 5 empty slots not insert 5 as an element
// It work like
// const arr4 = [];
// arr4.length = 5;

// Array.of static method to create array with a single element
const arr5 = Array.of(5);
console.log(arr5);

/**
 * Referring to Array elements
 */
const myArr = ["Modit", "Prabhat", "Shashank", "Amit", "Anup", "Ankul"];
// referring 1st element
console.log(myArr[0]);

/**
 * Population An Array
 */
const employee = [];
employee[0] = "Modit";
employee[1] = "Prabhat";
employee[2] = "Shashank";

console.log(employee);

/**
 * Understanding Length
 *
 * At the implementation level , javascript's arrays actually store their elements as standard object properties, using the array index as the property name.
 */

for (let i = 0; i < employee.length; i++) {
  console.log(employee[i]);
}

// ForEach
employee.forEach((element) => console.log(element));

/**
 * Array Methods
 *
 * Method                             Description
 * concat()                           Joins two or more arrays, and returns a copy of the joined arrays.
 * join()                             Joins all elements of an array into a string.
 * pop()                              Removes the last element of an array, and returns that element.
 * push()                             Adds new elements to the end of an array, and returns the new length.
 */
let myArr1 = ["1", "2", "3"];
myArr1 = myArr1.concat("4", "5");
console.log(myArr1);

// join() = Joins all elements of an array into a string.
console.log(myArr1.join(" , "));

// push() = Adds new elements to the end of an array, and returns the new length.
console.log(myArr1.push("6"));
console.log(myArr1);

// pop() = Removes the last element of an array, and returns that element.
console.log(myArr1.pop());
console.log(myArr1);

// shift() = Removes the first element of an array, and returns that element.
console.log(myArr1.shift());
console.log(myArr1);

// unshift() = Adds new elements to the beginning of an array, and returns the new length.
console.log(myArr1.unshift("0"));
console.log(myArr1);

// slice() = Selects a part of an array, and returns the new array.
console.log(myArr1.slice(1, 3));

// splice() = Adds/Removes elements from an array.
console.log(myArr1.splice(1, 2));
console.log(myArr1);

// at() = Returns the element at the specified index.
console.log(myArr1.at(0));

// reverse() = Reverses the order of the elements in an array.
console.log(myArr1.reverse());

$multiArray = [
  ["Modit", "Prabhat", "Shashank"],
  ["Amit", "Anup", "Ankul", [1, 2, 3, 4, 5]],
];

// flat() = Flattens an array.
console.log($multiArray.flat());

// sort() = Sorts the elements of an array.
console.log(myArr1.sort());

// indexOf() = Search the array for an element and returns its position.
console.log(myArr1.indexOf("3"));

// lastIndexOf() = Search the array for an element, starting at the end, and returns its position.
console.log(myArr1.lastIndexOf("5"));

// includes() = Check if an array contains the specified element.
console.log(myArr1.includes("5"));

// map() = Creates a new array with the result of calling a function for each array element.
$multiArray.flat(Infinity).map((element) => console.log(element));

// filter() = Creates a new array with every element in an array that pass a test.
console.log($multiArray.flat(Infinity).filter((element) => element.length > 5));

// reduce() = Reduce the values of an array to a single value (going left-to-right).
console.log(
  $multiArray
    .flat(Infinity)
    .reduce((accumulator, currentValue) => accumulator + currentValue)
);

// combine example of map() , filter() and reduce()
console.log(
  $multiArray
    .flat(Infinity)
    .map((element) => element.length)
    .filter((element) => element > 5)
    .reduce((accumulator, currentValue) => accumulator + currentValue)
);

const transactionsUSD = [120, 55, 32, 200, 300]; // Transactions in USD
const usdToEurRate = 0.85; // Example conversion rate

// Convert USD to EUR
const transactionsEUR = transactionsUSD.map((amount) => amount * usdToEurRate);

// Filter transactions greater than 100 EUR
const largeTransactions = transactionsEUR.filter((amount) => amount > 100);

// Sum up the total of the large transactions
const total = largeTransactions.reduce((sum, amount) => sum + amount, 0);

console.log(`Total of transactions over 100 EUR: ${total.toFixed(2)} EUR`);

// find() = Returns the value of the first element in an array that pass a test.
console.log($multiArray.flat(Infinity).find((element) => element.length > 5));

// findLast() = Returns the value of the last element in an array that pass a test.
console.log(
  $multiArray.flat(Infinity).findLast((element) => element.length > 5)
);

// findIndex() = Returns the index of the first element in an array that pass a test.
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1

// findLastIndex() = Returns the index of the last element in an array that pass a test.
const a2 = ["a", 10, "b", 20, "c", 30];
const j = a2.findLastIndex((item) => typeof item === "number");
console.log(j); // 5

// every() = Check if all elements in an array pass a test.
const a3 = [10, 20, 30, 40, 50];
const allOver10 = a3.every((item) => item > 10);
console.log(allOver10); // false

// some() = Check if some elements in an array pass a test.
const a4 = [10, 20, 30, 40, 50];
const someOver10 = a4.some((item) => item > 10);
console.log(someOver10); // true

// fill() = Fill the elements in an array with a static value.
const a5 = [10, 20, 30, 40, 50];
a5.fill(0);
console.log(a5); // [0, 0, 0, 0, 0]

/**
 * Reduce() Method
 *
 * The reduce() method applies callback(accumulator, currentValue, currentIndex, array) for each value in the array for the purpose of reducing the list of items down to a single value.
 *
 *
 */

// Array Transformation
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];

const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result);

// Sparse Arrays
// Arrays can contain "empty slots", which are not undefined values, but slots with no value at all.
const arr6 = [1, , , 4, 5];
console.log(arr6);
console.log(arr6[1]);
console.log(arr6[2]);
