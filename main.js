window.addEventListener("load", function () {
  const kepeklista = [
    "kepek/DSC7025.JPG",
    "kepek/DSC7365.jpg",
    "kepek/DSC7444.jpg",
    "kepek/DSC7515.jpg",
  ];
  let articleElem = document.querySelectorAll("article");

  for (let index = 0; index < kepeklista.length; index++) {
    articleElem[0].innerHTML += `<div><img src="${kepeklista[index]}" alt ="#"></div>`;
  }
  console.log(articleElem);
  articleElem.click;
  const kiskepek = document.querySelectorAll("article div img");
  const balgomb = document.querySelector(".bal");
  const jobbgomb= document.querySelector(".jobb");
  for (let index = 0; index < kiskepek.length; index++) {
    kiskepek[index].addEventListener("click", function () {
        kepmegnyit(index, kepeklista);
      
    });
  }
  
  
});
function kepmegnyit(index, kepeklista) {
  console.log(event.target); /**ez az elem valtotta ki az esemenyt */
  const nagykep = document.querySelectorAll("section div img");
  console.log(nagykep);
  nagykep[0].src = kepeklista[index];
  jobbgomb = 
}
