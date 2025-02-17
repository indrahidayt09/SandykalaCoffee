// toggleClassActive
const navbarNav = document.querySelector('.navbar-nav');

// Onclick
document.querySelector('#menu').onclick = () =>  {
    navbarNav.classList.toggle('active');
};

// slideClose
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {

        navbarNav.classList.remove('active');
    }
})