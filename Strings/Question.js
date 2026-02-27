// Prompt a user to enter their full name
// Generate a username for them based on the input
// Username starts with '@', followed by their full name (no spaces)
// First letter capitalized
// Ending with the full name length (excluding spaces)

let name = prompt("Enter your full name");  
console.log("Full Name:", name);

// Remove all spaces
name = name.replace(" ", '');

// Capitalize first letter, rest lowercase
let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

// Get length of name (without spaces)
let nameLength = name.length;   

// Create username
let username = `@${formattedName}${nameLength}`;

console.log("Generated Username:", username);
