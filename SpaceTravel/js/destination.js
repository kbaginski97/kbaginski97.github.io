let planetMenu = document.querySelectorAll('.content-item');
let mobileHamburger = document.getElementsByClassName('mobile-hamburger')[0];
let mobileNav = document.getElementsByClassName('main-nav')[0];
let destinationMenu = document.querySelectorAll('.content-item');
let header = document.querySelector('header');
let body = document.querySelector('body');

let moonContentBtn = document.getElementById('#moon');
let marsContentBtn = document.getElementById('#mars');

planetMenu.forEach(element => {
  element.addEventListener('click', function () {
    element.classList.toggle('open');
  })
});

mobileHamburger.addEventListener('click', function () {
  header.classList.toggle('opened-menu');
  mobileNav.classList.toggle('opened-nav');
  body.classList.toggle('body-hidden');
})

