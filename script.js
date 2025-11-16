/*ハンバーガーメニュー*/
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

/*見出し文字色*/
const headings = document.querySelectorAll('.fade-index');
function checkHeadings() {
    headings.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            heading.classList.add('active');
        } else {
            heading.classList.remove('active');
        }
    });
}
window.addEventListener('load', checkHeadings);
window.addEventListener('scroll', checkHeadings);

/*Skills 押下表示*/
/*function toggleDetail(el) {
    if (!el.classList.contains("Skills-icon")) return;
    const container = el.closest(".Skills-general");
    const detail = container.querySelector(".Skills-detail");
    detail.classList.toggle("active");
}
document.querySelectorAll(".Skills-icon").forEach(icon => {
    icon.addEventListener("click", () => toggleDetail(icon));
});*/
document.querySelectorAll(".Skills-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        const detail = icon.nextElementSibling.querySelector(".Skills-detail");
        detail.classList.toggle("active");
    });
});


