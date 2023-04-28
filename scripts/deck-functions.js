function initializeCards(){
  var cards = document.querySelectorAll(".yugi-card");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    // Añadir el controlador de evento para cuando se hace click en el elemento
    card.addEventListener("click", select);
  }
}
function populateMain(){
  card_links = GVC_DeckCardsLinks;
  card_links = card_links.trim();
  cards = card_links.split("\n");
  for (var i = 0; i < cards.length; i++) {
    cards[i] = cards[i].trim();
  }
  for (let i = 0; i < cards.length; i++) {
    const [image_link, name] = cards[i].split(',');
    createMainDeckCard(image_link, name);
  }
}
function populateExtra(){
  card_links = GVC_ExtraDeckCardsLinks;
  card_links = card_links.trim();
  cards = card_links.split("\n");
  for (var i = 0; i < cards.length; i++) {
    cards[i] = cards[i].trim();
  }
  for (var i = 0; i < cards.length; i++) {
    createExtraDeckCard(cards[i]);
  }
}
function setAllFaceDown(){
  var cards = document.querySelectorAll(".yugi-card");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    selected = card;
    faceChange();
  }
}
function shuffleDeck(){
  var cards = document.querySelectorAll(".yugi-card");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    selected = card;
    setZ(Math.trunc(Math.random()*9999));
  }
}


populateMain();
populateExtra();

initializeCards();
setAllFaceDown();
shuffleDeck();

selected = false;
