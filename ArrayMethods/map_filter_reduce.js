////Map method Questions

//square of every number
const numbs = [1, 2, 3, 4, 5];
const square = numbs.map((number)=> number * number);
console.log(square)

//double every  number using map
const numbers1 = [10, 20, 30, 40];
const doubledNum = numbers1.map(num => num * 2);
console.log(doubledNum);

//Convert names to uppercase
const names = ["john", "mike", "sarah"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

//Extract a property using map()
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Mike" },
  { id: 3, name: "Sarah" }
];

const extractProp = users.map((user) => user.name);
console.log(extractProp);

////Filter method Questions

//Even numbers from Array
console.log("///////////////////////////////////")
const numbers = [1, 2, 3, 4, 5, "nikhil", "amit"];
const evenNumbers = numbers.filter((number)=> number % 2 === 0);
console.log(evenNumbers)

//Get numbers greater than 10
const numbers2 = [5, 12, 8, 20, 3, 15];
const grt10 = numbers2.filter(num => num > 10)
console.log(grt10);

//Filter active users
const users1 = [
  { name: "John", active: true },
  { name: "Mike", active: false },
  { name: "Sarah", active: true }
];

const activeUsers = users1.filter((user) => user.active);
console.log(activeUsers);


////Reduce method Questions
//Find the sum of numbers
console.log("/////////////////")
const numbers3 = [10, 20, 30, 40];
const sum = numbers3.reduce((total,num) => total = total + num )
console.log(sum)

//Find the maximum number using for loop
const numbers4 = [10, 45, 23, 67, 12];
let max = numbers4[0];
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] > max){
    max = numbers4[i]
  }
}

console.log(max)

//Find the maximum number using for reduce()
const numbers5 = [10, 45, 23, 67, 12];
const maxNum = numbers5.reduce((greatest,num)=> {
  if (num > greatest) {
    return num
  }else{
    return greatest
  }
},numbers5[0])

console.log(maxNum);


//Count elements using reduce()
const numb2 = [1, 2, 3, 4, 5];

const count = numb2.reduce((countNum) => {
  return countNum = countNum + 1
},0)

console.log(count);


//Intermediate
//Get the names of users whose age is greater than 25.
const users3 = [
  { name: "John", age: 22 },
  { name: "Mike", age: 30 },
  { name: "Sarah", age: 28 },
  { name: "David", age: 20 }
];

const grt25 = users3.filter((user) => user.age > 25).map((user) => user.name)
console.log(grt25)

//Calculate total order amount
const orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 250 },
  { id: 3, amount: 150 }
];

const totalAm = orders.map((order) => order.amount).reduce((total, num)=> total = total + num)
console.log(totalAm)

//Calculate total only for completed orders
const orders4 = [
  { id: 1, amount: 100, status: "completed" },
  { id: 2, amount: 200, status: "pending" },
  { id: 3, amount: 300, status: "completed" }
];

const totalCompleted = orders4.filter((order)=> order.status === "completed").reduce((total, order)=> total = total + order.amount , 0)
console.log(totalCompleted)

//Convert an array into an object

//Question:

const users7 = [
  { id: 101, name: "John" },
  { id: 102, name: "Mike" },
  { id: 103, name: "Sarah" }
];

//Convert it to:

// {
//   101: "John",
//   102: "Mike",
//   103: "Sarah"
// }

const obj = users7.reduce((obj, user) => {
  obj[user.id] = user.name

  return obj
}, {})

console.log(obj)


//Count occurrences

//Question:

const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
];

//Expected:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

// 

const occurance = fruits.reduce(
  (obj1, fruit) => {
    obj1[fruit] = (obj1[fruit] || 0) + 1;

    return obj1
  }, {}

)
console.log(occurance)

//Find the highest-paid employee
const employees = [
  { name: "John", salary: 50000 },
  { name: "Mike", salary: 80000 },
  { name: "Sarah", salary: 70000 }
];

const highPaid = employees.reduce(
  (maxSalery, employee) => {
    // if(employee.salery > maxSalery.salery){
    //   return employee
    // }else{
    //   return maxSalery
    // }

    return employee.salary > maxSalery.salary ? employee : maxSalery;

  }
)

console.log(highPaid)


//Group employees by department

//Question:

const employees1 = [
  { name: "John", department: "IT" },
  { name: "Mike", department: "HR" },
  { name: "Sarah", department: "IT" },
  { name: "David", department: "Finance" }
];

//Expected:

// {
//   IT: ["John", "Sarah"],
//   HR: ["Mike"],
//   Finance: ["David"]
// }

const grEmp = employees1.reduce(
  (acc, emp) => {
    acc[employees1.department] = emp.name;
    return acc
  }, {}
)

console.log(grEmp)