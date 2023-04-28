var movement = false;
//mostrador
var p = document.createElement("p");
// Añadir el elemento p al principio del body
document.body.insertBefore(p, document.body.firstChild);

// Añadir el controlador de evento para cuando se presiona una tecla en el documento
document.addEventListener("keydown", kToggle);

// Añadir el controlador del evento para cuando se presiona el boton para mostrar el z value
const showZIndexButton = document.getElementById("show-z-index");
showZIndexButton.addEventListener("click", showZIndexList);

//definición de la función que controla las operaciones del documento
function kToggle(param) {
  var key = param.key;
  if (key == "m"){
    if (movement){
      document.removeEventListener("click", move)
      p.innerText = " "
      movement = false
    } else {
      document.addEventListener("click", move)
      p.innerText = "m"
      movement = true
    }
  }
  else if (key == "z"){
    bringForward()
    p.innerText = "z"
  }
  else if (key == "f"){
    faceChange()
    p.innerText = "f"
  }
  else if (key == "r"){
    rotate()
    p.innerText = "r"
  }
}

//la funcion que muestra cosas en consola (cosas = z index and name)
function showZIndexList() {
  const cards = document.querySelectorAll(".yugi-card");
  const showOrderDiv = document.getElementById("show order");

  if (showOrderDiv.innerHTML != "") {
    showOrderDiv.innerHTML = "";
    return
  }

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const zIndex = card.style.zIndex;
    const name = card.getAttribute("name");

    const cardDetails = document.createElement("p");
    cardDetails.innerText = `Card Name: ${name}, Z-Index: ${zIndex}, index: ${i}`;
    showOrderDiv.appendChild(cardDetails);
  }
}


//se pone el listener para sacar a una carta especifica del deck
const moveRightButton = document.getElementById("move-right-button");
moveRightButton.addEventListener("click", () => {
  const indexInput = document.getElementById("card-index-input");
  const indexValue = parseInt(indexInput.value);

  moveCardRight(indexValue);
});
