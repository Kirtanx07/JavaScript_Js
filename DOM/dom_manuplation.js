/*===========================
📘 DOM MANIPULATION – FULL NOTES (JS ONLY)
==========================================

DOM (Document Object Model):
---------------------------
• JS can access & modify HTML using DOM.
• DOM converts the webpage into a TREE structure.

DOM Manipulation Process:
-------------------------
1️⃣ Select an HTML element  
2️⃣ Read or Change its content  
3️⃣ Change its style  
4️⃣ Create new elements  
5️⃣ Add(insert) elements  
6️⃣ Remove/Delete elements  

==========================================
1️⃣ SELECTING ELEMENTS
==========================================
*/

let h1 = document.getElementById("heading");        // Select by id
//console.log(h1);
let boxes = document.getElementsByClassName("para"); // Select by class //elements
//console.log(boxes);
let paragraphs = document.getElementsByTagName("p"); // Select by tag
//console.log(paragraphs);
let firstBox = document.querySelector("p");     // Select first match //#id  //.class // "tag"
//console.log(firstBox);
let allBoxes = document.querySelectorAll(".para");  // Select all matches
//console.log(allBoxes);

/*
==========================================
2️⃣ READING & CHANGING TEXT / HTML
==========================================
*/
// element.tagname  returns tag for element nodes
//DOM TREE:
// DOM TREE:
// Browser converts HTML into a tree-like structure.
// <html> is root → contains <head> & <body>.
// Each tag = node (element node*(imp), text node, comment nodes).
// Nodes have parent, children, siblings.
// JS uses DOM to read/change HTML (text, style, elements).

//Navigation Topic !! Flowchart


h1.innerText = "Updated Heading";  
// innerText → shows visible text only

h1.textContent = "Showing ALL text (visible + hidden)";  
// textContent → shows every text including hidden

h1.innerHTML = "<i>Kirtan is learning DOM 🚀</i>";  
// innerHTML → interprets HTML tags




/* 
==========================================
 CHANGING STYLES
==========================================
*/

h1.style.color = "blue";
h1.style.backgroundColor = "yellow";
h1.style.fontSize = "28px";


/* 
==========================================
 CREATE NEW ELEMENTS
==========================================
*/

let newPara = document.createElement("p");  // Create <p>
newPara.innerText = "This is a new paragraph created using JS.";


/* 
==========================================
 ADD / INSERT ELEMENTS INTO HTML
==========================================
*/

document.body.append(newPara);   // Add at the END of body
// appendChild(newPara) → also works

let container = document.querySelector("#container");
//container.prepend(newPara);      // Add at the START of container

//container.append(newPara);       // Add at END of container

let anotherPara = document.createElement("p");
anotherPara.innerText = "Inserted before heading";
h1.before(anotherPara);          // Insert BEFORE element

h1.after(anotherPara);           // Insert AFTER element


/* 
=========================================
 REMOVE / DELETE ELEMENTS
==========================================
*/

h1.remove();   // removes the heading from page


/* 
==========================================
 FULL WORKING EXAMPLE
==========================================
*/

let title = document.getElementById("mainTitle");

// Change text
//title.innerText = "DOM Manipulation Complete!";

// Change style
//title.style.color = "green";

// Create and insert element
let msg = document.createElement("h3");
msg.innerText = "New element added using JS!";
document.body.append(msg);

// Delete element after 3 seconds
setTimeout(() => {
    msg.remove();
}, 3000);

