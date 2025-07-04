let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-bttn");
let newgbttn = document.querySelector("#new-bttn");
let msge = document.querySelector("#msg");
let container = document.querySelector(".msg-container");
let turnO = true;
let count = 0; // for checking draw

const winpattern = [
    [0, 3, 6],
    [0, 1, 2],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];
// Handle box click
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X";
        } else {
            box.innerText = "O";
        }
        box.disabled = true;
        turnO = !turnO;
        count++;
        checkWinner();
    });
});

// Reset Game
resetbtn.addEventListener("click", () => {
    resetBoard();
});

// New Game
newgbttn.addEventListener("click", () => {
    resetBoard();
    hidemessage();
});

function resetBoard() {
    turnO = true;
    count = 0;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
}

// Check for winner
const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            msge.innerText = `Player ${pos1} wins the game! 🎉`;
            showmessage();
            disableAllBoxes();
            return;
        }
    }

    // Check for draw
    if (count === 9) {
        msge.innerText = "It's a draw! 🤝";
        showmessage();
    }
};

function disableAllBoxes() {
    boxes.forEach((box) => (box.disabled = true));
}

// Show/hide popup
function showmessage() {
    container.classList.remove("hide");
}

function hidemessage() {
    container.classList.add("hide");
}

window.onload = () => {
    hidemessage();
};