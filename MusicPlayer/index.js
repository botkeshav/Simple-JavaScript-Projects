console.log("Hello Bsdk")

const audio = document.querySelector(".music");
const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");

// let progress = document.querySelector(".doted")
const progressDot = document.querySelector(".doted");
const bar = document.querySelector(".loading-bar");
const progressPercent = (audio.currentTime / audio.duration) * 100;



let playing = false;

playBtn.addEventListener("click", ()=> {
    if(playing)
    {
        audio.pause();
        playBtn.querySelector("img").src =  "./icons/play_arrow.svg"
    }else
    {
        audio.play();
        playBtn.querySelector("img").src =  "./icons/pause.svg"
    }
    playing = !playing;
})

backwardBtn.addEventListener("click", () =>
{
    audio.currentTime += 5;
});

forwardBtn.addEventListener("click", () =>
{
    audio.currentTime -= 5;
})

forwardBtn.addEventListener("ended" , ()=>
{
    playBtn.querySelector("img").src = "./icons/play_arrow.svg"

})

// audio.onloadedmetadata = function ()
// {
//     progress.max  = audio.duration;
//     progress.value = audio.currentTime;
// }


// if(audio.play())
// {
//     setInterval(() => {
//         progress.value = audio.currentTime;
//     },500)
// }

audio.addEventListener("timeupdate", () => {
  if (!isFinite(audio.duration) || audio.duration === 0) return;

  // percentage of song completed
  const progressPercent = (audio.currentTime / audio.duration) * 100;

  // move dot inside the bar
  const barWidth = bar.clientWidth; 
  const dotWidth = progressDot.offsetWidth; 

  // calculate new left position (keeping dot inside bar)
  const newLeft = (progressPercent / 100) * (barWidth - dotWidth);

  progressDot.style.transform = `translateX(${newLeft}px)`;
});


bar.addEventListener("click", (e) => {
  const barRect = bar.getBoundingClientRect();
  const clickX = e.clientX - barRect.left;  
  const barWidth = bar.clientWidth;

  const percent = clickX / barWidth;
  const newTime = percent * audio.duration;

  audio.currentTime = newTime;
});

// document.addEventListener('keydown' function(){
//     if()
// })

document.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {  
    console.log('Spacebar pressed (Modern)');
    if (audio.paused) 
        {
            audio.play();
            playBtn.querySelector("img").src =  "./icons/pause.svg";
        }
    else {
        audio.pause();
        playBtn.querySelector("img").src =  "./icons/play_arrow.svg"; 
    }

    //e.preventDefault();  
  }
});
