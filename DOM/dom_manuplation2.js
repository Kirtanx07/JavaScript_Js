/*let div = document.querySelector("div");   //Accesing div
console.log(div.innerText);
console.log(div.innerHTML);                 //print nodes (h2, ul -l1,l1,l1)

div.innerText = "abcd";
console.log(div.innerText);
console.log(div.innerHTML);   

div.innerHTML = "<div>Inner div</div>";
console.log(div.innerText);
console.log(div.innerHTML);   
*/
let heading = document.querySelector("h1");
console.log(heading.innerText);
console.log(heading.innerHTML);

heading.innerText = "Hollaaaa";
console.log(heading.innerText);
console.log(heading.innerHTML);   

heading.innerHTML = "<h1>DoM Manuplation</h1>";
console.log(heading.innerText);
console.log(heading.innerHTML);   

//textContent
console.log(heading.textContent);   //change none to hidden in h1

