import Accordion from "accordion-js";

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



  // ...tvůj kód pro hamburger...

  
  new Accordion('.accordion', {
    duration: 300,
    showMultiple: false
  });



  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});