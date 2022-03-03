const white = document.querySelector(".white");
const sectionHero = document.querySelector(".section-hero");
const sectionSkills = document.querySelector(".section-skills");
const sectionTitleCont = document.querySelectorAll(".section-title-cont");
const sectionTitle = document.querySelectorAll(".section-title");
const portfolioButton = document.querySelector(".portfolio-button");
const skillItemText1 = document.querySelectorAll(".skill-item-text-1");
const skillItemText2 = document.querySelectorAll(".skill-item-text-2");
const portfolioFoto = document.querySelector(".portfolio-foto");
const sectionPortfolio = document.querySelector(".section-portfolio");
const sectionVideo = document.querySelector(".section-video");
const sectionPrice = document.querySelector(".section-price");
const text1 = document.querySelectorAll(".text");
const h3 = document.querySelectorAll(".h3");
const opo = document.querySelectorAll(".opo");
const image = document.querySelectorAll(".image");
const images = document.querySelectorAll(".images");
const hamburger11 = document.querySelector(".nav");
const hamburgerNav = document.querySelector(".nav-item");
const li1 = document.querySelector(".line1");
const li3 = document.querySelector(".line3");
let themes = 'dark';

function addWhite() {
  white.classList.toggle("light-theme");
  /*sectionHero.classList.toggle("light-theme");*/
  sectionSkills.classList.toggle("light-theme");
  sectionTitleCont.forEach((img, index) => img.classList.toggle("light-theme"));
  sectionTitle.forEach((img, index) => img.classList.toggle("light-beg"));
  portfolioButton.classList.toggle("light-theme");
  skillItemText1.forEach((img, index) => img.classList.toggle("light-theme"));
  skillItemText2.forEach((img, index) => img.classList.toggle("light-theme"));
  portfolioFoto.classList.toggle("light-theme");
  sectionPortfolio.classList.toggle("light-theme");
  sectionVideo.classList.toggle("light-theme");
  sectionPrice.classList.toggle("light-theme");
  text1.forEach((img, index) => img.classList.toggle("light-theme"));
  h3.forEach((img, index) => img.classList.toggle("light-theme"));
  opo.forEach((img, index) => img.classList.toggle("light-theme"));
  images.forEach((img, index) => img.classList.toggle("imagess"));
  image.forEach((img, index) => img.classList.toggle("images"));
  themes = 'light';
}

const teme = document.querySelector(".teme");
teme.addEventListener("click", addWhite);



function setLocalStorage() {
  localStorage.setItem('themes', themes);
}
window.addEventListener('beforeunload', setLocalStorage)



function getLocalStorage() {
  if(localStorage.getItem('themes')) {
    const lang = localStorage.getItem('themes');
    getTranslate(themes);
  }
}
window.addEventListener('load', getLocalStorage)