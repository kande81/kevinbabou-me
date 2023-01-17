const body = document.querySelector("body");
const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const searchBar = document.getElementsByName("theme-color");
console.log(searchBar);

burger.addEventListener("click", () => {
  body.classList.toggle("bhidden");
  nav.classList.toggle("navlinks-is-active");
  header.classList.toggle("menu-is-opened");
  searchBar.setAttribute("content", "#fff");
  console.log(searchBar.content);
  console.log(searchBar);
  // animate the links
  navLinks.forEach((link) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = "navLinksAnim .8s ease forwards";
    }
  });
  // animate the burger icon
  burger.classList.toggle("toggle");
});
