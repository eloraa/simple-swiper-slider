let slider = new Swiper('.swiper-container', {
    slidePreview: 'auto',
    slidesPerView: 2,
    spaceBetween: 40,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
        el: ".progress_wrapper",
        type: "progressbar",
    }
})

slider.on('slideChange', function() {

    gsap.to('.reveal', .2, {
        y: '-50px'
    })

    gsap.to('.swiper-slide', .2, {
        scale: .95
    })

})

slider.on('slideChangeTransitionEnd', function() {

    gsap.to('.reveal', 0, {
        y: '50px'
    })

    gsap.to('.reveal', .2, {
        y: 0,
        delay: .5
    })

    gsap.to('.swiper-slide-active .port-text', .2, {
        autoAlpha: 1
    })

    gsap.to('.swiper-slide-next .port-text', .2, {
        autoAlpha: 0
    })

    gsap.to('.swiper-slide-prev .port-text', .2, {
        autoAlpha: 0
    })

    gsap.to('.swiper-slide-active', .2, {
        scale: 1,
        ease: 'Power4.easeOut'
    })

})

gsap.to('.swiper-slide-prev .port-text', 0, {
    autoAlpha: 0
})

gsap.to('.swiper-slide-next .port-text', 0, {
    autoAlpha: 0
})

gsap.to('.swiper-slide-active', 0, {
    scale: 1,
    ease: 'Power4.easeOut'
})

gsap.to('.swiper-slide-next, .swiper-slide-prev', 0, {
    scale: .95,
    ease: 'Power4.easeOut'
})