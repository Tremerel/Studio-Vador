const width = window.innerWidth;

var calcWidth = function () {
    return width != null? width : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
}

let pageWidth = calcWidth();

if(pageWidth > 1000){
    console.log('ok')
    $(document).ready(function(){
    
        // logo 
        anime({
            targets: '.logo',
            opacity: 1,
            duration: 3000,
        })
    
        // Card
        anime({
            targets: '.card-container',
            opacity: 1,
            scale: 0.9,
            rotate: function() { return anime.random(10, -15); },
            easing: 'easeInOutQuad',
            duration: 3000,
            delay: anime.stagger(500, {start:500}),
        })

        // Menu 
        anime({
            targets: '.menu',
            opacity: 1,
            duration: 3000,
            delay: anime.stagger(150, {start:1500})
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
                    duration: 1000
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
            delay: anime.stagger(150, {start: 100})
        })
    })
}

