// ---------------------------------------------
// FOR LOOP FORMAT (IMPORTANT NOTE)
// for (initialization; condition; updation) {
//     // code to repeat
// }
// ---------------------------------------------

// Example:
for (let i = 1; i <= 1; i++) {   // i starts at 1, runs till 1, then stops
    console.log("Kirtan");
}

console.log("Loop has ended");


// Program: Sum of first n numbers
// Example: if n = 5 → sum = 1 + 2 + 3 + 4 + 5 = 15

let num = prompt("Enter the number n");  // user inputs a value
num = Number(num);                       // convert string → number

let sum = 0;                              // variable to store sum

// Loop runs from 1 to num
for (let i = 1; i <= num; i++) {
    console.log(i) //testing
    sum += i;                             // add i to sum each time
}

console.log("SUM of first",num,"Numbers:", sum);
