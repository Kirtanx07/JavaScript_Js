// ----- DARK MODE TOGGLE -----

let modebut = document.querySelector("#mode");
let currmode = "light"; // dark

modebut.addEventListener("click", () => {

    if (currmode === "light") {
        document.body.style.backgroundColor = "black";
        currmode = "dark";
    } else {
        document.body.style.backgroundColor = "white";
        currmode = "light";
    }

    alert(`changed to ${currmode} mode`);
});


// ----- BOX COLOR CHANGE ON HOVER -----

let allBoxes = document.querySelectorAll(".box");
let body = document.body;
allBoxes.forEach(box => {
    
    // when cursor enters box
    box.addEventListener("mouseover", () => {
        body.style.backgroundColor = "lightblue";   // highlight
    });

    // when cursor leaves box
    box.addEventListener("mouseout", () => {
        body.style.backgroundColor = "white";       // default
    });
});
