const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");
const area = document.querySelector(".button-area");

function moveNoButton() {
  const areaRect = area.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

noBtn.addEventListener("mouseover", moveNoButton);

yesBtn.addEventListener("click", () => {
  response.innerHTML = "YAYYY!! 💕🥰<br>I love you. Happy Valentine’s Day 💐";
});
