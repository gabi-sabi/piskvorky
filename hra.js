import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "circle";
const squares = document.querySelectorAll(".container__game--square");

//Přidat křížek nebo kolečko
const yourTurn = async (event) => {
  event.target.disabled = true;
  if (currentPlayer === "circle") {
    event.target.classList.add("board__field--circle");
    currentPlayer = "cross";
    document.getElementById("current-player").src = "./assets/cross.svg";
  } else {
    event.target.classList.add("board__field--cross");
    currentPlayer = "circle";
    document.getElementById("current-player").src = "./assets/circle.svg";
  }

  //Vyhodnocení hry
  // Kontrola hry o výhru
  const gameField = [...squares].map((square) => {
    if (square.classList.contains("board__field--circle")) {
      return "o";
    } else if (square.classList.contains("board__field--cross")) {
      return "x";
    } else {
      return "_";
    }
  });

  const whoWon = async () => {
    const winner = findWinner(gameField);
    if (winner === "o" || winner === "x") {
      alert(`Vyhrál hráč se symbolem ${winner.toUpperCase()}.`);
      location.reload();
    } else if (winner === "tie") {
      alert("Hra skončila nerozhodně.");
      location.reload();
    } else {
      if (currentPlayer === "cross") {
        squares.forEach((square) => {
          square.disabled = true;
        });

        const response = await fetch(
          "https://piskvorky.czechitas-podklady.cz/api/suggest-next-move",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              board: gameField,
              player: "x",
            }),
          }
        );

        const data = await response.json();
        const { x, y } = data.position;
        const index = squares[x + y * 10];

        squares.forEach((square) => {
          if (
            square.classList.contains("board__field--circle") ||
            square.classList.contains("board__field--cross")
          ) {
            square.disabled = true;
          } else {
            square.disabled = false;
          }
        });

        index.click();
      }
    }
  };

  setTimeout(whoWon, 200);
};

//yourTurn call
squares.forEach((square) => {
  square.addEventListener("click", yourTurn);
});

//Restart game
document
  .querySelector(".container-middle__restart")
  .addEventListener("click", (e) => {
    const userRestart = confirm("Opravdu chceš restartovat hru?");
    if (userRestart === false) {
      e.preventDefault();
    }
  });
