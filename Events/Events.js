// -------------------------------------------
// 1 INLINE EVENTS FUNCTIONS
// -------------------------------------------

// Called from HTML onclick=""
function inlineClick() {
    alert("Inline click event triggered!");
}

// Called from HTML onmouseover=""
function inlineHover() {
    alert("Inline hover event triggered!");
}



// -------------------------------------------
// 2️ EVENT LISTENERS (Recommended Method)
// -------------------------------------------

// ---- Click Event ----
let btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
    console.log("Button clicked!");
    showEventDetails(event);
});


// ---- Double Click Event ----
let dbl = document.getElementById("dbl");
dbl.addEventListener("dblclick", function (event) {
    console.log("Double clicked!");
    showEventDetails(event);
});


// ---- Mouseover Event ----
let hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", function (event) {
    showEventDetails(event);
});


// ---- Keydown Event (for typing) ----
let keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keydown", function (event) {
    showEventDetails(event);
});



// -------------------------------------------
//  EVENT OBJECT DETAILS
//    event.type  → click, dblclick, mouseover, keydown
//     event.target → which element triggered the event
// -------------------------------------------

function showEventDetails(event) {
    let info = `
        Event Type: ${event.type}<br>
        Target Element: ${event.target.tagName}<br>
        ID: ${event.target.id || "No ID"}<br>
        Value (for input): ${event.target.value || "N/A"}
    `;

    document.getElementById("eventInfo").innerHTML = info;
}
