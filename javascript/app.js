const body = document.querySelector("body");
const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const statusBar = document.querySelector("#status-bar");
console.log(statusBar);

// console.log("statusBar", statusBar.content);

burger.addEventListener("click", () => {
  if (statusBar && statusBar.content === "#f4acff") {
    statusBar.content = "#fff";
  } else if (statusBar) {
    statusBar.content = "#f4acff";
  }

  body.classList.toggle("bhidden");
  if (nav.style.animation) {
    nav.style.animation = "";
  } else {
    nav.style.animation = "navFadeIn .8s ease forwards";
  }
  nav.classList.toggle("navlinks-is-active");
  header.classList.toggle("menu-is-opened");
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

// start of code to set the color of background of the header and body

if (!body.id) {
  body.style.background = "#fff";
  header.style.backgroundColor = "#fff";
}

// end of code to set the color of background of the header and body
