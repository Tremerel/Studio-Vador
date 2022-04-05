var toggle;
var menu = document.querySelector('ul');
var hamburger = document.querySelector('.hamburger');
var hamburger_icon = Array.from(document.querySelectorAll('.hamburger span'))

var navBar = document.querySelector('nav');

var menulink = document.querySelectorAll('ul li');

hamburger.addEventListener('click', ()=>{

    var animation = anime.timeline({
        easing:'easeInSine',
    })

    animation.add({
        targets: navBar,
        backgroundColor: toggle ? 'rgba(10,11,16,0)' : 'rgba(10,11,16,1)',
        height: toggle ? 69 : 420,
        delay: toggle ? 700 : 0,
        duration: 1200,
        complete: () => {
            menu.classList.toggle('dummy');
            toggle = menu.classList.contains('dummy');
        }
    }).add({
        targets: menulink,
        opacity: toggle ? [1,0] : [0,1],
        translateX: toggle ? 0 : [-30,0],
        delay: anime.stagger(100),
        easing: 'easeOutQuad',
        duration: toggle ? 400 : 500,
    },700).add({
        targets: hamburger_icon[0],
        rotate: toggle ? 0 : 45,
        width: toggle ? 30 : 32,
        translateY: toggle ? 0 : -4,
        translateX: toggle ? 0 : 4,
        duration: 700,
    },0).add({
        targets: hamburger_icon[2],
        rotate: toggle ? 0 : -45,
        width: toggle ? 30 : 32,
        translateY: toggle ? 0 : 4,
        translateX: toggle ? 0 : 4,
        duration: 700,
    },0).add({
        targets: hamburger_icon[1],
        opacity: toggle ? 1 : 0,
        duration: 500
    },0)

})

$(document).ready(function(){


    // SVG
    anime({
        targets: '#svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: 1500,
        delay: function(el, i) { return i * 250 },
        loop: false
    });
    
    anime({
        targets: '#svg',
        easing: 'easeInSine',
        translateY: -200,
        delay: 2000
    }) 

})