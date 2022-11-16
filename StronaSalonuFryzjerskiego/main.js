hamburgerDiv = document.getElementsByClassName('hamburger-menu')[0];
header = document.getElementsByClassName('main-header')[0];
body = document.querySelector('body');
MobileMenuItem = document.querySelectorAll('.mobile-item');


hamburgerDiv.addEventListener('click', () => {
  hamburgerDiv.classList.toggle('open');
  header.classList.add('open');
  body.classList.toggle('overflow-body');
})

MobileMenuItem.forEach(element => {
  element.addEventListener('click', () => {
    hamburgerDiv.classList.remove('open');
    header.classList.remove('open');
    body.classList.toggle('overflow-body');
  })
});


var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

AOS.init();
