const expandBtn = document.querySelector(".expand");
const screen = document.querySelector(".screen");

expandBtn.addEventListener("click", () => {
  screen.classList.toggle("screen--expanded")
})