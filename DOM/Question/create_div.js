//Create div dives with commen class name - "box"
//  accesss them and add some unique text to each

let divs = document.querySelectorAll(".box");
let idx=0;
for(div of divs) {
    div.innerText = `New Value ${idx}`;
    idx++
    console.log(div.innerText);
}

