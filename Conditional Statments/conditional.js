// Simple IF-else statement
//syntax

let age = "voter"; //18 //17 and check

if (age >= 18) {
    console.log("You are eligible.");
}

if (age < 18) {
    console.log("You are not eligible."); // will not run
}
else {
    console.log("Invailed Voter")
}
//-------------------------------------//
// Simple else-if
let marks = 100;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: AApki feilding set hai");
}


//-------------------------------------//
// Basic ternary example
let agee = 18;

// condition ? valueIfTrue : valueIfFalse
let result = (agee >= 18) ? "Adult" : "Minor";

console.log(result); // Adult


/* Question

// Get user to input a number 
// using prompt{"Enter a number"}
// check if the number is multiple of 5 or not

let num=prompt("Enter a Number")
if (num%5===0) {
    console.log(num,"Multiple of 5")
}
else{
    console.log(num,"Not a multiple of 5")
}
*/


// if: starts a new condition check
// else if: checks another condition only if previous if was false
// else: runs when none of the above conditions are true
