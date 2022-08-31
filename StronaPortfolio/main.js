let hamburgerClosed = document.getElementsByClassName('hamburger-lines')[0];
let navBarClosed = document.getElementsByClassName('main-header')[0];
let myLink = document.querySelectorAll('.menu-item');
let mainHeader = document.getElementsByClassName('main-header')[0]
let authorSection = document.getElementsByClassName('author')[0]

window.onscroll = function() {myFunction()};

let sticky = authorSection.offsetTop;

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


function myFunction() {
    if (window.pageYOffset > sticky) {
      mainHeader.classList.add("bgscroll");
    } else {
      mainHeader.classList.remove("bgscroll");
    }
  }