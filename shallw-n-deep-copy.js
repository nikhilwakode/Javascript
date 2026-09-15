//Shallow copy
//use spread operator to create a shallow copy of an object 
const obj1 = { a: 1, b: 2 };
const shallowCopy = { ...obj1 };

console.log(shallowCopy); // Output: { a: 1, b: 2 } 

shallowCopy.a = 3;
console.log(obj1.a); // Output: 1 (original object remains unchanged)
console.log(shallowCopy.a); // Output: 3 (shallow copy is modified)

//Deep copy
//use JSON.parse and JSON.stringify to create a deep copy of an object 
const obj2 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj2));

console.log(deepCopy); // Output: { a: 1, b: { c: 2 } }

deepCopy.b.c = 3;

console.log(obj2.b.c); // Output: 2 (original object remains unchanged)
console.log(deepCopy.b.c); // Output: 3 (deep copy is modified) 