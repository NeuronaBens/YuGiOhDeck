var selected = false;

function bringForward() {
  //error aqui
  if (selected.selected) {
    selected.style.zIndex = parseInt(selected.style.zIndex) + 500;
  }
}
function setZ(value) {
    selected.style.zIndex = value;
}

function move(param) {
  // Cambiar la posición del div a la del cursor del ratón
  selected.style.left = param.clientX + "px";
  selected.style.top = param.clientY + "px";
}
function moveCardRight(index) {
  const cards = document.querySelectorAll(".yugi-card");
  const card = cards[index];

  if (card) {
    console.log("moving...");
    card.style.zIndex = 10000;
    card.classList.toggle("face-down");
  }
}

function faceChange() {
  selected.classList.toggle("face-down");
}
function rotate() {
  selected.classList.toggle('rotate-90');
}

function select(param) {
  var clicked_elem = param.target;
  if (selected) {
    // Si hay un elemento seleccionado, quitarle la clase css "selected"
    selected.classList.remove("selected");
    // Quitar la bandera para indicar que no está seleccionado
    selected.selected = false;
  }
  // Asignar el nuevo elemento seleccionado a la variable global
  selected = clicked_elem;
  selected.classList.add("selected");
  // Establecer la bandera para indicar que está seleccionado
  selected.selected = true;
}

function createMainDeckCard(image_link, name) {
  const parentElement = document.getElementById("field");
  const divElement = document.createElement("div");
  parentElement.appendChild(divElement);

  divElement.className = "yugi-card";
  divElement.style.backgroundImage = `url(${image_link})`;

  // Add name attribute to card div
  divElement.setAttribute('name', name);
}

function createExtraDeckCard(image_link) {
  const parentElement = document.getElementById("extra");
  const divElement = document.createElement("div");
  parentElement.appendChild(divElement);

  divElement.className = "yugi-card";
  divElement.style.backgroundImage = `url(${image_link})`;
}
