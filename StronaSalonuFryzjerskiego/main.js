hamburgerDiv = document.getElementsByClassName('hamburger-menu')[0];
header = document.getElementsByClassName('main-header')[0];

hamburgerDiv.addEventListener('click', function () {
    hamburgerDiv.classList.toggle('open');
    header.classList.toggle('open');
})

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
