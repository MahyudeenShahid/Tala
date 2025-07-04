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
init();



let menu= document.querySelector("#menu")
let pmenu=document.querySelector("#pageMenu")
let menubar=false
menu.addEventListener("click" , function() {
 if(!menubar)
  {pmenu.style.top = "0%";
    pmenu.style.opacity="1";
    line1.style.backgroundColor = `#232025`;
    line2.style.backgroundColor = `#232025`;
    line1.style.transform = `rotate(40deg)`;
    line1.style.width = `100%`;
    line2.style.width = `100%`;
    line1.style.height = `4px`;
    line2.style.height = `4px`;
    line2.style.transform = `rotate(-40deg)`;
    line2.style.backgroundColor = `#232025`;
    document.querySelector("nav").style.color="#2b2b2b"
    menubar=true
  }
  else{
pmenu.style.top = "-100%";
pmenu.style.opacity="0";
line1.style.backgroundColor = `#cecece`;
    line2.style.backgroundColor = `#cecece`;
    line1.style.transform = `rotate(00deg)`;
    line1.style.width = `100%`;
    line2.style.width = `70%`;
    line1.style.height = `3px`;
    line2.style.height = `3px`;
    line2.style.transform = `rotate(-0deg)`;
    line2.style.backgroundColor = `#cecece`;
    // document.getElementById('nav').style.color = `#cecece`;
document.querySelector("nav").style.color=`#cecece`
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
    scroller: "#body",
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
    scroller: "#body",
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
      scroller: "#body",
      scrub:3,

    }
  })
})
gsap.to('#part2 #line', {
  scrollTrigger: {
    trigger: '#part2',
    scroller: '#body',
    scrub: 2,
    end: 'bottom 90%',
    // markers:true,
    start: 'top 80%',
  },
  width: '100%',
})

let slide2 = document.querySelectorAll("#page6 .slide2");
slide2.forEach(function(elem){
  gsap.to(elem,{
    transform: 'translateX(0%)',
    duration:4,
    scrollTrigger:{
      trigger: "#page6",
      scroller: "#body",
      scrub:3,

    }
  })
})
var mangocard = document.querySelector('.mangocard');
document.querySelector('#mango h1').addEventListener('mouseenter', function (dets) {
  mangocard.style.opacity = 1;
  mangocard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  mangocard.style.left = `40%`
})
document.querySelector('#mango').addEventListener('mousemove', function (dets) {
  mangocard.style.left = `${dets.x}px`
})
document.querySelector('#mango').addEventListener('mouseleave', function (dets) {
  mangocard.style.opacity = 0;
  mangocard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  mangocard.style.left = `20%`
})

var bananacard = document.querySelector('.bananacard');
document.querySelector('#Banana h1').addEventListener('mouseenter', function (dets) {
  bananacard.style.opacity = 1;
  bananacard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  bananacard.style.left = `40%`
})
document.querySelector('#Banana').addEventListener('mousemove', function (dets) {
  bananacard.style.left = `${dets.x}px`
})
document.querySelector('#Banana').addEventListener('mouseleave', function (dets) {
  bananacard.style.opacity = 0;
  bananacard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  bananacard.style.left = `20%`
})

var pinecard = document.querySelector('.pinecard');
document.querySelector('#PineApple h1').addEventListener('mouseenter', function (dets) {
  pinecard.style.opacity = 1;
  pinecard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  pinecard.style.left = `40%`
})
document.querySelector('#PineApple').addEventListener('mousemove', function (dets) {
  pinecard.style.left = `${dets.x}px`
})
document.querySelector('#PineApple').addEventListener('mouseleave', function (dets) {
  pinecard.style.opacity = 0;
  pinecard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  pinecard.style.left = `20%`
})

var pithayacard = document.querySelector('.pithayacard');
document.querySelector('#Pithaya h1').addEventListener('mouseenter', function (dets) {
  pithayacard.style.opacity = 1;
  pithayacard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  pithayacard.style.left = `40%`
})
document.querySelector('#Pithaya').addEventListener('mousemove', function (dets) {
  pithayacard.style.left = `${dets.x}px`
})
document.querySelector('#Pithaya').addEventListener('mouseleave', function (dets) {
  pithayacard.style.opacity = 0;
  pithayacard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  pithayacard.style.left = `20%`
})

gsap.to('#finish', {
  scrollTrigger: {
    trigger: '#finish',
    scroller: '#body',
    // markers: true,
    start: 'top 35%',
  },
  opacity: 1,
  duration:1,
  onStart: function () {
    $(document).ready(function () {
      $('#finish h1').textillate({ in: { effect: 'fadeInUp' } });
    })
  },
})



document.querySelector("#elm1").addEventListener("mouseover", function(dets) {
  this.querySelector(".elm1 .hover-img").style.opacity = "1";
  this.querySelector(".elm1 .hover-img").style.left = dets.x  + 'px';
  this.querySelector(".elm1 .hover-img").style.top = dets.y-50  + 'px';
  
}
);

document.querySelector("#elm2").addEventListener("mouseover", function(dets) {
  this.querySelector(".elm2 .hover-img").style.opacity = "1";
  this.querySelector(".elm2 .hover-img").style.left = dets.x  + 'px';
  this.querySelector(".elm2 .hover-img").style.top = dets.y-50  + 'px';
}
);
document.querySelector("#elm1").addEventListener("mouseleave", function() {
  this.querySelector(".elm1 .hover-img").style.opacity = "0";
}
);

document.querySelector("#elm2").addEventListener("mouseleave", function() {
  this.querySelector(".elm2 .hover-img").style.opacity = "0";
}
);



gsap.to(".pg5-content img", {
  rotate : "360deg",
  repeat:-1,
  duration: 2,
 ease: "none"
})