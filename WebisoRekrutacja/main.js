var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let hamburgerOpened = document.getElementsByClassName("mobile-menu")[0];
let mobileNav = document.getElementsByClassName("mobile-menu-nav")[0];
let body = document.querySelector("body");

hamburgerOpened.addEventListener("click", function () {
    hamburgerOpened.classList.toggle("menu-opened");
    mobileNav.classList.toggle("mobile-nav-opened");
    body.classList.toggle("overflow-body");
})