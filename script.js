gsap.registerPlugin(ScrollTrigger);

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  const h2 = div.querySelectorAll("h2");
  const h3 = div.querySelectorAll("h3");
  const h1 = div.querySelectorAll("h1");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: div,
        markers: true,
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
  .timeline({
    scrollTrigger: {
      trigger: "#hero_text",
      markers: true,
      start: "top 20%",
      end: "",
      scrub: true,
    },
  })
  .from(produktimg, {
    x: -1100,
    duration: 10,
    ease: "power1.out",
  })
  .to(produktimg, {
    x: 1100,
    duration: 10,
    ease: "power1.out",
  });
