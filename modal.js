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
function modalEvent() {
  modalbg.style.display = "block";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", modalEvent));

//launch modal event close
xBtn.addEventListener("click", (event) => {
  modalbg.style.display = "none";
});
//*******************************************/
//formValid
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (event) => {
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  //*****************/
  let firstRegex = /^[a-zA-Z-\s]+$/;
  let lastRegex = /^[A-Z\s]+$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Prénom
  if (first.value.trim() === "") {
    const errorFirst = document.getElementById("errorFirst");
    errorFirst.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom!";
    const errorStyle = document.querySelectorAll(".errorStyle");
    errorStyle.forEach((item) => {
      item.style.color = "red";
      item.style.fontSize = "0.8rem";
    });
    event.preventDefault();
  } else if (firstRegex.test(first.value) === false) {
    errorFirst.innerHTML =
      "Le prénom doit comporter uniquement des lettres et des tirets!";
    event.preventDefault();
  }

  //Nom
  if (last.value.trim() === "") {
    const errorLast = document.getElementById("errorLast");
    errorLast.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom!";
    const errorStyle = document.querySelectorAll(".errorStyle");
    errorStyle.forEach((item) => {
      item.style.color = "red";
      item.style.fontSize = "0.8rem";
    });
    event.preventDefault();
  } else if (lastRegex.test(last.value) === false) {
    errorLast.innerHTML =
      "Le nom doit comporter uniquement des lettres majuscules!";
    event.preventDefault();
  }

  //Email
  if (email.value.trim() === "") {
    const errorEmail = document.getElementById("errorEmail");
    errorEmail.innerHTML = "Une adresse mail doit être saisie!";
    const errorStyle = document.querySelectorAll(".errorStyle");
    errorStyle.forEach((item) => {
      item.style.color = "red";
      item.style.fontSize = "0.8rem";
    });
    event.preventDefault();
  } else if (emailRegex.test(email.value) === false) {
    errorEmail.innerHTML = "L'adresse mail n'est pas valide";
    event.preventDefault();
  }
});
