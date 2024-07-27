const scrollBtn0 = document.querySelector('.home-sec');
const scrollBtn = document.querySelector('.about-sec');
const scrollBtn1 = document.querySelector('.skills-sec');
const scrollBtn2 = document.querySelector('.projects-sec');
const scrollBtn3 = document.querySelector('.contact-sec');




const lenis = new Lenis({
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 2, 
  });

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);


  scrollBtn0.addEventListener('click', function(e) {
    e.preventDefault();
    lenis.scrollTo(document.getElementById('home'), { duration: 1.5 });
});
  scrollBtn.addEventListener('click', function(e) {
    e.preventDefault();
    lenis.scrollTo(document.getElementById('about'), { duration: 1.5 });
});

  scrollBtn1.addEventListener('click', function(e) {
    e.preventDefault();
    lenis.scrollTo(document.getElementById('skillLineScroll'), { duration: 1.5 });
});

  scrollBtn2.addEventListener('click', function(e) {
    e.preventDefault();
    lenis.scrollTo(document.getElementById('projects'), { duration: 1.5 });
});

  scrollBtn3.addEventListener('click', function(e) {
    e.preventDefault();
    lenis.scrollTo(document.getElementById('contact'), { duration: 1.5 });
});

