window.addEventListener("load", function () {
  const KEPEKLISTA = [
    "kepek/DSC7025.JPG",
    "kepek/DSC7365.jpg",
    "kepek/DSC7444.jpg",
    "kepek/DSC7515.jpg",
  ];
  let mostaniIndex = 0;
  let articleElem = document.querySelectorAll("article");

  for (let index = 0; index < KEPEKLISTA.length; index++) {
    articleElem[0].innerHTML += `<div><img src="${KEPEKLISTA[index]}" alt ="#"></div>`;
  }
  console.log(articleElem);
  /**articleElem.click;*/
  const KISKEPEK = document.querySelectorAll("article div img");
  for (let index = 0; index < KISKEPEK.length; index++) {
    KISKEPEK[index].addEventListener("click", function () {
      kepMegnyit(index, KEPEKLISTA);
      mostaniIndex = index;
    });
  }
  const balgomb = document.querySelector(".bal");
  balgomb.addEventListener("click",function () {
    mostaniIndex--;
    if (mostaniIndex < 0) {
      mostaniIndex = KEPEKLISTA.length-1;
    }
    kepMegnyit(mostaniIndex, KEPEKLISTA);
  });
  const jobbgomb= document.querySelector(".jobb");
  jobbgomb.addEventListener("click",function () {
    mostaniIndex++;
    if (mostaniIndex>= KEPEKLISTA.length) {
      mostaniIndex = 0;
    }
    kepMegnyit(mostaniIndex, KEPEKLISTA);
  });
  
});
function kepMegnyit(index, KEPEKLISTA) {
  console.log(event.target); /**ez az elem valtotta ki az esemenyt */
  const NAGYKEP = document.querySelectorAll("section div img");
  console.log(NAGYKEP);
  NAGYKEP[0].src = KEPEKLISTA[index];
  
}
