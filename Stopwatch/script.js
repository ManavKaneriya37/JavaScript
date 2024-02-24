const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second =  document.querySelector("#second")
const ms =  document.querySelector("#milisecond")
const flag = document.querySelector("#flag")
const play = document.querySelector('#play')
const pause = document.querySelector("#pause")
const rem = document.querySelectorAll('#rem')
const reset = document.querySelector("#reset")
hour.innerHTML = 0
minute.innerHTML = 0
second.innerHTML = 0
ms.innerHTML = 0        
var countdownStart;
play.addEventListener('click',function(){
      play.style.display = "none"
      document.querySelector("#reset").style.display = "block"
      document.querySelector("#flag").style.display = "block"
      pause.style.display = "flex"
      countdownStart = setInterval(()=>{
                  ms.innerHTML++   
            if(ms.innerHTML > 9){
                  document.querySelector('#msrem').style.display = "none"
            }
            if(ms.innerHTML <= 9){
                  document.querySelector('#msrem').style.display = "flex"
            }
            if(ms.innerHTML == 100){
                  second.innerHTML++;
                  if(second.innerHTML > 9){
                   document.querySelector('#srem').style.display = "none"
                  }
                  if(second.innerHTML <= 9){
                       document.querySelector('#srem').style.display = "flex"
                  }
                  ms.innerHTML = 0
                  if(second.innerHTML == 60){
                       minute.innerHTML++;
                        if(minute.innerHTML > 9){
                              document.querySelector('#mrem').style.display = "none"
                        }
                        if(minute.innerHTML <= 9){
                            document.querySelector('#mrem').style.display = "flex"
                        }
                        second.innerHTML = 0
                        if(minute.innerHTML == 60){
                              hour.innerHTML++
                              if(hour.innerHTML > 9){
                                    document.querySelector('#hrem').style.display = "none"
                              }
                              if(hour.innerHTML <= 9){
                                    document.querySelector('hrem').style.display = "flex"
                              }
                              minute.innerHTML = 0    
                        }
                  }
            }
            
      },10)
      pause.addEventListener('click',function(){
            clearInterval(countdownStart) 
            document.querySelector("#reset").style.display = "block"
            document.querySelector("#flag").style.display = "none"
            pause.style.display = "none"
            play.style.display = "flex"
      })
      var clutter = " "
      var count=0;
      flag.addEventListener('click',function (){
            count++;
            if(count==1){
            document.querySelector('.flagNav').style.visibility = "visible"
            }
            clutter += `<div class="item">
            <p id="count">${count}</p>
            <div class="times">
                  <p id="Hour">${hour.innerHTML}:</p>
                  <p id="Minute">${minute.innerHTML}:</p>
                  <p id="Second">${second.innerHTML}:</p>
                  <p id="milisecond">${ms.innerHTML}</p>
                  </div>
                  </div>
                  <hr width="50%" size="1" style="align-self: center;border: 1px solid #ffffff50;"> `
            document.querySelector(".flagSection").innerHTML = clutter  

      })
      reset.addEventListener('click',function(){
            clearInterval(countdownStart)
            hour.innerHTML = 0
            minute.innerHTML = 0
            second.innerHTML = 0
            ms.innerHTML = 0    
            pause.click();    
            reset.style.display = "none"
            document.querySelector(".flagSection").innerHTML = ""
            document.querySelector('.flagNav').style.visibility = "hidden"
      })
})
