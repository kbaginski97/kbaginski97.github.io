const images = ["/images/Nashi.jpg", "/images/alfaparf.jpg", "/images/schwarzkopf.png"];

const carousel = document.querySelector(".cosmetics-carousel");
const interval = setInterval(function () {
    startCarousel();
}, 3500);

let index = 1;


startCarousel = () => {

    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");

    if (index > images.length - 1) index = 0;
}