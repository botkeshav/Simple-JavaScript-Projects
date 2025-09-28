
const button = document.querySelector(".btn")
let hr = document.querySelector(".hour h1")
let min = document.querySelector(".min h1")
let sec = document.querySelector(".sec h1")



let [hour, mins, secs] = [0,0,0];
let start = false;
let intervalId = null;





intervalId =button.addEventListener("click",()=>{
   setInterval(()=>{
    start = true;
    button.innerHTML = "Stop";
    secs++;
    console.log(secs);
    // sec.h1.innerHTML = secs;
    if(secs<10){
        sec.innerHTML = "0"+secs;
    }else{
    sec.innerHTML = secs;
    }

    if(secs === 11 )
    {
        mins++;
        secs =0;
        sec.innerHTML = "0"+secs;

        if (mins < 10) {
        min.innerHTML = "0" + mins+":";
      } else {
        min.innerHTML = mins +":";
      }
    }
    if(mins === 2)    
    {
        mins = 0;
        min.innerHTML = "0" + mins+":";   
        hour++;
        if (hour < 10) hr.innerHTML = "0" + hour+":";
        else hr.innerHTML = hour+":"; 

    }
    
    
   },1000)

});

button.addEventListener("click", () => {
    if(start)
    {
        clearInterval(intervalId);
        sec.innerHTML =secs;
        hr.innerHTML =hour;
        min.innerHTML = mins;
        
    }
})
