let hamburgerClosed = document.getElementsByClassName('hamburger-lines')[0];

let navBarClosed = document.getElementsByClassName('main-header')[0];


hamburgerClosed.addEventListener('click', function () {
    hamburgerClosed.classList.toggle('hamburgerOpen');
    navBarClosed.classList.toggle('menu-opened');
});

