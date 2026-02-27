let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rebut");
let newgam =document.querySelector("#newbut"); 
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg_container");

let user0 = true; //@ players X(false) and 0(true)



//Wining pattern
let Win_Patterns = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        console.log("Box was Clicked");

        if (user0) {          // player 0
            box.innerText = "0";
            user0 = false;
            box.style.backgroundColor = "Blue";

        } else {              // player X
            box.innerText = "X";
            user0 = true;
            box.style.backgroundColor = "Yellow";
        }
        box.disabled = true;

        checkWinner();
    });
});


const resetgame = () => {  // Reset the game
    user0 = true;
    enableboxes();
    msgContainer.classList.add("hide");

};


const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "white";
    }
    
};

const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
    
};

const showWinner = (winnner) => {
    msg.innerText = `Congratulations, Winner is ${winnner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
    
};




const checkWinner = () => {
    for (let pattern of Win_Patterns) {
            let pos1 = boxes[pattern[0]].innerText
            let pos2 = boxes[pattern[1]].innerText
            let pos3 = boxes[pattern[2]].innerText
        
            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 === pos2 && pos2 === pos3) {

                    console.log("Winner" , pos1);
                    showWinner(pos1);
                
                };
            };


    };
};

newgam.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)












































