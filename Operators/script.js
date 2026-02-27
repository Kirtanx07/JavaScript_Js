// ------------------------------
// Arithmetic Operators
// ------------------------------
let a = 10;
let b = 3;

console.log("Arithmetic:");
console.log(a + b);   // Addition: 13
console.log(a - b);   // Subtraction: 7
console.log(a * b);   // Multiplication: 30
console.log(a / b);   // Division: 3.33
console.log(a % b);   // Modulus: 1
console.log(a ** b);  // Exponent: 1000


// Pre-Increment (++a)
console.log(++a); // 11 (first increase, then print)

// Post-Increment (a++)
console.log(a++); // 11>>>12 (print first, then increase)
console.log(a);   // 12



// Pre-Decrement (--b)
console.log(--b); // 2 (first decrease, then print)

// Post-Decrement (b--)
console.log(b--); // 2 (print first, then decrease)
console.log(b);   // 1






// ------------------------------
// Assignment Operators
// ------------------------------
let x = 10;

x += 5;     // x = 15  // a= a + 5
x -= 3;     // x = 12
x *= 2;     // x = 24
x /= 4;     // x = 6
x %= 4;     // x = 2
x **= 3;    // x = 8

console.log("Assignment:", x);


// ------------------------------
// Comparison Operators
// ------------------------------
console.log("Comparison:");
console.log(5 == "5");    // true //Convert to Number from  string
console.log(5 === "5");   // false //Type Check
console.log(10 != "10");  // false
console.log(10 !== "10"); // true //Type Check
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 9);     // false


// ------------------------------
// Logical Operators
// ------------------------------
console.log("Logical:");
console.log(true && false);  // false  * AND
console.log(true || false);  // true   +  OR
console.log(!true);          // false  ' NOT


// ------------------------------
// String Operators
// ------------------------------
let first = "Kirtan";
let last = "Kori";

let fullName = first + " " + last;
console.log("String:", fullName);

let greet = "Hello ";
greet += "World!";
console.log(greet);


// ------------------------------
// Ternary Operator
// ------------------------------
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary:", status);


// ------------------------------
// Type Operators
// ------------------------------
console.log("Typeof:");
console.log(typeof 123);       // number
console.log(typeof "hello");   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (special case)
console.log(typeof 123n);      // bigint
console.log(typeof Symbol());  // symbol

console.log([] instanceof Array);   // true
console.log({} instanceof Object);  // true


// ------------------------------
// Bitwise Operators
// ------------------------------
console.log("Bitwise:");
console.log(5 & 1);  // AND: 1
console.log(5 | 1);  // OR: 5
console.log(5 ^ 1);  // XOR: 4
console.log(~5);     // NOT: -6
console.log(5 << 1); // Left shift: 10
console.log(5 >> 1); // Right shift: 2
