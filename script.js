let cursor = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x-15 + "px";
    cursor.style.top = dets.y-15 + "px";
    blur.style.left = dets.x-200 + "px";
    blur.style.top = dets.y-200 + "px";
})

let navi = document.querySelectorAll("nav p");
navi.forEach(function(ele) {
    ele.addEventListener("mouseenter", function() {
        cursor.style.backgroundColor = "transparent";
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white"
        ele.style.color = "#95c11e";
    })
})

navi.forEach(function(ele) {
    ele.addEventListener("mouseleave", function() {
        cursor.style.backgroundColor = "#95c11e";
        cursor.style.scale = 1;
        cursor.style.border = "0px";
        ele.style.color = "white";
    })
})


gsap.to("#nav", {
    backgroundColor : "#000",
    duration: 1,
    delay : 0.5,
    height: "100px",
    scrollTrigger: {
        trigger:"#nav",
        scroller: "body",
        markers: "true",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger: {
        trigger : "#main",
        scroller : "body",
        markers : "true",
        start : "top - 25%",
        end : "top -70%",
        scrub : 2
    }
})

gsap.from(".about-us img,.about-us-in", {
    y : 90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller: "body",
        start:"top 60%",
        end:"top 57%",
        scrub:3,
        markers:true,
    }
})
gsap.from(".card", {
    scale:0.9,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        start:"top 60%",
        end:"top 57%",
        scrub:3,
        markers:true,
    }
})
gsap.from("#colon1", {
    y: -70,
    x:-70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end: "top 47",
        scrub:1
    }
})

gsap.from("#colon2", {
    y: -70,
    x:-70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end: "top 47",
        scrub:1
    }
})