let mobileHamburger = document.getElementsByClassName('mobile-hamburger')[0];
let mobileNav = document.getElementsByClassName('main-nav')[0];
let header = document.querySelector('header');
let body = document.querySelector('body');

mainBtn = document.getElementsByClassName('main-button')[0];

mobileHamburger.addEventListener('click', function () {
  header.classList.toggle('opened-menu');
  mobileNav.classList.toggle('opened-nav');
  body.classList.toggle('body-hidden');
})

mainBtn.addEventListener('click', function () {
  location.href = "destination.html";
})