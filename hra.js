import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "circle";
const squares = document.querySelectorAll(".container__game--square")

//Přidat křížek nebo kolečko
const yourTurn = (event) => {
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
  if (square.classList.contains('board__field--circle')) {
    return 'o';
  }
  else if (square.classList.contains('board__field--cross')) {
    return 'x';
  }
  else {
    return '_';
  }
  });

  const winner = findWinner(gameField);
  if (winner === "o" || winner === "x") {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 200);
  } else if (winner === "tie") {
    setTimeout(() => {
      alert("Hra skončila nerozhodně.");
      location.reload();
    }, 200
  ); 
  }
};
  const whoWon = () => {
    const winner = findWinner(gameField);
    if (winner === "o" || winner === "x") {
      alert(`Vyhrál hráč se symbolem ${winner}!`);
      location.reload();
    } else if (winner === "tie") {
      alert("Hra skončila remízou.");
    }
  };
    setTimeout(whoWon, 200);  
    


//yourTurn call
squares.forEach((square) => {
  square.addEventListener("click", yourTurn);
});

//Restart game
document.querySelector(".container-middle__restart").addEventListener("click", (e) => {
  const userRestart = confirm("Chcete restartovat hru?");
  if (userRestart === false) {
    e.preventDefault();
  }
});





