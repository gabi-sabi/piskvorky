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

document.querySelector("button:nth-child(1)").addEventListener("click", yourTurn);
document.querySelector("button:nth-child(2)").addEventListener("click", yourTurn);
document.querySelector("button:nth-child(3)").addEventListener("click", yourTurn);
document.querySelector("button:nth-child(4)").addEventListener("click", yourTurn);
document.querySelector("button:nth-child(5)").addEventListener("click", yourTurn);
document.querySelector("button:nth-child(6)").addEventListener("click", yourTurn);
document.querySelector("button:nth-child(7)").addEventListener("click", yourTurn);
document.querySelector("button:nth-child(8)").addEventListener("click", yourTurn);
document.querySelector("button:nth-child(9)").addEventListener("click", yourTurn);
document.querySelector("button:nth-child(10)").addEventListener("click", yourTurn);

document.querySelector(".container-middle__restart").addEventListener("click", (e) => {
  const userRestart = confirm("Ukončit hru?");
  if (userRestart === false) {
    e.preventDefault();
  }
});
