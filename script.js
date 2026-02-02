const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250;
  const y = Math.random() * 40;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", () => {
  noBtn.style.left = `${Math.random() * 250}px`;
});

yesBtn.addEventListener("click", () => {
  response.innerHTML = "YAYYY!! 💕🥰 I knew it. Happy Valentine’s Day! 💐";
});
