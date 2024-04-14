let currentPlayer = "circle";

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
};


const squares = document.querySelectorAll(".container__game--square")
squares.forEach((square) => {
  square.addEventListener("click", yourTurn);
})


document.querySelector(".container-middle__restart").addEventListener("click", (e) => {
  const userRestart = confirm("Ukončit hru?");
  if (userRestart === false) {
    e.preventDefault();
  }
});
