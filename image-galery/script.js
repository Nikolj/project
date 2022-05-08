  let url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=gBBqcXb_nOAcOqnZNSjX2lpci9pX6v_v-jILlfkFf5g";
  const Btn = document.querySelector(".fa-search");
  
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
  }

 function showData(data){
   let key;
   for (key in data.results) {
    const img = `<img class="gallery-img" src="${data.results[key].urls.regular}" alt="Foto">`;
    const galleryContainer = document.querySelector("#grid");
    galleryContainer.insertAdjacentHTML("beforeend", img);
	}
}

function search (){
	const getNum = document.getElementById("input").value; 
	url = `https://api.unsplash.com/search/photos?query=${getNum}&per_page=30&orientation=landscape&client_id=gBBqcXb_nOAcOqnZNSjX2lpci9pX6v_v-jILlfkFf5g`; 
	let gallery = document.querySelectorAll(".gallery-img");
	gallery.forEach((gallery) => gallery.remove());
	getData();
}

document.getElementById("clear-sea").onclick = function(e) {
  document.getElementById("input").value = "";
}

Btn.addEventListener('click', search);
getData();
