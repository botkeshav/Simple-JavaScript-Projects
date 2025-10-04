console.log("Hello");

const outer = document.querySelector(".outer"); // added this
const inner = document.querySelector(".inner");
const h1 = document.querySelector(".inner h1");

const inner_width = outer.clientWidth; // target width
console.log(inner_width);

window.addEventListener('load', () => {
  let i = 0;
  inner.style.width = "0px"; // start small

  function animate() {
    if (i <= inner_width) {
      inner.style.width = i + "px";
      i += 2; // speed
      requestAnimationFrame(animate);
    }
  }

  animate();
});
