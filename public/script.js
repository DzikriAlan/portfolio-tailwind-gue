window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-Top');

    if (window.pageYOffset > fixedNav) {
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};


// klik di luar hamburger
// hamburger
const hamburger = document.querySelector('#hamburger');
const fixedNav = document.querySelector('#navbar');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    fixedNav.classList.toggle('hidden');
})

window.addEventListener('click', function (e) {
    if (e.target != hamburger & e.target != fixedNav) {
        hamburger.classList.remove('hamburger-active');
        fixedNav.classList.add('hidden');
    }
})