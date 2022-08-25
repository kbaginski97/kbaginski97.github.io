let phoneContent = document.getElementById("shownumber");
let emailContent = document.getElementById("email");

let navbar = document.getElementById("navbar");
let menu = document.getElementById("menu");

window.onscroll = function () {
    if(window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

let phoneContentChange = document.getElementsByClassName('phoneOpen').innerHTML = '883 921 220';


phoneContent.addEventListener('click', function handleClick(event) {

    event.target.classList.add("phoneOpen");

    phoneContent.textContent = " 883 921 220";
})


emailContent.addEventListener('click', function handleClick(event) {

    event.target.classList.add("phoneOpen");

    emailContent.textContent = " kamilbaginski1997@gmail.com";
})

