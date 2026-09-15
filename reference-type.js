const user1 = {
    name: 'John',
    age: 30
}
const user2 = user1;

user2.age = 40;

console.log(user1.age);
console.log(user2.age);

//Same with Array
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);  

//####################################################
//How to create an independent array
//Use the spread operator:

const array1 = [1, 2, 3];

const array2 = [...arr1];

arr2.push(4);

console.log(array1);
console.log(array2);


// another example
let a = 10;
let b = a;

a = 20;

console.log(a); // Output: 20
console.log(b); // Output: 10

//################################################

//Another example with objects

let p = {};
let q = {};

console.log(p === q); //false, because they are different objects in memory

//but
let r = p;
console.log(p === r); //true, because they reference the same object in memory
