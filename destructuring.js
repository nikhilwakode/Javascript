const user = {
    name: "Nikhil",
    age: 35
}

console.log(user.name); // Output: Nikhil
console.log(user.age); // Output: 35

//with destructuring
const { name, age } = user;

console.log(name);

let { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);