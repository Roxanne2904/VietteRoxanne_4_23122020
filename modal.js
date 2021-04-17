function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
//[2 btn], il y en a un pour le responsive et l'autre pour la vers.desktop.
const xBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function launchModal(blockStatue) {
    modalbg.style.display = blockStatue;
    launchModal("block");
  })
);
//launch modal event close
xBtn.addEventListener("click", function launchModal(blockStatue) {
  modalbg.style.display = blockStatue;
  launchModal("none");
});
