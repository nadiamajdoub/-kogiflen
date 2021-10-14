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
const produktimg = document.querySelector("#produkt img");

gsap
  .timeline({})
  .from(produktimg, {
    x: -1100,
    duration: 10,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#hero_text",
      // markers: true,
      start: "top 90%",
      end: "",
      scrub: true,
    },
  })
  .to(produktimg, {
    scrollTrigger: {
      trigger: "#faktabokse",
      // markers: true,
      start: "top 90%",
      end: "",
      scrub: true,
    },
    x: 1100,
    duration: 10,
    ease: "power1.out",
  });
