/**
 * Loops and iteration
 * 
 * Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
 * 
 * The statements for loops provided in JavaScript are:
 * 1. for statement
 * 2. do...while statement
 * 3. while statement
 * 4. labeled statement
 * 5. break statement
 * 6. continue statement
 * 7. for...in statement
 * 8. for...of statement
 * 
 */

for (let i = 0; i < 5; i++) {
  console.log(i);
}


// do...while statement
// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);


// while statement
// let j = 0;
// while (j < 5) {
//   j += 1;
//   console.log(j);
// }

// labeled statement
/**
 * A label provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.
 * 
 * 1. break statement
 * 2. continue statement
 */
let k = 0;

labelCancelLoops: while (true) {
  console.log("Outer loops: " + k);
  k += 1;
  let l = 1;

  while (true) {
    console.log("Inner loops: " + l);
    l += 1;
    if (l === 5 && k === 5) {
      break labelCancelLoops;
    } else if (l === 5) {
      break;
    }
  }
}




let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}

// for...in statement
/**
 * The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.
 */
const person = {
  name: "John",
  age: 30
};

let text = "";
for (let x in person) {
    console.log(x);
  text += person[x];
}
console.log(text);


// for...of statement
const cars = ["BMW", "Volvo", "Mini"];


const obj = {
    name:"John",
    age:30,
}
for ( const i of cars) {
  console.log(i);
}

for( const i in obj) {
  console.log(obj[i]);
}


const obj1 = {
    foo:1,
    bar:2,
}



const multiArr = [
    ["Ankul","Rahul","Sumit"],
    ["Nitish","Virat","Rohit"],
    ["Ajeet","Manish","Ganesh"],
];


console.log(Object.entries(obj1));

for (const [key,val] of Object.entries(obj1)) {
    console.log(key,val);
}

for (const [name1,name2,name3] of multiArr) {
    console.log(name1,name2,name3);
}