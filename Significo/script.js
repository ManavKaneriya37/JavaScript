function homePageAnimation(){
      gsap.set(".slidesm",{
            scale: 6,
            
      })
      
      var tl = gsap.timeline({
            scrollTrigger: {
                  trigger: ".home",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 2,
            },
      });
      
      tl.to(".vdodiv",{
            '--clip': "0%",
            ease: Power2,
      },'a')
      tl.to(".slidesm",{
            scale: 1,
            ease: Power2,
      },'a')
      
      tl.to(".lft",{
            xPercent: "-20",
            ease: Power4,
            stagger: 0.07
      },'b')
      
      tl.to(".rgt",{
            xPercent: "20",
            ease: Power4,
            stagger: 0.07
      },'b')
      
}
function realPageAnimation(){
      
gsap.to(".slide",{
      scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            // markers: true,
            scrub: 2
      },
      xPercent: -200,
      ease: Power2

})

}
realPageAnimation();
homePageAnimation();

(function () {
      const locomotiveScroll = new LocomotiveScroll();
})();

var clutter = ""
document.querySelector(".paratxt").textContent.split("").forEach((e)=>{
      if(e === ' ') clutter += `<span>&nbsp;</span>`
      clutter += `<span class="opacity-20">${e}</span>`
})

document.querySelector('.paratxt').innerHTML = clutter;


gsap.to(".paratxt span",{
      scrollTrigger: {
            trigger: ".para",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 4,
      },
      opacity: 1,
      stagger: 0.3,
      ease: Power4
})

document.querySelectorAll('.section').forEach((section) => {
      ScrollTrigger.create({
            trigger: section,
            start: "top 50%",
            end: "bottom 50%",
            
            onEnter: function(){
                  document.body.setAttribute("theme",section.dataset.color);
            },
            onEnterBack: function(){
                  document.body.setAttribute("theme",section.dataset.color);
            }
      })
})