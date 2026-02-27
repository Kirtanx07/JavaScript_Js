// Function to print greeting
function greet() {
    console.log("Hello you! Welcome to JavaScript ");
}
greet();  // function call

// Function to add two numbers and return result
function add(a, b) {
    return a + b; // returns sum
    console.log("Not executed")
}
console.log("Sum:", add(5, 10));
// -----------------------------
//  Global and Local Variables
// -----------------------------

let globalVar = "I am Global "; // declared outside any function

function showScope() {
    let localVar = "I am Local "; // declared inside the function
    console.log(globalVar); // accessible inside function
    console.log(localVar);  // accessible only inside this function
}

showScope();  // function call

console.log(globalVar); // accessible outside function
// console.log(localVar); //  Error: localVar is not defined

// Arrow function to add two numbers
const sum2 = (a, b) => {     //morden JS
    a + b;

}

console.log("Sum:", add(5, 10));

