const width = window.innerWidth;

var calcWidth = function () {
    return width != null? width : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
}

let pageWidth = calcWidth();

if(pageWidth > 1000){
    console.log('ok')
    $(document).ready(function(){
    
        // card container 
        anime({
            targets: '.loader',
            opacity: 1,
            duration: 3000,
            easing: 'easeInOutSine',
            delay: anime.stagger(350, {start:4000})
        })

        // Menu & Logo
        anime({
            targets: '.menu, .logo',
            opacity: 1,
            duration: 3000,
            delay: anime.stagger(150, {start:1500})
        })
    
    })
    
} else {
    $(document).ready(function(){
        
        anime({
            targets: ' .menu, .logo, .card',
            opacity: 1,
            easing: 'easeOutExpo',
            duration: 4000,
            delay: anime.stagger(1500, {start: 200})
        })
    })
}