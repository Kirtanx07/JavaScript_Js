
// The forEach() method executes a provided callback function 
// once for each element in the array, in order.

// Syntax:
// array.forEach(callbackFunction(currentValue, index, array));

// Parameters:
// currentValue → The element being processed in the array
// index        → The index of the current element (optional)
// array        → The array that forEach() is being applied to (optional)

// Note: forEach() does NOT return anything. It is mainly used
// for executing a function for each element (like printing, counting, etc.)

// ------------------------------------------------------
// 🔹 Example 1: Basic Usage
// ------------------------------------------------------

let fruits = ["apple", "banana", "mango"];

// Using forEach() with an anonymous callback function
fruits.forEach(function(element, index) {
    console.log(`Fruit ${index + 1}: ${element}`);
});

// Output:
// Fruit 1: apple
// Fruit 2: banana
// Fruit 3: mango

// ------------------------------------------------------
// 🔹 Example 2: Using Arrow Function (Short Syntax)
// ------------------------------------------------------

let numbers = [10, 20, 30, 40];

numbers.forEach((num, index) => {
    console.log(`Index ${index}: Number is ${num}`);
});

// Output:
// Index 0: Number is 10
// Index 1: Number is 20
// Index 2: Number is 30
// Index 3: Number is 40

// ------------------------------------------------------
// 🔹 Example 3: Defining Callback Function Separately
// ------------------------------------------------------

// Define a callback function
function printCar(car, index) {
    console.log(`Car ${index + 1}: ${car}`);
}

// Create an array
let cars = ["BMW", "Audi", "Tesla"];

// Pass the function as a callback
cars.forEach(printCar);

// Output:
// Car 1: BMW
// Car 2: Audi
// Car 3: Tesla

// ------------------------------------------------------
// 🔹 Example 4: Practical Example — Sum of Array Elements
// ------------------------------------------------------

let marks = [90, 85, 88, 92, 80];
let total = 0;

// Add each mark to total
marks.forEach(function(mark) {
    total += mark; // total = total + mark
});

console.log("Total Marks:", total); // Output: 435
console.log("Average Marks:", total / marks.length); // Output: 87

// ------------------------------------------------------
// 🔹 Example 5: Vowel Counter using forEach()
// ------------------------------------------------------

function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Convert string to lowercase and split into characters
    str.toLowerCase().split('').forEach(char => {
        if (vowels.includes(char)) {
            count++;
        }
    });

    console.log(`Total vowels in "${str}":`, count);
}

countVowels("Kirtan");

// Output: Total vowels in "Kirtan": 2

// Using the ForEach loop Print the square of each number 1

arr=[5,45,76,98,2]
arr.forEach(function(arr)  {
    console.log(arr**2);

});