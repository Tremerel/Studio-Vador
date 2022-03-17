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
            targets: '#svg',
            easing: 'easeInSine',
            translateY: -230,
            delay: 3200
        })    
        anime({
            targets: '#svg path',
            strokeDashoffset: [anime.setDashoffset, 1],
            scale: 1,
            easing: 'easeInOutSine',
            duration: 3000,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: false
        });
    })

} else if (pageWidth < 1000){
    console.log('pas ok')
    $(document).ready(function(){
        anime({
            targets: ' .menu, .logo',
            opacity: 1,
            easing: 'easeOutExpo',
            duration: 4000,
            delay: anime.stagger(1500, {start: 200})
        })
        anime({
            targets: '#svg ',
            scale: 0.6,
            easing: 'easeInSine',
            translateY: -230,
            delay: 3200
        })
        anime({
            targets: '#svg path',
            scale: 0.85,
            strokeDashoffset: [anime.setDashoffset, 1],
            easing: 'easeInOutSine',
            duration: 3000,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: false
        })
    })
}
