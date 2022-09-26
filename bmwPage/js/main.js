let hamb = document.getElementById('hamburger-closed');
let hamburgerClosed = document.getElementsByClassName('hamburger-lines')[0];
let navBarClosed = document.getElementsByClassName('main-header')[0];
let myLink = document.querySelectorAll('.menu-item');
let mainHeader = document.getElementsByClassName('main-header')[0]
let closeFormBtn = document.getElementsByClassName('closeform')[0];
let SwiperImg = document.getElementsByClassName('swiper-menu')[0];
let body = document.querySelector('body');

let swiperBtn = document.getElementsByClassName('swiper-button')[0];

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
});

swiperBtn.addEventListener('click', function () {
    location.href = "#testdrive";
})

hamburgerClosed.addEventListener('click', function () {
    hamburgerClosed.classList.toggle('hamburgerOpen');
    navBarClosed.classList.toggle('menu-opened');
    SwiperImg.classList.toggle('imgOpen');
    body.classList.toggle('overflowedbody');
});

myLink.forEach(link => {
    link.addEventListener('click', () => {
        navBarClosed.classList.remove('menu-opened');
        hamburgerClosed.classList.remove('hamburgerOpen');
        body.classList.toggle('overflowedbody');
    })
})
