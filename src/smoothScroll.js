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

requestAnimationFrame(raf)