(function () {
      const locomotiveScroll = new LocomotiveScroll();
  })();

var follower = document.querySelector('.follower')
document.addEventListener('mousemove',(dets)=>{
      gsap.to(follower,{
            x: dets.x -30,
            y: dets.y -30,
      })
})

document.querySelectorAll('.page2 .btns button').forEach(btn=>{
      btn.addEventListener('mouseover',()=>{
            gsap.to(follower,{
                  scale: 0,
                  opacity: 0
            })
          
            btn.style.backgroundColor = "#fff"
            btn.style.color = "#000"

      })
      btn.addEventListener('mouseleave',()=>{
            gsap.to(follower,{
                  scale: 1,
                  opacity: 1
            }),
            btn.style.backgroundColor = "#000"
            btn.style.color = "#fff"
      })
})

document.querySelector('.page1-search').addEventListener('mouseover',()=>{
      gsap.to(follower,{
            scale: 0,
            opacity: 0
      })
      document.querySelector('.page1-search').addEventListener('mouseleave',()=>{
            gsap.to(follower,{
                  scale: 1,
                  opacity: 1
            })
      })
})

var tl = gsap.timeline({
     scrollTrigger:{
      trigger: '.first-sec',
      start: 'top top',
      end: 'bottom bottom',
      // scrub: 2,
     }
})

tl.to('.front',{
      delay: 0.3,
      height: '0vw'
},'p1')
tl.to('#frontImg',{
      delay: 0.3,
      opacity: 0,
},'p1')
tl.to('nav .nav-part1 img',{
      scale: 1
},'p1')
tl.to('nav i,nav h2',{
      y: 0,
      delay: 0.8,
      stagger: {
            amount: 1 
      },
      opacity :1
},'p1')

tl.to('nav .nav-part1 img',{
      delay: 1.4,
      opacity: 1
},'p1')

var tl2 = gsap.timeline({
      scrollTrigger:{
            start: 'top 60%',
            end: 'top 50%',
            trigger: '.page2'
      }
})
ScrollTrigger.create({
      trigger: '.page2',
      start: 'top 54%',
      end: '15% 40%',   
      onEnter: ()=>{
            var btmPart = document.querySelector('.page1-btm')
            gsap.to(btmPart,{
                  opacity: 0
            })
      },
      onLeave: ()=>{
                  var btmPart = document.querySelector('.page1-btm')
                  gsap.to(btmPart,{
                        opacity: 1,
                        delay: 1
                  })
      }
})
gsap.set('.page2 .domains h1, .page2 .domains p, .page2 .domains button',{
      y: 20,
      opacity: 0
})
var timeln = gsap.timeline()
gsap.to('.page2 .domains .box, .page2 .domains .left .box',{
      duration: 1,
      opacity: 1,
      scale:1,
      stagger: {
            amount: 0.3
      },
      scrollTrigger:{
            trigger: '.domains',
            start: 'top 45%',
            end: 'bottom bottom',
            scrub: 1
      }
})
gsap.to('.page2 .domains h1, .page2 .domains p, .page2 .domains button',{
      y: 0,
      duration: 1,
      delay:1,
      opacity: 1,
      stagger: {
            amount: 0.7
      }
})

document.querySelectorAll('.page2 .domains .box button').forEach(btn=>{
      btn.addEventListener('mouseenter',()=>{
            gsap.to('.follower',{
                  scale:0
            })
      })
      btn.addEventListener('mouseleave',()=>{
            gsap.to('.follower',{
                  scale:1
            })
      })
})
var page3tl = gsap.timeline({
      scrollTrigger:{
            trigger: '.page3',
            start: 'top 30%',
            end: 'bottom bottom',
            scrub: 4,
      }
})
gsap.set('.page3 header h1',{
      y: 30
})
page3tl.from('.page3 header h1',{
      opacity: 0,
      y: 90
})
page3tl.to('.page3stick .img',{
      '--page3clip': '100%',
      ease: Power4,
},'p3')


const sentense = document.querySelector('.page3 .page3stick .img p')
const text = sentense.textContent
sentense.textContent = ''
for(const char of text){
      const span = document.createElement('span')
            span.textContent = char
      
      sentense.appendChild(span)
}
gsap.set('.page3stick .img .paradiv p span',{
      y: 130
})
page3tl.to('.page3stick .img .paradiv',{
      stagger: 4,
      delay: 0.2,
      duration: 1,
      height: '37vw'
},'p3')
page3tl.to('.page3stick .img .paradiv p span',{
      y:0,
      scrub: 1,
      duration:1,
      delay: 0.3,
      stagger:{
            amount: 2
      },
      duration: 1,
      opacity:1
},'p3')


document.querySelectorAll('.page4 .slide .imgbox img').forEach(img => {
      ScrollTrigger.create({
            trigger: img,
            start: 'top 40%',
            end: 'bottom bottom',
            onEnter: () => {
                  gsap.to(img,{
                        x: 0,
                        duration: 2,
                        opacity: 1,
                        duration: 0.5,
                        borderRadius: '9px'
                  })
            },
            onEnterBack: () => {
                  gsap.to(img,{
                        x: -200,
                        duration: 2,
                        opacity: 0,
                        duration: 0.5,
                  })
            },
      })
})



document.querySelectorAll('.page4 .slide .content').forEach(cnt => {
      ScrollTrigger.create({
            trigger: cnt,
            start: 'top 55%',
            end: 'bottom bottom',
            onEnter: () => {
                  cnt.childNodes.forEach(txt=>{
                        console.log(txt);
                        gsap.to(txt,{
                              y: 0,
                              stagger: {
                                    amount: 1
                              },
                              opacity: 1,
                              delay: 0.3
                        })
                  })
            },
            onEnterBack: () => {
                  cnt.childNodes.forEach(txt=>{
                        console.log(txt);
                        gsap.to(txt,{
                              y: 100,
                              stagger: {
                                    amount: 1
                              },
                              opacity: 1
                        })
                  })
            }
      })
})
document.querySelectorAll('.page4 .slide .content').forEach(cntBox=>{
      cntBox.addEventListener('mouseenter',()=>{
            var follower = document.querySelector('.follower')
            gsap.to(follower,{
                  scale: 0
            })
      })
      cntBox.addEventListener('mouseleave',()=>{
            var follower = document.querySelector('.follower')
            gsap.to(follower,{
                  scale: 1
            })
      })
})

document.querySelectorAll('.page').forEach(page=>{
      ScrollTrigger.create({
            trigger: page,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => {
                  document.querySelector('.next').setAttribute('theme', page.dataset.color)
            },
            onEnterBack: () => {
                  document.querySelector('.next').setAttribute('theme', page.dataset.color)
            }
      })
})
document.querySelectorAll('.page4 .slide').forEach(slide=>{
      slide.addEventListener('mouseenter',()=>{
            gsap.to(slide,{
                  backgroundColor: "#111",
                  scrollTrigger:{
                        trigger:'.page4 .slide',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 2
                  }
            })
      })
      slide.addEventListener('mouseleave',()=>{
            gsap.to(slide,{
                  backgroundColor: "#222",
                  scrollTrigger:{
                        trigger:'.page4 .slide',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 2
                  }
            })
      })
})