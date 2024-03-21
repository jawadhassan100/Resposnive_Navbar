const menuHamburger = document.querySelector(".menuHamburger");
const nav_links = document.querySelector(".nav-links");

menuHamburger.addEventListener('click' , toggleMenu);

function toggleMenu() {
    nav_links.classList.toggle("mobile-menu");
};