// const width = window.innerWidth;

// var calcWidth = function () {
//     return width != null? width : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
// }

// let pageWidth = calcWidth();

// if(pageWidth > 1000){

$(document).ready(function(){
    $(".name, .studio, .small-intro").lettering();

    // Images overlay effect
    anime({
        targets: '.home .studio-img-overlay',
        translateX: 1500,
        delay: 1000,
        duration: 1500,
        easing: 'easeInSine'
    })
    anime({
        targets: '.home .studio-img img, .disque-image-logo',
        opacity: 1,
        delay: 1500,
        duration: 1500,
        easing: 'easeInSine'
    })
    anime({
        targets: '.home .studio-img .vinyle-filter',
        opacity: 0.55,
        delay: 1500,
        duration: 1500,
        easing: 'easeInSine'
    })


    // Petit titre 
    anime({
        targets: '.studio span',
        opacity: 1,
        duration: 1500,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start: 3000})
    })


    // Grand titre 
    anime({
        targets: '.name span',
        opacity: 1,
        keyframes: [
            {translateY: 50, duration: 1500}
        ],
        duration: 3000,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start: 3500})
    })

    // logo 
    anime({
        targets: '.logo',
        opacity: 1,
        duration: 3000,
        delay:5000
    })

    // Menu 
    anime({
        targets: '.menu',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(150, {start:5000})
    })

    // Intro 
    anime({
        targets: '.small-intro span',
        opacity: 1,
        duration: 500,
        eading: 'easeInSine',
        delay: anime.stagger(40, {start: 5000})
    })
    
    let disque = document.querySelector('.studio-img');
    
    var animation = anime({
        targets: '.studio-img',
        easing: 'linear',
        rotate: 360,
        duration: 1000,
        loop: true,
        autoplay: false,
      });
    
    disque.mouseenter = animation.play;
    disque.mouseleave = animation.pause;
})
