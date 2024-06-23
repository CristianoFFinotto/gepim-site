if (screen.width < 992) {

    gsap.from('.hero__content .section-title', { duration: 1, opacity: 0, yPercent: -100, clearProps: 'all' });
    gsap.from(".section-intro__text", {
        scrollTrigger: { trigger: ".section-intro", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, yPercent: 100, opacity: 0, clearProps: 'all'
    });
}

if (screen.width >= 992) {

    gsap.from('.header__navbar', {
        duration: 1, opacity: 0, yPercent: -100, clearProps: 'all'
    });
    gsap.from('.hero__content .section-title', { duration: 1, opacity: 0, yPercent: 100, clearProps: 'all' });
    gsap.from(".section-intro__text", {
        scrollTrigger: { trigger: ".section-intro", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, yPercent: 100, opacity: 0, clearProps: 'all'
    });
}







