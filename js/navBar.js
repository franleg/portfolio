const barsMenu = document.querySelector(".menu-bars");
const enlaces = document.querySelector(".menu-links");
const nav = document.querySelector("nav");

let line1barsMenu = document.querySelector(".line1-menu-bars");
let line2barsMenu = document.querySelector(".line2-menu-bars");
let line3barsMenu = document.querySelector(".line3-menu-bars");

const animateBars = () => {
    line1barsMenu.classList.toggle("active");
    line2barsMenu.classList.toggle("active");
    line3barsMenu.classList.toggle("active");
}

const showMenu = () => {
    nav.classList.toggle("active");
    enlaces.classList.toggle("active");
}

barsMenu.addEventListener("click", () => {
    showMenu();
    animateBars();
});