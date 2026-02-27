/*
An array is a data structure that stores a collection of elements
of the same data type in contiguous memory locations.

Each element in an array can be accessed using an index,
which usually starts from 0.

Mutable Data Type
Arrays have a fixed size and allow fast access using indexes.
*/

let games = ["GTA", "Minecraft", "Crawas", "PUBG", "FreeFire"];

console.log(games.length)

for(let i=0 ; i<games.length; i++) {
    console.log(games[i])

}

// For ma given array with marks of student
//[85,97,44,37,76,60]
//find the average marks of entire class

console.log("Question: Average Marks")

let marks=[85,97,44,37,76,60];
let tostud=marks.length; sum=0;

for(let k=0; k<tostud; k++){
    console.log(marks[k])
    sum=sum+ marks[k]

}
console.log("Average Marks:",sum/tostud)

//same using while loop