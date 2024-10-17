const red = document.getElementById("btn-red");
const blue = document.getElementById("btn-blue");
let titre = document.getElementById("titre");

titre.style.color = "green";

let compteur = 1;

red.addEventListener("click", function () {
  add();
  console.log("Clique sur le bouton rouge");
  title();
});

blue.addEventListener("click", function () {
  add();
  console.log("Clique sur le bouton bleu");
  title();
});

function add() {
  compteur = compteur + 1;
  console.log("nouveau compteur:", compteur);
}
function title() {
  titre.innerText = compteur;
}

setTimeout(function () {
  red.remove();
  blue.remove();
  console.log("fin du chrono");
}, 10000);
