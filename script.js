gsap.registerPlugin(ScrollTrigger);

const divs = document.querySelectorAll("#hero");

divs.forEach((div) => {
  const h2 = div.querySelectorAll("h2");
  const h3 = div.querySelectorAll("h3");
  const h1 = div.querySelectorAll("h1");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: div,
        // markers: true,
        start: "top 10%",
        end: "bottom 90%",
        scrub: true,
      },
    })

    .from(h3, {
      duration: 1,
      opacity: 0,
    })

    .to(h2, {
      opacity: 0,
      duration: 2,
    });
});
// const produktimg = document.querySelector("#produkt img");

gsap.fromTo(
  "#produkt img",
  { x: -innerWidth },
  {
    x: innerWidth,
    duration: 2,
    ease: "none",
    scrollTrigger: {
      trigger: "#produkt",
      markers: true,
      start: "top-=100 75%",
      end: "bottom+=100 25%",
      scrub: 1,
    },
  }
);
// .to(produktimg, {
//   scrollTrigger: {
//     trigger: "#faktabokse",
//     // markers: true,
//     start: "top 90%",
//     end: "",
//     scrub: true,
//   },
//   x: innerWidth,
//   duration: 10,
//   ease: "power1.out",
// });
