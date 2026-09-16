const user = {
    name: "Nikhil",
    age: 25,
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
}

console.log(user.name); // Nikhil
console.log(Object.getPrototypeOf(user)); // {constructor: ƒ, __defineGetter__: ƒ,
// 
//set any other object as prototype of object
const animal = {
    eat(){
        console.log("Eating...");
    }
}

const dog = {
    bark(){
        console.log("Barking...");
    }
}

Object.setPrototypeOf(dog, animal);

dog.eat()