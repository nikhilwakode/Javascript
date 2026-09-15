function bankAccount(initialBalance){
    let balance = initialBalance;

    return{
        depositeAmount(deposit){
            balance = balance + deposit;
            return balance;
        },

        getBalance(){
            return balance;
        }
    }
}

const account = bankAccount(1000);

console.log(account.getBalance())

const newAccount = bankAccount(2000);
console.log(newAccount.getBalance());
newAccount.depositeAmount(500);
console.log(newAccount.getBalance());



//Another Example of closure: (counter)

function counter(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());   



function counter2(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
 const increaseCounter = counter2();
console.log(increaseCounter());
console.log(increaseCounter());
console.log(increaseCounter());

//another example of closure: (counter) :

function multipleBy(num){
    return function(x){
        return x * num;
    }
}

const double = multipleBy(2);
console.log(double(5)); // Output: 10

const triple = multipleBy(3);
console.log(triple(5)); // Output: 15

//This pattern is called function factory, where a function returns another function. It allows you to create specialized functions based on the input parameters.