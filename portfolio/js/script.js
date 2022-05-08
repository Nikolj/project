const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");

function myFunction(x) {
  x.classList.toggle("change");
  nav.classList.toggle("change");
  navList.classList.toggle("change");
}

const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
function closeMenu() {
  hamburger.classList.remove("change");
  nav.classList.remove("change");
  navList.classList.remove("change");
}

navLink.forEach((el) => el.addEventListener("click", closeMenu));
/*navLink.addEventListener("click", closeMenu);*/

nav.addEventListener("click", closeMenu);
function closeMenu(event) {
  if (event.target.classList.contains("nav-link")) {
    hamburger.classList.remove("change");
    nav.classList.remove("change");
    navList.classList.remove("change");
  }
}

