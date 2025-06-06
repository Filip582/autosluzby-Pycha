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

  // Bezpečná inicializace Accordion-js
  if (document.querySelector('.accordion')) {
    new Accordion('.accordion', {
      duration: 300,
      showMultiple: false
    });
  }

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  const isDesktop = window.matchMedia("(min-width: 900px)").matches;
  // Animace pouze pokud element existuje
  if (document.querySelector(".expirience__image:nth-child(1)")) {
    gsap.to(".expirience__image:nth-child(1)", {
      x: isDesktop ? "0%" : "-20%",
      scrollTrigger: {
        trigger: ".expirience__image:nth-child(1)",
        start: "top 100%",
        end: "center center",
        scrub: 2,
      },
    });
  }

  if (document.querySelector(".expirience__image:nth-child(3)")) {
    gsap.to(".expirience__image:nth-child(3)", {
      x: isDesktop ? "0%" : "20%",
      scrollTrigger: {
        trigger: ".expirience__image:nth-child(3)",
        start: "top 100%",
        end: "center 60%",
        scrub: 2,
      },
    });
  }

  if (document.querySelector(".expirience__wheel")) {
    gsap.to(".expirience__wheel", {
      rotate: 360,
      scrollTrigger: {
        trigger: ".expirience__wheel",
        start: "top 100%",
        end: "bottom 0%",
        scrub: 2,
      },
    });
  }

  if (document.querySelector(".question__wheel")) {
    gsap.to(".question__wheel", {
      rotate: 360,
      scrollTrigger: {
        trigger: ".question__wheel",
        start: "top 100%",
        end: "bottom 0%",
        scrub: 2,
      },
    });
  }

  if (document.querySelector(".contact__wheel")) {
    gsap.to(".contact__wheel", {
      rotate: 360,
      scrollTrigger: {
        trigger: ".contact__wheel",
        start: "top 100%",
        end: "bottom 0%",
        scrub: 2,
      },
    });
  }

  if (document.querySelector(".hero__arrow--down")) {
    ScrollTrigger.create({
      trigger: ".hero__arrow--down",
      start: "top 50%",
      onEnter: () => {
        gsap.to(".hero__arrow--down", {
          y: 30,
          duration: 1,
          ease: "bounce.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(".hero__arrow--down", {
          y: 0,
          duration: 0.4,
          ease: "power1.inOut"
        });
      }
    });
    gsap.set(".hero__arrow--down", { y: 0 });
  }


 
  ['contact', 'expirience', 'sluzby'].forEach(id => {
    document.querySelectorAll(`a[href="#${id}"], a[href="/#${id}"]`).forEach(link => {
      link.addEventListener('click', function(e) {
        // Find the section on the current page
        const section = document.getElementById(id);
        // Only prevent default if the section exists here
        if (section) {
          e.preventDefault();
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
          // Optionally update the URL hash without reloading
          history.replaceState(null, '', `#${id}`);
        }
        // If section does not exist, let the browser handle navigation
      });
    });
  });

  // Smooth scroll na hash po načtení stránky
  if (window.location.hash && document.querySelector(window.location.hash)) {
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.querySelector(window.location.hash).scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  // PHONE ANIMACE
  document.querySelectorAll('.service-info__card').forEach(card => {
    const phone = card.querySelector('img.service-info__icon[src*="phone.svg"]');
    let phoneTween;

    if (phone) {
      card.addEventListener('mouseenter', () => {
        phoneTween = gsap.to(phone, {
          x: [-2, 2, -2, 2, 0],
          y: [0, -2, 2, -2, 0],
          yoyo: true,
          duration: 0.1,
          repeat: -1,
          ease: "power1.inOut"
        });
      });
      card.addEventListener('mouseleave', () => {
        if (phoneTween) phoneTween.kill();
        gsap.to(phone, { x: 0, y: 0, duration: 0.2, ease: "power1.inOut" });
      });
    }
  });

  // CAR ANIMACE s gsap.timeline()
  document.querySelectorAll('.service-info__card').forEach(card => {
    const car = card.querySelector('img.service-info__icon.car__icon');
    let carTimeline;

    if (car) {
      card.addEventListener('mouseenter', () => {
        carTimeline = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power1.inOut" } });
        carTimeline
          .to(car, { x: -14, rotate: -15, duration: 0.5 })
          .to(car, { x: 14, rotate: 15, duration: 0.5 });
      });
      card.addEventListener('mouseleave', () => {
        if (carTimeline) carTimeline.kill();
        gsap.to(car, { x: 0, y: 0, rotate: 0, duration: 0.2, ease: "power1.inOut" });
      });
    }
  });

  
});
