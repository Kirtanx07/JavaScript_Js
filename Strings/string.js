// ------------------------------
// 1) String Declaration
// ------------------------------

let str1 = "Kirtan";       // double quotes
let str2 = 'Kori';         // single quotes
let str3 = `Hello ${str1}`; // backticks → template literals

console.log(str3);          // Hello Kirtan

// ------------------------------
// 2) Indexing
// ------------------------------

// Strings are indexed (0-based)
let name = "Kirtan";

console.log(name[0]); // K
console.log(name[3]); // t
console.log(name[name.length - 1]); // n (last character)

// Strings are immutable
// name[0] = "M"; //  doesn't work

// ------------------------------
// 3) Template Literals & String Interpolation
// ------------------------------

let age = 18;

// Using template literals
let info = `My name is ${name} and I am ${age} years old`;
console.log(info);

// ------------------------------
// 4) Escape Characters
// ------------------------------

let text = "He said, \"Hello World!\"";  // double quote inside string
console.log(text);

let newLine = "Line1\nLine2";           // \n → new line
console.log(newLine);

let tabbed = "Hello\tWorld";             // \t → tab
console.log(tabbed);

// ------------------------------
// 5) Common String Methods
// ------------------------------

let msg = "  hello world  ";

console.log(msg.length);        // 13 → length of string
console.log(msg.toUpperCase()); // "HELLO WORLD"
console.log(msg.toLowerCase()); // "hello world"
console.log(msg.trim());        // "hello world" → removes spaces
console.log(msg.includes("hello")); // true
console.log(msg.startsWith("  h"));  // true
console.log(msg.endsWith("d  "));    // true
console.log(msg.indexOf("o"));       // 4 → first occurrence
console.log(msg.lastIndexOf("o"));   // 7 → last occurrence
console.log(msg.slice(2, 7));       // "hello" → substring
console.log(msg.replace("world", "JS")); // "  hello JS  "

// ------------------------------
// 6) Immutability
// ------------------------------

// Strings cannot be changed directly
let str = "Kirtan";
// str[0] = "M"; //  not allowed
str = "Mirtan"; //  we can assign a new string
console.log(str);
