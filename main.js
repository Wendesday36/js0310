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
});
