
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', e => {
    document.querySelector(".nav-menu").classList.toggle("active");
})