
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const navList = document.querySelectorAll('.navbar__list');
const content = document.querySelector('#content');


hamburger.addEventListener('click', () => {
    header.classList.toggle('header-toggle-event')
    hamburger.classList.toggle('open');
    navList[0].classList.toggle('d-none');
    content.classList.toggle('d-none');
});

