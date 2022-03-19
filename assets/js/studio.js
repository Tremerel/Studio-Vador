const width = window.innerWidth;

var calcWidth = function () {
    return width != null? width : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
}

let pageWidth = calcWidth();

if(pageWidth > 1000){
    console.log('ok')
    $(document).ready(function(){
    
        // Menu 
        anime({
            targets: '.menu, .logo',
            opacity: 1,
            duration: 4000,
            delay: anime.stagger(1500, {start:200})
        })

   
        // Card
        
        anime({
            targets: '.card-container',
            opacity: 1,
            scale: 0.9,
            rotate: function() { return anime.random(10, -15); },
            easing: 'easeInOutQuad',
            duration: 3000,
            delay: anime.stagger(500, {start:3000}),
        })

        let cards = document.querySelectorAll('.card-container');
        
        cards.forEach((card) => {
            card.addEventListener('mouseenter', (event) => {
                anime.remove(card.querySelector(".card"));
                anime.remove(card.querySelector(".disk-container"));
    
                anime({
                    targets: card.querySelector('.card'),
                    easing: 'easeOutExpo',
                    translateX: -75,
                    duration: 1000
                })
                anime({
                    targets: card.querySelector('.disk-container'),
                    easing: 'easeOutExpo',
                    translateX: 75,
                    duration: 1000
                })
            })
    
            card.addEventListener('mouseleave', (event) => {
                anime.remove(card.querySelector(".card"));
                anime.remove(card.querySelector(".disk-container"));
    
                anime({
                    targets: card.querySelector('.card'),
                    easing: 'easeOutExpo',
                    translateX: 0,
                    duration: 1000,
                })
                anime({
                    targets: card.querySelector('.disk-container'),
                    easing: 'easeOutExpo',
                    translateX: 0,
                    duration: 1000
                })
            })
        })
    
    })
    
} else {
    $(document).ready(function(){
        anime({
            targets: '.card-container, .menu, .logo',
            opacity: 1,
            easing: 'easeOutExpo',
            duration: 1000,
            delay: anime.stagger(150, {start: 4000})
        })

        // anime({
        //     targets: '#svg ',
        //     scale: 0.8,
        //     duration: 0,
        // })
        anime({
            targets: '#svg ',
            easing: 'easeInSine',
            translateY: -200,
            delay: 2800
        })
        anime({
            targets: '#svg path',
            strokeDashoffset: [anime.setDashoffset, 0],
            scale: 1,
            easing: 'easeInOutSine',
            duration: 5000,
            delay: function(el, i) { return i * 500 },
            loop: false
        })
    })
}

