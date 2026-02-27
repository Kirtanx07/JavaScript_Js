let str = "Kirtan";

//  Using for loop
for (let i = 0; i < str.length; i++) {
    console.log("For Loop:", str[i]);
}

//  Using for...of loop
for (let ch of str) {
    console.log("For-Of Loop:", ch);
}

 
//  FOR...OF LOOP (Used for Arrays)
let arr = ["Kirtan", "Anshika", "AIML"];
for (let name of arr) {
    console.log("For-Of Loop:", name);
}

//  FOR...IN LOOP (Used for Objects)
let student = {
    name: "Kirtan",
    branch: "AIML",
    year: 2029
};

for (let key in student) {
    console.log("For-In Loop:", key, "=", student[key]);
}
