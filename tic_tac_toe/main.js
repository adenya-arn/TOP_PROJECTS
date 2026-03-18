///////////////////////////Game Board Object
const gameBoard = {
  board: ["", "", "", "", "", "", "", "", ""],
};

////////////////////////////////////////////Function to create a player
const createPlayer = function (name, sign) {
  return { name, sign, score: 0 };
};

let gameOver = false;

//////////////////////////// Function to check winner, should be IIFE??
const checkWinner = function (gameBoard) {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winningCombination) {
    const [a, b, c] = combo;

    if (
      gameBoard.board[a] &&
      gameBoard.board[a] === gameBoard.board[b] &&
      gameBoard.board[a] === gameBoard.board[c]
    ) {
      return gameBoard.board[a];
    }
  }
  return null;
};

//////////////////Function to check for draw

const gameDraw = function (gameBoard) {
  return gameBoard.board.every((cell) => cell !== "");
};

let currentPlayer = "X";
const handleMove = function (index) {
  if (gameOver) return alert("Game Over");

  if (gameBoard.board[index] !== "") return;

  gameBoard.board[index] = currentPlayer;

  const winner = checkWinner(gameBoard);

  if (winner) {
    gameOver = true;
    return alert(`${winner} wins`);
  }

  if (gameDraw(gameBoard)) {
    gameOver = true;
    return alert("Draw!");
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

////////////////////DOM manipulation
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", (evnt) => {
    const index = evnt.currentTarget.dataset.index;
    handleMove(Number(index));
    updateBoard();
  });
});

function updateBoard() {
  cells.forEach((cell, index) => {
    cell.textContent = gameBoard.board[index];
  });
}

updateBoard();
////////////////My Tests or Trials
console.log(createPlayer("Arnold", "X"));
