const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("hamburger-menu");
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
