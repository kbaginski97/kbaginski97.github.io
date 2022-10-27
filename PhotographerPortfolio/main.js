let hamburgerMenu = document.getElementsByClassName('hamburger')[0];
let header = document.querySelector('header');
let body = document.querySelector('body');

let navigationLink = document.querySelectorAll('.navigation-link');

hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('hamburger-opened')
    header.classList.toggle('mobile-menu');
    body.classList.toggle('hidden-body');
})

navigationLink.forEach(element => {
    element.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('hamburger-opened')
        header.classList.toggle('mobile-menu');
        body.classList.toggle('hidden-body');
    })
})

// Language-Switcher

let lngSwitcher = document.getElementsByClassName('language-switcher')[0];
let engLanguage = document.getElementsByClassName('language-english')[0];


lngSwitcher.addEventListener('click', function () {
    lngSwitcher.classList.toggle('lng-open');
})

    engLanguage.addEventListener('click', function () {
        lngSwitcher.classList.toggle('english-version');
    })

