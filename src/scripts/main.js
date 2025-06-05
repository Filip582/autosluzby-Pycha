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

  // const retez = document.querySelector('.retez-anim');

  // document.querySelectorAll('.sluzby__content-card').forEach(card => {
  //   card.addEventListener('mouseenter', () => {
  //     if (!retez) return;
  //     // Zjisti pozici karty
  //     const rect = card.getBoundingClientRect();
  //     // Vypočítej střed karty vůči viewportu
  //     const left = rect.left + rect.width / 2 - 9 + window.scrollX; // 9 je polovina šířky řetězu (18px)
  //     const y = rect.top + window.scrollY;
  //     // Nastav pozici řetězu (zůstává nahoře)
  //     retez.style.left = `${left}px`;
  //     retez.style.display = 'block';
  //     retez.style.opacity = '1';
  //     retez.style.top = `${y}px`;

  //     // Animace řetězu dolů k hornímu okraji karty (ale top je vždy 0)
  //     gsap.fromTo(retez,
  //       { top: '-420px', opacity: 1 },
  //       { top: '0px', opacity: 1, duration: 0.4, ease: "power1.out" }
  //     );
  //     // Animace karty nahoru
  //     gsap.to(card, { y: -20, duration: 0.3, ease: "power1.out" });
  //   });

  //   card.addEventListener('mouseleave', () => {
  //     if (!retez) return;
  //     // Animace řetězu zpět nahoru
  //     gsap.to(retez, {
  //       top: '-420px',
  //       opacity: 1,
  //       duration: 0.3,
  //       onComplete: () => {
  //         retez.style.display = 'none';
  //       }
  //     });
  //     gsap.to(card, { y: 0, duration: 0.3, ease: "power1.in" });
  //   });
  // });
 
  ['contact', 'expirience', 'sluzby'].forEach(id => {
    document.querySelectorAll(`a[href="./index.html#${id}"]`).forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
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
});
