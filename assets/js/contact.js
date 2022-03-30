const width = window.innerWidth;

var calcWidth = function () {
    return width != null? width : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
}

let pageWidth = calcWidth();

if(pageWidth > 1000){
    console.log('ok')
    $(document).ready(function(){
        // Menu & Logo
        anime({
            targets: '.menu, .logo',
            opacity: 1,
            duration: 3000,
            delay: anime.stagger(150, {start:1500})
        })

    anime({
        targets: '.container ',
        opacity: 1,
        delay: 2950,
        duration: 2300,
        easing: 'easeInSine'
    })

    })

} else if (pageWidth < 1000){
    console.log('pas ok')
    $(document).ready(function(){
        anime({
            targets: ' .menu, .logo, .container',
            opacity: 1,
            easing: 'easeOutExpo',
            duration: 4000,
            delay: anime.stagger(1500, {start: 200})
        })

    })
}

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 2000,
    autoplay: {
        delay: 5000,
    },

  });