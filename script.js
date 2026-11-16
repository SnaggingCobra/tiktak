const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");


let currentPlayer = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(index) {
    if (board[index] !== "" || !gameActive) {
        return;      
    } 

    board[index] = currentPlayer;

    cells[index].innerText = currentPlayer;
    cells[index].classList.add(
        currentPlayer.toLowerCase()
    );

    checkWinner();
}

function checkWinner() {

    for (let combination of winningCombinations) {

        let [a, b, c] = combination;

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {

            statusText.innerText =
                "Player " + currentPlayer + " Wins! 🎉";

            gameActive = false;
            return;
        }
    }


    if (!board.includes("")) {

        statusText.innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    statusText.innerText =
        "Player " + currentPlayer + "'s Turn";
}

function restartGame() {

    board = ["", "", "", "", "", "", "", "", ""];


    currentPlayer = "X";
    gameActive = true;

    statusText.innerText = "Player X's Turn";

    cells.forEach(function(cell) {
        cell.innerText = "";

        cell.classList.remove("x", "o");
    });

}