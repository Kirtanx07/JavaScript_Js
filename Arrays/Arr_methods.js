// Array Methods Example
let games = ["GTA", "PUBG", "Minecraft"];

console.log("Original:", games);
// Output: [ 'GTA', 'PUBG', 'Minecraft' ]

// push() → Add elements at the end
games.push("FreeFire", "Valorant");
console.log("After push:", games);
// Output: [ 'GTA', 'PUBG', 'Minecraft', 'FreeFire', 'Valorant' ]

// pop() → Remove last element
games.pop();
console.log("After pop:", games);
// Output: [ 'GTA', 'PUBG', 'Minecraft', 'FreeFire' ]

// toString() → Convert array to string
console.log("toString:", games.toString());
// Output: GTA,PUBG,Minecraft,FreeFire

// concat() → Join two arrays
let oldGames = ["Mario", "Contra"];
let allGames = games.concat(oldGames);
console.log("After concat:", allGames);
// Output: [ 'GTA', 'PUBG', 'Minecraft', 'FreeFire', 'Mario', 'Contra' ]

// unshift() → Add elements at the beginning
games.unshift("Clash of Clans");
console.log("After unshift:", games);
// Output: [ 'Clash of Clans', 'GTA', 'PUBG', 'Minecraft', 'FreeFire' ]

// slice() → Returns a portion (does NOT change original)
let sliced = games.slice(1, 3);  // from index 1 to 2
console.log("slice(1,3):", sliced);
// Output: [ 'GTA', 'PUBG' ]

// splice() → Add/Remove elements (changes original)
games.splice(2, 1, "BGMI"); // remove 1 element at index 2, add "BGMI"
console.log("After splice:", games);
// Output: [ 'Clash of Clans', 'GTA', 'BGMI', 'Minecraft', 'FreeFire' ]



