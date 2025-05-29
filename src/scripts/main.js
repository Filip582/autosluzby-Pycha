import Accordion from "accordion-js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {
  let hamelmnts = document.querySelectorAll(".hamburger-zone");
  for (const btn of document.querySelectorAll(".hamburger-btn")) {
      btn.addEventListener("click", (e) => {
          e.preventDefault();
          for (const element of hamelmnts) {
              element.classList.toggle("active");
          }
          const pageHeader = document.querySelector(".page__header");
          if (pageHeader) {
              pageHeader.classList.toggle("active");
          }
      });
  }




  
  new Accordion('.accordion', {
    duration: 300,
    showMultiple: false
  });



  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  gsap.to(".expirience__image:nth-child(1)", {
    x: "-20%",
    scrollTrigger: {
      trigger: ".expirience__image:nth-child(1)",
      start: "top 100%",
      end: "center center",
      scrub: 2,
    },
  })
  gsap.to(".expirience__image:nth-child(3)", {
    x: "20%",
    scrollTrigger: {
      trigger: ".expirience__image:nth-child(3)",
      start: "top 100%",
      end: "center 60%",
      scrub: 2,
    },
  })

  gsap.to(".expirience__wheel", {
    rotate: 360,
    scrollTrigger: {
      trigger: ".expirience__wheel",
      start: "top 100%",
      end: "bottom 0%",
      scrub: 2,
    },
  })

  gsap.to(".question__wheel", {
    rotate: 360,
    scrollTrigger: {
      trigger: ".question__wheel",
      start: "top 100%",
      end: "bottom 0%",
      scrub: 2,
    },
  })

});


