function init(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#body"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#body").style.transform ? "transform" : "fixed"
});

}



let menu= document.querySelector("#menu")
let pmenu=document.querySelector("#pageMenu")
let menubar=false
menu.addEventListener("click" , function() {
 if(!menubar)
  {pmenu.style.top = "0%";
    pmenu.style.opacity="1";
    document.querySelector("nav").style.color="black"
    menubar=true
  }
  else{
pmenu.style.top = "-100%";
pmenu.style.opacity="0";
document.querySelector("nav").style.color="white"
menubar=false
  }
}) 

let tl = gsap.timeline();
tl.from(".page1 h1", {
    y: 60,
    duration: .6,
    opacity: 0,
    // ease: "power2.out"
})
.from(".page1 h2", {
    y: 50,
    duration: .5,
    opacity: 0,

    delay: "-0.2"

})
.from(".page1 h3", {
    y: 50,
    duration: .5,
    opacity: 0,

     delay: "-0.2"

})

gsap.to(".tala-img", {
  scale: 0.99,
  scrollTrigger: {
    trigger: ".tala-img",
    scroller: "body",
    start: "top 80%",
    end: "top 5%",
    scrub: 3,
    // toggleActions: "play none none reverse"
  },
})

gsap.to(".hg h1", {
  rotateX: "0deg",
  // y: -50,
  opacity: 1,
  // duration: 1,
  scrollTrigger: {
    trigger: ".hg ",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub: 3,
    // toggleActions: "play none none reverse"
  },
})



let slide1 = document.querySelectorAll("#page6 .slide1");
slide1.forEach(function(elem){
  gsap.to(elem,{
    transform: 'translateX(-100%)',
    duration:4,
    scrollTrigger:{
      trigger: "#page6",
      scroller: "body",
      scrub:3,

    }
  })
})

let slide2 = document.querySelectorAll("#page6 .slide2");
slide2.forEach(function(elem){
  gsap.to(elem,{
    transform: 'translateX(0%)',
    duration:4,
    scrollTrigger:{
      trigger: "#page6",
      scroller: "body",
      scrub:3,

    }
  })
})

document.querySelector(".elm1").addEventListener("mouseover", function(dets) {
  this.querySelector("img").style.opacity = "1";
  this.querySelector("img").style.left = dets.x -300 + 'px';
  this.querySelector("img").style.top = dets.y -300 + 'px';
  
}
);

document.querySelector(".elm2").addEventListener("mouseover", function(dets) {
  this.querySelector("img").style.opacity = "1";
  this.querySelector("img").style.left = dets.x  + 'px';
  this.querySelector("img").style.top = dets.y -300 + 'px';
}
);
document.querySelector(".elm1").addEventListener("mouseleave", function() {
  this.querySelector("img").style.opacity = "0";
}
);

document.querySelector(".elm2").addEventListener("mouseleave", function() {
  this.querySelector("img").style.opacity = "0";
}
);



gsap.to(".pg5-content img", {
  rotate : "360deg",
  repeat:-1,
  duration: 2,
 ease: "none"
})