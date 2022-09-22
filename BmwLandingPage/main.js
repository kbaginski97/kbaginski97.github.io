let hamb = document.getElementById('hamburger-closed');
let hamburgerClosed = document.getElementsByClassName('hamburger-lines')[0];
let navBarClosed = document.getElementsByClassName('main-header')[0];
let myLink = document.querySelectorAll('.menu-item');
let mainHeader = document.getElementsByClassName('main-header')[0]
let closeFormBtn = document.getElementsByClassName('closeform')[0];

const pagination = document.querySelectorAll(".js__pagination");
const slider = document.querySelector(".hero__slider");
pagination.forEach((el) => {
    el.addEventListener("click", () => {
        pagination.forEach((el) => {
            el.classList.remove("js__pagination--active");
        });
        el.classList.add("js__pagination--active");
        slider.style.transform = `translateX(-${el.dataset.number - 1}00vw)`;
    });
});

hamburgerClosed.addEventListener('click', function () {
    hamburgerClosed.classList.toggle('hamburgerOpen');
    navBarClosed.classList.toggle('menu-opened');
});

// myLink.forEach(link => {
//     link.addEventListener('click', () => {
//         navBarClosed.classList.remove('menu-opened');
//         hamburgerClosed.classList.remove('hamburgerOpen');
//     })
// })


let submitBtn = document.getElementById('formSubmit');
let popOutScreen = document.getElementsByClassName('form-pop-out')[0];
let body = document.querySelector('body');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popOutScreen.classList.toggle('popout');
    body.classList.toggle('overflowedbody');
})

closeFormBtn.addEventListener('click', function () {
    popOutScreen.classList.remove('popout');
    body.classList.remove('overflowedbody');
})