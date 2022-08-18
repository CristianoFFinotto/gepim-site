if (screen.width < 992) {

    gsap.from('.hero__content .section-title', { duration: 1, opacity: 0, yPercent: -100, clearProps: 'all' });
    gsap.from(".section-intro__text", {
        scrollTrigger: { trigger: ".section-intro", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, yPercent: 100, opacity: 0, clearProps: 'all'
    });

    gsap.from('.section-portfolio .col-11:nth-child(1)', {
        scrollTrigger: { trigger: ".section-portfolio", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, xPercent: -100, opacity: 0, clearProps: 'all'
    });
    gsap.from('.section-portfolio .col-11:nth-child(2)', {
        scrollTrigger: { trigger: ".section-portfolio", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, xPercent: 100, opacity: 0, clearProps: 'all'
    });

    gsap.from('.section-portfolio .col-11:nth-child(3)', {
        scrollTrigger: { trigger: ".section-portfolio", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, xPercent: -100, opacity: 0, clearProps: 'all'
    });

    gsap.from('.section-service .col-11:nth-child(1)', {
        scrollTrigger: { trigger: ".section-service", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, xPercent: -100, opacity: 0, clearProps: 'all'
    });
    gsap.from('.section-service .col-11:nth-child(2)', {
        scrollTrigger: { trigger: ".section-service", start: 'top top', toggleActions: 'restart' },
        duration: 1, xPercent: 100, opacity: 0, clearProps: 'all'
    });

    gsap.from('.section-service .col-11:nth-child(3)', {
        scrollTrigger: { trigger: ".section-service", start: 'top top', toggleActions: 'restart' },
        duration: 1, xPercent: -100, opacity: 0, clearProps: 'all'
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

    gsap.from('.section-portfolio__title', {
        scrollTrigger: { trigger: ".section-portfolio", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, xPercent: -100, opacity: 0, clearProps: 'all'
    });

    gsap.from('.section-portfolio .col-11:nth-child(1)', {
        scrollTrigger: { trigger: ".section-portfolio", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, yPercent: 100, opacity: 0, clearProps: 'all'
    });
    gsap.from('.section-portfolio .col-11:nth-child(2)', {
        scrollTrigger: { trigger: ".section-portfolio", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, yPercent: -200, opacity: 0, clearProps: 'all'
    });
    gsap.from('.section-portfolio .col-11:nth-child(3)', {
        scrollTrigger: { trigger: ".section-portfolio", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, yPercent: 100, opacity: 0, clearProps: 'all'
    });

    gsap.from('.section-service .col-11:nth-child(1)', {
        scrollTrigger: { trigger: ".section-service", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, xPercent: -100, opacity: 0, clearProps: 'all'
    });
    gsap.from('.section-service .col-11:nth-child(2)', {
        scrollTrigger: { trigger: ".section-service", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, yPercent: -200, opacity: 0, clearProps: 'all'
    });
    gsap.from('.section-service .col-11:nth-child(3)', {
        scrollTrigger: { trigger: ".section-service", start: 'top 1px', toggleActions: 'restart' },
        duration: 1, xPercent: 100, opacity: 0, clearProps: 'all'
    });
}

gsap.from('.section-footer-content', {
    scrollTrigger: { trigger: ".section-footer", start: 'top 800px', toggleActions: 'restart' },
    duration: 0.5, yPercent: 100, opacity: 0, clearProps: 'all', stagger: 1
})

gsap.from('.section-partner__logo', {
    scrollTrigger: { trigger: ".section-partner", start: 'top 1px', toggleActions: 'restart' },
    duration: 0.5, xPercent: -100, opacity: 0, clearProps: 'all', stagger: 1
});







