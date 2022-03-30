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
            // Images overlay effect
    anime({
        targets: '.container .studio-img-overlay',
        translateX: 1710,
        delay: 2700,
        duration: 1500,
        easing: 'easeInSine'
    })
    anime({
        targets: '.container .studio-img .vinyle,.container  .disque-image-logo',
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
            targets: ' .menu, .logo, .studio-img .vinyle',
            opacity: 1,
            easing: 'easeOutExpo',
            duration: 4000,
            delay: anime.stagger(1500, {start: 200})
        })

    })
}
