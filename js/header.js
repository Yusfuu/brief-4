const hamburger = document.querySelector("body > header > div");
const overlay = document.querySelector("body > div");
const close = document.querySelector("body > div > a");

hamburger.addEventListener('click', () => {
  overlay.style.width = "100%"
});
close.addEventListener('click', () => {
  overlay.style.width = "0%"
});