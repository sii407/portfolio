const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

const links = menu.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
