
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const navList = document.querySelectorAll('.navbar__list');
const content = document.querySelector('#content');
const contattaci = document.querySelector('#contattaci');


hamburger.addEventListener('click', () => {
    header.classList.toggle('header-toggle-event')
    hamburger.classList.toggle('is-active');
    navList[0].classList.toggle('d-none');
});

contattaci.addEventListener('click', (e) => {
    e.preventDefault();

    header.classList.toggle('header-toggle-event')
    hamburger.classList.toggle('is-active');
    navList[0].classList.toggle('d-none');

    window.scroll({
        top: window.document.body.clientHeight, behavior: 'smooth'
    });
});

