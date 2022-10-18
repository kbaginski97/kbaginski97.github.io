let h3Start = document.getElementsByClassName('starter')[0];
let h3Normal = document.getElementsByClassName('normal')[0];
let h3Premium = document.getElementsByClassName('premium')[0];
let timingSpan = document.getElementsByClassName('time-description');
let checkbox = document.getElementById('primaryCheckbox');
let monthlySpan = document.getElementsByClassName('monthly-span')[0];
let yearlySpan = document.getElementsByClassName('yearly-span')[0];

let learnMoreBtn = document.getElementById('learn-more-btn');
let mainHomePageBtn = document.getElementsByClassName('main-homepage-btn')[0];

let hamburger = document.getElementsByClassName('hamburger')[0];
let header = document.querySelector('header');

checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
        h3Start.textContent = "3840 PLN";
        h3Normal.textContent = "5400 PLN";
        h3Premium.textContent = "7800 PLN";
        yearlySpan.style.color = "white";
        monthlySpan.style.color = "black";
        for (let i = 0; i < timingSpan.length; i++) {
            timingSpan[i].textContent = "Rocznie";
        }

    } else {
        h3Start.textContent = "320 PLN";
        h3Normal.textContent = "450 PLN";
        h3Premium.textContent = "650 PLN";
        monthlySpan.style.color = "white";
        yearlySpan.style.color = "black";
        for (let i = 0; i < timingSpan.length; i++) {
            timingSpan[i].textContent = "Miesięcznie";
        }
    }
});


learnMoreBtn.addEventListener('click', function () {
    location.href = "#offer";
})


mainHomePageBtn.addEventListener('click', function () {
    location.href = "#offer";
})

hamburger.addEventListener('click',function() {
    hamburger.classList.toggle('hamburger-open');
    header.classList.toggle('hamburger-open');
})