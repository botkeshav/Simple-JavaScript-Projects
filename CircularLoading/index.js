console.log("Hello");
const inner = document.querySelector(".inner");
const h1 = document.querySelector(".inner h1");
const inner_width = outer.clientWidth;

console.log(inner_width);


window.addEventListener('load',()=>{

    let i =0;
    inner.style.width = "0px"; 

  function animate() {
    if (i <= inner_width) {
      inner.style.width = i + "px";
    //   i++;
        i += 2;
      requestAnimationFrame(animate); // schedule next frame
    }
  }

  animate();
    
})
