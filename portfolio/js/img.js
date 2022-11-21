const portfolioBtnWinter = document.querySelector(".portfolio-Winter");
const portfolioBtnSpring = document.querySelector(".portfolio-Spring");
const portfolioBtnSummer = document.querySelector(".portfolio-Summer");
const portfolioBtnAutumn = document.querySelector(".portfolio-Autumn");

const portfolioImage = document.querySelectorAll(".portfolio-image");
/*const portfolioImage1 = document.querySelector(".portfolio-image-1");
const portfolioImage2 = document.querySelector(".portfolio-image-2");
const portfolioImage3 = document.querySelector(".portfolio-image-3");
const portfolioImage4 = document.querySelector(".portfolio-image-4");
const portfolioImage5 = document.querySelector(".portfolio-image-5");
const portfolioImage6 = document.querySelector(".portfolio-image-6");*/

portfolioBtnWinter.addEventListener("click", () => {
  portfolioImage.forEach(
    (img, index) => (img.src = `assets/img/winter/${index + 1}.jpg`)
  );
  /*portfolioImage1.src = "../assets/img/winter/1.jpg";
  portfolioImage2.src = "../assets/img/winter/2.jpg";
  portfolioImage3.src = "../assets/img/winter/3.jpg";
  portfolioImage4.src = "../assets/img/winter/4.jpg";
  portfolioImage5.src = "../assets/img/winter/5.jpg";
  portfolioImage6.src = "../assets/img/winter/6.jpg";*/
});
portfolioBtnSpring.addEventListener("click", () => {
  portfolioImage.forEach(
    (img, index) => (img.src = `assets/img/spring/${index + 1}.jpg`)
  );
  /* portfolioImage1.src = "../assets/img/spring/1.jpg";
  portfolioImage2.src = "../assets/img/spring/2.jpg";
  portfolioImage3.src = "../assets/img/spring/3.jpg";
  portfolioImage4.src = "../assets/img/spring/4.jpg";
  portfolioImage5.src = "../assets/img/spring/5.jpg";
  portfolioImage6.src = "../assets/img/spring/6.jpg";*/
});
portfolioBtnSummer.addEventListener("click", () => {
  portfolioImage.forEach(
    (img, index) => (img.src = `assets/img/summer/${index + 1}.jpg`)
  );
  /*portfolioImage1.src = "../assets/img/summer/1.jpg";
  portfolioImage2.src = "../assets/img/summer/2.jpg";
  portfolioImage3.src = "../assets/img/summer/3.jpg";
  portfolioImage4.src = "../assets/img/summer/4.jpg";
  portfolioImage5.src = "../assets/img/summer/5.jpg";
  portfolioImage6.src = "../assets/img/summer/6.jpg";*/
});
portfolioBtnAutumn.addEventListener("click", () => {
  portfolioImage.forEach(
    (img, index) => (img.src = `assets/img/autumn/${index + 1}.jpg`)
  );
  /* portfolioImage1.src = "../assets/img/autumn/1.jpg";
  portfolioImage2.src = "../assets/img/autumn/2.jpg";
  portfolioImage3.src = "../assets/img/autumn/3.jpg";
  portfolioImage4.src = "../assets/img/autumn/4.jpg";
  portfolioImage5.src = "../assets/img/autumn/5.jpg";
  portfolioImage6.src = "../assets/img/autumn/6.jpg";*/
});

/*const portfolioButton = document.querySelector(".portfolio-button");
let portfolio = document.querySelectorAll(".opo");
portfolioButton.addEventListener("click", changeImage);

function changeImage(event) {
  if (event.target.classList.contains("opo")) {
    portfolio.forEach(function(elem) {
       return elem.dataset.season;
    });
    portfolioImage.forEach(
      (img, index) => (img.src = `../assets/img/${portfolio.dataset.season}/${index + 1}.jpg`)
    );
    
  }
}*/

const portfolioBtn = document.querySelector(".opo");

portfolioBtnWinter.addEventListener("click", () => {
  portfolioBtnWinter.style.backgroundColor = "#bdae82";
  portfolioBtnWinter.style.color = "#000";
  portfolioBtnSpring.style.backgroundColor = "#000";
  portfolioBtnSpring.style.color = "#bdae82";
  portfolioBtnSummer.style.backgroundColor = "#000";
  portfolioBtnSummer.style.color = "#bdae82";
  portfolioBtnAutumn.style.backgroundColor = "#000";
  portfolioBtnAutumn.style.color = "#bdae82";
});

portfolioBtnSpring.addEventListener("click", () => {
  portfolioBtnSpring.style.backgroundColor = "#bdae82";
  portfolioBtnSpring.style.color = "#000";
  portfolioBtnWinter.style.backgroundColor = "#000";
  portfolioBtnWinter.style.color = "#bdae82";
  portfolioBtnSummer.style.backgroundColor = "#000";
  portfolioBtnSummer.style.color = "#bdae82";
  portfolioBtnAutumn.style.backgroundColor = "#000";
  portfolioBtnAutumn.style.color = "#bdae82";
});

portfolioBtnSummer.addEventListener("click", () => {
  portfolioBtnSummer.style.backgroundColor = "#bdae82";
  portfolioBtnSummer.style.color = "#000";
  portfolioBtnSpring.style.backgroundColor = "#000";
  portfolioBtnSpring.style.color = "#bdae82";
  portfolioBtnWinter.style.backgroundColor = "#000";
  portfolioBtnWinter.style.color = "#bdae82";
  portfolioBtnAutumn.style.backgroundColor = "#000";
  portfolioBtnAutumn.style.color = "#bdae82";
});

portfolioBtnAutumn.addEventListener("click", () => {
  portfolioBtnAutumn.style.backgroundColor = "#bdae82";
  portfolioBtnAutumn.style.color = "#000";
  portfolioBtnSpring.style.backgroundColor = "#000";
  portfolioBtnSpring.style.color = "#bdae82";
  portfolioBtnSummer.style.backgroundColor = "#000";
  portfolioBtnSummer.style.color = "#bdae82";
  portfolioBtnWinter.style.backgroundColor = "#000";
  portfolioBtnWinter.style.color = "#bdae82";
});
