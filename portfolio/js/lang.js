const ru1 = document.querySelector(".ru");
const en1 = document.querySelector(".en");
const Rama = document.querySelector(".headline");
const Ra = document.querySelector(".head-text");
const Rai = document.querySelector(".button-not-transparent");
const na1 = document.querySelector(".po1");
const na2 = document.querySelector(".po2");
const na3 = document.querySelector(".po3");
const na4 = document.querySelector(".po4");
const na5 = document.querySelector(".po5");
const sk1 = document.querySelector(".sk1");
const sk2 = document.querySelector(".sk2");
const sk3 = document.querySelector(".sk3");
const sk4 = document.querySelector(".sk4");
const sk5 = document.querySelector(".sk5");
const sk6 = document.querySelector(".sk6");
const sk7 = document.querySelector(".sk7");
const sk8 = document.querySelector(".sk8");
const sk9 = document.querySelector(".sk9");
const pf1 = document.querySelector(".pf1");
const pf2 = document.querySelector(".pf2");
const pf3 = document.querySelector(".pf3");
const pf4 = document.querySelector(".pf4");
const pf5 = document.querySelector(".pf5");
const vd1 = document.querySelector(".vd1");
const ps1 = document.querySelector(".ps1");
const ps2 = document.querySelector(".ps2");
const ps3 = document.querySelector(".ps3");
const ps4 = document.querySelector(".ps4");
const ps5 = document.querySelector(".ps5");
const ps6 = document.querySelector(".ps6");
const ps7 = document.querySelector(".ps7");
const ps8 = document.querySelector(".ps8");
const ps9 = document.querySelector(".ps9");
const ps10 = document.querySelector(".ps10");
const ps11 = document.querySelector(".ps11");
const ps12 = document.querySelector(".ps12");
const ps13 = document.querySelector(".ps13");
const ps14 = document.querySelector(".ps14");
const ps15 = document.querySelector(".ps15");
const ps16 = document.querySelector(".ps16");
const ps17 = document.querySelector(".ps17");
const ps18 = document.querySelector(".ps18");
const ps19 = document.querySelector(".ps19");
const ps20 = document.querySelector(".ps20");
const ps21 = document.querySelector(".ps21");
const ps22 = document.querySelector(".ps22");
const cn1 = document.querySelector(".cn1");
const cn2 = document.querySelector(".cn2");
let lang = '';




function getTranslateEn(){
Rama.innerHTML = "Alexa Rise";
Ra.innerHTML = "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise";
Rai.innerHTML = "Hire me";
na1.innerHTML = "Skills";
na2.innerHTML = "Portfolio";
na3.innerHTML = "Video";
na4.innerHTML = "Price";
na5.innerHTML = "Contacts";
sk1.innerHTML = "Skills";
sk2.innerHTML = "Digital photography";
sk3.innerHTML = "High-quality photos in the studio and on the nature";
sk4.innerHTML = "Video shooting";
sk5.innerHTML = "Capture your moments so that they always stay with you";
sk6.innerHTML = "Rotouch";
sk7.innerHTML = "I strive to make photography surpass reality";
sk8.innerHTML = "Audio";
sk9.innerHTML = "Professional sounds recording for video, advertising, portfolio";
pf1.innerHTML = "Portfolio";
pf2.innerHTML = "Winter";
pf3.innerHTML = "Spring";
pf4.innerHTML = "Summer";
pf5.innerHTML = "Autumn";
vd1.innerHTML = "Video";
ps1.innerHTML = "Price";
ps2.innerHTML = "Standard";
ps3.innerHTML = "One location";
ps4.innerHTML = "120 photos in color";
ps5.innerHTML = "12 photos in retouch";
ps6.innerHTML = "Readiness 2-3 weeks";
ps7.innerHTML = "Make up, visage";
ps8.innerHTML = "Order shooting";
ps9.innerHTML = "Premium";
ps10.innerHTML = "One or two locations";
ps11.innerHTML = "200 photos in color";
ps12.innerHTML = "20 photos in retouch";
ps13.innerHTML = "Readiness 1-2 weeks";
ps14.innerHTML = "Make up, visage";
ps15.innerHTML = "Gold";
ps16.innerHTML = "Three locations or more";
ps17.innerHTML = "300 photos in color";
ps18.innerHTML = "50 photos in retouch";
ps19.innerHTML = "Readiness 1 week";
ps20.innerHTML = "Make up, visage, hairstyle";
ps21.innerHTML = "Order shooting";
ps22.innerHTML = "Order shooting";
cn1.innerHTML = "Contact me";
cn2.innerHTML = "Send message";
ru1.classList.toggle('rus');
en1.classList.toggle('ens');
lang = 'en';
}

function getTranslate(){
Rama.innerHTML = "Алекса Райс";
Ra.innerHTML = "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом";
Rai.innerHTML = "Пригласить";
na1.innerHTML = "Навыки";
na2.innerHTML = "Портфолио";
na3.innerHTML = "Видео";
na4.innerHTML = "Цены";
na5.innerHTML = "Контакты";
sk1.innerHTML = "Навыки";
sk2.innerHTML = "Фотография";
sk3.innerHTML = "Высококачественные фото в студии и на природе";
sk4.innerHTML = "Видеосъемка";
sk5.innerHTML = "Запечатлите лучшие моменты, чтобы они всегда оставались с вами";
sk6.innerHTML = "Ретушь";
sk7.innerHTML = "Я стремлюсь к тому, чтобы фотография превосходила реальность";
sk8.innerHTML = "Звук";
sk9.innerHTML = "Профессиональная запись звука для видео, рекламы, портфолио";
pf1.innerHTML = "Портфолио";
pf2.innerHTML = "Зима";
pf3.innerHTML = "Весна";
pf4.innerHTML = "Лето";
pf5.innerHTML = "Осень";
vd1.innerHTML = "Видео";
ps1.innerHTML = "Цены";
ps2.innerHTML = "Стандарт";
ps3.innerHTML = "Одна локация";
ps4.innerHTML = "120 цветных фото";
ps5.innerHTML = "12 отретушированных фото";
ps6.innerHTML = "Готовность через 2-3 недели";
ps7.innerHTML = "Макияж, визаж";
ps8.innerHTML = "Заказать съемку";
ps9.innerHTML = "Премиум";
ps10.innerHTML = "Одна-две локации";
ps11.innerHTML = "200 цветных фото";
ps12.innerHTML = "20 отретушированных фото";
ps13.innerHTML = "Готовность через 1-2 недели";
ps14.innerHTML = "Макияж, визаж";
ps15.innerHTML = "Золотой";
ps16.innerHTML = "Три локации и больше";
ps17.innerHTML = "300 цветных фото";
ps18.innerHTML = "50 отретушированных фото";
ps19.innerHTML = "Готовность через 1 неделю";
ps20.innerHTML = "Макияж, визаж, прическа";
ps21.innerHTML = "Заказать съемку";
ps22.innerHTML = "Заказать съемку";
cn1.innerHTML = "Свяжитесь со мной";
cn2.innerHTML = "Отправить";
en1.classList.toggle('ens');
ru1.classList.toggle('rus');
lang = 'ru';
}

en1.addEventListener('click', getTranslateEn);
ru1.addEventListener('click', getTranslate);



function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage)



function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
}
window.addEventListener('load', getLocalStorage)