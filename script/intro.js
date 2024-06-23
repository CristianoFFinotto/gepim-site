const cto = document.querySelectorAll('.section-intro__text-cto');
const imagesContainer = document.querySelectorAll('.section-intro__image-container');

for (let index = 0; index < cto.length; index++) {
    cto[index].addEventListener('click', () => {
        imagesContainer[index].classList.toggle('section-intro__image-container--visible');
    });
    imagesContainer[index].addEventListener('click', () => {
        imagesContainer[index].classList.toggle('section-intro__image-container--visible');
    });
    imagesContainer[index].addEventListener('touchend', () => {
        imagesContainer[index].classList.toggle('section-intro__image-container--visible');
    });
    imagesContainer[index].addEventListener('touchend', () => {
        imagesContainer[index].classList.toggle('section-intro__image-container--visible');
    });
}

