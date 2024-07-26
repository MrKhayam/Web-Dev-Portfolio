const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu');
const tl2 = gsap.timeline();

tl2.to(".responsiveNavbar",{
    right:0,
    duration:.7,
    ease: "power1.in",
});

tl2.from(".resLis",{
    x:30,
    opacity:0,
    duration:.3,
    stagger: .2
});

tl2.from(cross,{
    opacity:0,
    duration:.2,
});

tl2.pause();

menu.addEventListener('click',()=>{
    tl2.play();
});
cross.addEventListener('click',()=>{
    tl2.reverse();
});






