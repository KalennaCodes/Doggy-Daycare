const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
const main = document.getElementById("mainHide")

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
});