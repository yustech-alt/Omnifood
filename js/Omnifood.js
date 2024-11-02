const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear;
yearEL.textContent = currentYear;

// navigation

const btnEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

const ALLink = document.querySelector("a:link");

// ALLink.forEach(function(link) => {
//   link.addEventListener("click", function(e))
  
// });
