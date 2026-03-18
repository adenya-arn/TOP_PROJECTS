let players = {
  X: "Player 1",
  O: "Player 2",
};

///////////////////////////Game Board Object that is an IIFE

const GameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setCell = (index, value) => {
    if (board[index] === "") {
      board[index] = value;
      return true;
    }
    return false;
  };

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, setCell, reset };
})();

////////////////////////////////////////////Function to create a player
const createPlayer = function (name, sign) {
  return { name, sign, score: 0 };
};

let gameOver = false;

//////////////////////////// Function to check winner
const checkWinner = function (board) {
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

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combo };
    }
  }
  return null;
};

const GameController = (function () {
  let currentPlayer = "X";
  let gameOver = false;

  const playRound = function (index) {
    if (gameOver) return;

    const movePlayed = GameBoard.setCell(index, currentPlayer);

    if (!movePlayed) return;

    const board = GameBoard.getBoard();

    const result = checkWinner(board);

    if (result) {
      gameOver = true;
      // alert(`${winner} wins`);
      return { status: "win", ...result };
    }

    if (board.every((cell) => cell !== "")) {
      gameOver = true;
      // alert("Draw!");
      return { status: "draw" };
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    return { status: "continue" };
  };

  const getCurrentPlayer = () => currentPlayer;

  const resetGame = () => {
    GameBoard.reset();
    currentPlayer = "X";
    gameOver = false;
  };
  return { playRound, resetGame, getCurrentPlayer };
})();

////////////////////DOM manipulation
const startBtn = document.querySelector("#startBtn");

const startScreen = document.querySelector("#startScreen");

const cells = document.querySelectorAll(".cell");

const resetBtn = document.querySelector("#resetBtn");

const statusDisplay = document.querySelector("#status");

startBtn.addEventListener("click", () => {
  const p1 = document.querySelector("#p1").value || "Player 1";
  const p2 = document.querySelector("#p2").value || "Player 2";

  players.X = p1;
  players.O = p2;

  startScreen.style.display = "none";
  updateBoard();
});

cells.forEach((cell) => {
  cell.addEventListener("click", (evnt) => {
    const index = evnt.currentTarget.dataset.index;

    const result = GameController.playRound(Number(index));

    updateBoard();

    if (!result) return;

    if (result.status === "win") {
      statusDisplay.textContent = `${players[result.winner]} wins!`;
      highlightCells(result.combo);
      return;
    }

    // const board = GameBoard.getBoard();
    if (result.status === "draw") {
      statusDisplay.textContent = "It's a draw!";
      result;
    }
  });
});

function updateBoard() {
  const board = GameBoard.getBoard();

  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });
  //////////////////////////////////// // only show current player if game is not over
  if (!board.every((cell) => cell !== "") && !checkWinner(board)) {
    const current = GameController.getCurrentPlayer();
    statusDisplay.textContent = `Current Player: ${players[current]} (${current})`;
  }
}

resetBtn.addEventListener("click", () => {
  GameController.resetGame();

  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
  updateBoard();
});

function highlightCells(combo) {
  combo.forEach((index) => {
    // cells[index].style.backgroundColor = "lightgreen";
    cells[index].style.backgroundColor = "#22c55e";
    cells[index].style.color = "black";
  });
}

updateBoard();
////////////////My Tests or Trials
console.log(createPlayer("Arnold", "X"));
