/**
 * Keyed collections
 * 
 *  Map Object
 */
const emp = new Map();
emp.set("name", "Modit");
emp.set("age", 25);
emp.set("designation", "Software Engineer");
emp.set("location", "Lucknow");
emp.set("salary", 1000000);
console.log(emp);
console.log(emp.get("name"));

// Update a value
emp.set("designation", "Deputy Manager");
console.log(emp.size);
console.log(emp.has("name"));
console.log(emp.delete("location"));
console.log(emp.has("location"));
console.log(emp.size);

// Object and Map comparison
// These three tips can help you to decide whether to use a Map or an Object:

// Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
// Use maps if there is a need to store primitive values as keys because object treats each key as a string whether it's a number value, boolean value or any other primitive value.
// Use objects when there is logic that operates on individual elements.




/**
 * WeakMap Object
 * 
 * A WeakMap is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.
 * 
 */
const wm = new WeakMap();
let key1 = {};
let key2 = {};
let key3 = {};
wm.set(key1, "Modit");
wm.set(key2, "Prabhat");
wm.set(key3, "Shashank");
console.log(wm.get(key1));
console.log(wm.get(key2));
console.log(wm.get(key3));

key1 = null;
console.log(wm.get(key1));



// Set Object
/**
 * A Set is a collection of unique values. A value in a Set can be anything (primitive values or object references).
 */

const mySet = new Set();
mySet.add("Modit");
mySet.add("Prabhat");
mySet.add("Shashank");

console.log(mySet);

for(const item of mySet) {
  console.log(item);
}


// WeakSet Object
/**
 * A WeakSet is a collection of objects in which the objects are weakly referenced. The objects must be objects and the values can be arbitrary values.
 */

const ws = new WeakSet();
let wsKey1 = {
    id: 1
};
let wsKey2 = {
    id: 2
};
let wsKey3 = {
    id: 3
};
ws.add(wsKey1);
ws.add(wsKey2);
ws.add(wsKey3);
console.log(ws.has(wsKey1));
console.log(ws.has(wsKey2));
console.log(ws.has(wsKey3));


// Converting Between Array and Set
const arr = [1,12,1,3,2,3,4,4,5,5,6,7,8,9,9,10];

const mSet = Array.from([...new Set(arr)]);
console.log(arr);
console.log(mSet);

// Array and Set Compared
/**
 * Traditionally, a set of elements has been stored in arrays in JavaScript in a lot of situations. The Set object, however, has some advantages:

Deleting Array elements by value (arr.splice(arr.indexOf(val), 1)) is very slow.
Set objects let you delete elements by their value. With an array, you would have to splice based on an element's index.
The value NaN cannot be found with indexOf in an array.
Set objects store unique values. You don't have to manually keep track of duplicates.
 */


