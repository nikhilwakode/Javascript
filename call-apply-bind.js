const employee = {
 	name: "John" 
}; 
function printEmployee(department, role) { 
console.log( this.name, department, role ); 
}

printEmployee.call(employee, "IT", "Developer");
printEmployee.apply(employee, ["IT", "Developer"]);
const print = printEmployee.bind(employee);
print("IT", "Developer");