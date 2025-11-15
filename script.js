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

// ページ読み込み時にチェック
window.addEventListener('load', checkHeadings);

// スクロール時にチェック
window.addEventListener('scroll', checkHeadings);


