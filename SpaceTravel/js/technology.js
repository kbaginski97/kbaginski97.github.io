var swiper = new Swiper(".mySwiper", {
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 130,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});


let mobileHamburger = document.getElementsByClassName('mobile-hamburger')[0];
let mobileNav = document.getElementsByClassName('main-nav')[0];
let header = document.querySelector('header');
let body = document.querySelector('body');

mobileHamburger.addEventListener('click', function () {
    header.classList.toggle('opened-menu');
    mobileNav.classList.toggle('opened-nav');
    body.classList.toggle('body-hidden-no-fx');
})