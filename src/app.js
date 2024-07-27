const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu');
const tl2 = gsap.timeline();
const tl = gsap.timeline();


// tl.from(".myName h1",{
//         opacity:0,
//         y:30,
//         duration:1,
//         delay:.2,
//         stagger:.2, 
//     });
    
//     tl.to(".loader",{
//         top:"-100%",
//         duration:.9,
//         ease:"power1.out"
//     });

tl.from(".logo",{
    y:30,
    opacity:0,
    duration:'.8',
});

tl.from(".navLis",{
    y:30,
    opacity:0,
    duration:1,
    stagger: '0.3',
});

tl.from(".upper",{
    x:50,
    opacity:0,
    duraiton:'0.7',
});

tl.from(".lower",{
    x:-50,
    opacity:0,
    duraiton:'0.7',
});

if(window.innerWidth > 650){
    gsap.to(".image",{
        y:500,
        x:-700,
        width:"80%",
        height:"80%",
        rotate:360,
        borderRadius: "0 0 0 0 ",
        scrollTrigger:{
            scroller:"body",
            trigger:".upper",
            scrub:2,
            start:"top 10%",
            end:"top -50%",
        }
    })
}
gsap.from(".about .left",{
    x:-50,
    opacity:0,
    duraiton:.8,
    scrollTrigger: {
        scroller:"body",
        trigger:".about",
        start: "top 50%"
    }
});

gsap.from(".about .right",{
    x:50,
    opacity:0,
    duraiton:.8,
    scrollTrigger: {
        scroller:"body",
        trigger:".about",
        start: "top 55%"
    }
});

gsap.from(".skillsHead",{
    y:30,
    opacity:0,
    duration:.7,
    scrollTrigger:{
        scroller:"body",
        trigger:".skillsHead",
        start:"top 60%"
    }
});

gsap.from(".skillLine h1",{
    y:50,
    opacity:0,
    duration:.7,
    filter:"blur(10px)",
    stagger:.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".skills",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin: true,
        
    }
});

gsap.from(".projectsHead",{
    y:30,
    opacity:0,
    duration:'0.7',
    scrollTrigger:{
        scroller:"body",
        trigger:".projectsHead",
        start:"top 60%"
    }
});


if(window.innerWidth > 650){
    gsap.to(".projects1 .project",{
        y:-1000,
        x:-1000,
        rotate:45,
        duration:1,
        stagger:'0.3',
        scrollTrigger:{
            scroller:"body",
            trigger:".projects1",
            start:"top 15%",
            scrub:2,
            pin:true,
        }
    });
    
    gsap.to(".projects2 .project",{
        y:-1000,
        x:-1000,
        rotate:45,
        duration:1,
        stagger:'0.3',
        scrollTrigger:{
            scroller:"body",
            trigger:".projects2",
            start:"top 15%",
            scrub:2,
            pin:true,
        }
    });
    
    gsap.to(".projects3 .project",{
        y:-1000,
        x:-1000,
        rotate:45,
        duration:1,
        stagger:'0.3',
        scrollTrigger:{
            scroller:"body",
            trigger:".projects3",
            start:"top 15%",
            end:"top -10%",
            scrub:2,
            pin:true,
        }
    });
}






tl2.to(".responsiveNavbar",{
    right:0,
    duration:'0.7',
    ease: "power1.in",
});

tl2.from(".resLis",{
    x:30,
    opacity:0,
    duration:'0.3',
    stagger: .2
});

tl2.from(cross,{
    opacity:0,
    duration:'0.2',
});

tl2.pause();

menu.addEventListener('click',()=>{
    tl2.play();
});
cross.addEventListener('click',()=>{
    tl2.reverse();
});



const myFnc = () => {
    tl2.reverse();
}




