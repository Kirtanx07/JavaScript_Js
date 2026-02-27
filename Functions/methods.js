// =====================================================
// 🧠 JavaScript Array Methods — forEach, map, filter, reduce
// =====================================================

// These methods are used to loop through and manipulate arrays.
// Each one has a specific use case — learn when and why to use them.

// -----------------------------------------------------
// 🔹 1. forEach()  → Used to LOOP through array elements
// -----------------------------------------------------
/* Syntax:
array.forEach(function(element, index, array) {
    // code to execute for each element
});

let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});
// 👉 Use when you just want to perform an action (no return value).
*/
// -----------------------------------------------------
// 🔹 2. map()  → Creates a NEW array by transforming each element
// -----------------------------------------------------

/* Syntax:
array.map(function(element, index, array) {
    return newValue;
});
*/
let numbers = [1, 2, 3, 4, 5];

// Double every number
let doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// 👉 Use map() when you want to **return a new array** after transformation.

// -----------------------------------------------------
// 🔹 3. filter()  → Creates a NEW array with elements that pass a condition
// -----------------------------------------------------

/* Syntax:
array.filter(function(element, index, array) {
    return condition; // only keep true ones
});
*/
let marks = [90, 55, 72, 40, 88, 33];

// Get marks greater than or equal to 60
let passed = marks.filter(mark => mark >= 60);
console.log("Passed Students:", passed);

// 👉 Use filter() when you want to **select elements** that match a condition.

// -----------------------------------------------------
// 🔹 4. reduce()  → Reduces array to a single value (sum, product, etc.)
// -----------------------------------------------------

/* Syntax:
array.reduce(function(accumulator, currentValue, index, array) {
    return newAccumulatorValue;
}, initialValue);
*/
let prices = [100, 200, 300, 400];

// Calculate total price using reduce
let total = prices.reduce((sum, price) => sum + price, 0);
console.log("Total Price:", total);

// 👉 Use reduce() when you want to **combine all elements into one value**.

// -----------------------------------------------------
// 🧩 Quick Comparison Table
// -----------------------------------------------------
// | Method   | Returns New Array? | Used For                  |
// |-----------|--------------------|---------------------------|
// | forEach() | ❌ No              | Just looping              |
// | map()     | ✅ Yes             | Transforming each element |
// | filter()  | ✅ Yes             | Selecting some elements   |
// | reduce()  | ❌ (Single Value)  | Summing / combining data  |
// -----------------------------------------------------

// Example Challenge: Sum of squares of even numbers
let nums = [1, 2, 3, 4, 5, 6];
let sumEvenSquares = nums
    .filter(n => n % 2 === 0)   // take even numbers → [2, 4, 6]
    .map(n => n * n)            // square them → [4, 16, 36]
    .reduce((sum, n) => sum + n, 0); // sum all → 56

console.log("Sum of Even Squares:", sumEvenSquares);
