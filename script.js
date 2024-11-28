var loader = gsap.timeline();
loader.from(".line h2", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
loader.from(".line1-part1", {
  opacity: 0,
  onStart: function () {
    let grow = 0;
    let h5timer = document.querySelector(".line1-part1 h5");
    let timer = setInterval(() => {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 38);
    },
});
loader.to(" .line h3",{
  animationName: "anime",
  opacity: 1
})
loader.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 4,
});
loader.from("#page1",{
  y: 1200,
  opacity:0,
  ease:Power4,
  duration: 1
})
loader.to("#loader",{
  display: "none"
})
