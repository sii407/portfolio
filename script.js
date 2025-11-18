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
function toggleDetail(icon) {
    const detail = icon.closest(".Skills-frame").querySelector(".Skills-detail");
    const isOpen = detail.classList.contains("show");

    if (isOpen) {
        detail.classList.remove("show");
        window.removeEventListener("scroll", detail._scrollHandler);
        window.removeEventListener("resize", detail._resizeHandler);
        return;
    }

    detail.classList.add("show");

    function setPosition() {
        const rect = icon.getBoundingClientRect();
        detail.style.top  = rect.top + "px";
        detail.style.left = (rect.right + 3) + "px";
    }

    setPosition();
    detail._scrollHandler = setPosition;
    detail._resizeHandler = setPosition;
    window.addEventListener("scroll", detail._scrollHandler);
    window.addEventListener("resize", detail._resizeHandler);
}





