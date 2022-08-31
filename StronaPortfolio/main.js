let hamburgerClosed = document.getElementsByClassName('hamburger-lines')[0];

let navBarClosed = document.getElementsByClassName('main-header')[0];

let myLink = document.querySelectorAll('.menu-item');

hamburgerClosed.addEventListener('click', function () {
    hamburgerClosed.classList.toggle('hamburgerOpen');
    navBarClosed.classList.toggle('menu-opened');
});

myLink.forEach(link => {
    link.addEventListener('click', () => {
        navBarClosed.classList.remove('menu-opened');
        hamburgerClosed.classList.remove('hamburgerOpen');
    })
})