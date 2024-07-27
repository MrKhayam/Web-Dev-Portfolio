const cross = document.querySelector(".cross");
const menu = document.querySelector(".menu");
const inpName = document.querySelector(".inpName");
const inpMail = document.querySelector(".inpMail");
const inpMsg = document.querySelector(".inpMsg");
const darkMode = document.querySelector('.dark-mode');






const phoneNumber = "+923175080524";

const handleClick = () => {
  window.open(
    `https://wa.me/${phoneNumber}?text= Name : ${inpName.value}, Email : ${inpMail.value}, Message : ${inpMsg.value}`,
    "_blank"
  );
};

const tl2 = gsap.timeline();
const tl = gsap.timeline();

tl.from(".myName h1", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.2,
  stagger: 0.2,
});

tl.to(".loader", {
  top: "-100%",
  duration: 0.9,
  ease: "power1.out",
});

tl.from(".logo", {
  y: 30,
  opacity: 0,
  duration: ".8",
});

if(window.innerWidth > 650){
  tl.from(".navLis", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: "0.3",
  });
}

tl.from(".upper", {
  x: 50,
  opacity: 0,
  duraiton: "0.7",
});

tl.from(".lower", {
  x: -50,
  opacity: 0,
  duraiton: "0.7",
});

if (window.innerWidth > 650) {
  gsap.to(".image", {
    y: 500,
    x: -700,
    width: "80%",
    height: "80%",
    rotate: 360,
    borderRadius: "0 0 0 0 ",
    scrollTrigger: {
      scroller: "body",
      trigger: ".upper",
      scrub: 2,
      start: "top 10%",
      end: "top -50%",
    },
  });
}
gsap.from(".about .left", {
  x: -50,
  opacity: 0,
  duraiton: 0.8,
  scrollTrigger: {
    scroller: "body",
    trigger: ".about",
    start: "top 50%",
  },
});

if(window.innerWidth < 650){
  gsap.from(".about .right", {
    y: 50,
    opacity: 0,
    duraiton: 0.8,
    scrollTrigger: {
      scroller: "body",
      trigger: ".about",
      start: "top 55%",
    },
  });
}
if(window.innerWidth > 650){
  gsap.from(".about .right", {
    x: 100,
    opacity: 0,
    duraiton: 0.8,
    scrollTrigger: {
      scroller: "body",
      trigger: ".about",
      start: "-60% 55%",
      end:"-40%",
      scrub: 2,
    },
  });
}


gsap.from(".skillsHead", {
  y: 30,
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    scroller: "body",
    trigger: ".skillsHead",
    start: "top 60%",
  },
});

gsap.from(".skillLine h1", {
  y: 50,
  opacity: 0,
  duration: 0.7,
  filter: "blur(10px)",
  stagger: 0.3,
  scrollTrigger: {
    scroller: "body",
    trigger: ".skills",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

gsap.from(".projectsHead", {
  y: 30,
  opacity: 0,
  duration: "0.7",
  scrollTrigger: {
    scroller: "body",
    trigger: ".projectsHead",
    start: "top 60%",
  },
});

if (window.innerWidth > 650) {
  gsap.to(".projects1 .project", {
    y: -1000,
    x: -1000,
    rotate: 45,
    duration: 1,
    stagger: "0.3",
    scrollTrigger: {
      scroller: "body",
      trigger: ".projects1",
      start: "top 15%",
      scrub: 2,
      pin: true,
    },
  });

  gsap.to(".projects2 .project", {
    y: -1000,
    x: -1000,
    rotate: 45,
    duration: 1,
    stagger: "0.3",
    scrollTrigger: {
      scroller: "body",
      trigger: ".projects2",
      start: "top 15%",
      scrub: 2,
      pin: true,
    },
  });

  gsap.to(".projects3 .project", {
    y: -1000,
    x: -1000,
    rotate: 45,
    duration: 1,
    stagger: "0.3",
    scrollTrigger: {
      scroller: "body",
      trigger: ".projects3",
      start: "top 15%",
      end: "top -10%",
      scrub: 2,
      pin: true,
    },
  });
}

tl2.to(".responsiveNavbar", {
  right: 0,
  duration: "0.7",
  ease: "power1.in",
});

tl2.from(".resLis", {
  x: 30,
  opacity: 0,
  duration: "0.3",
  stagger: 0.2,
});

tl2.from(cross, {
  opacity: 0,
  duration: "0.2",
});

tl2.pause();

menu.addEventListener("click", () => {
  tl2.play();
});
cross.addEventListener("click", () => {
  tl2.reverse();
});

const myFnc = () => {
  tl2.reverse();
};
