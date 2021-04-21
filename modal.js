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
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (event) => {
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  //*****************/
  let firstRegex = /^[a-zA-Z-\s]+$/;
  let lastRegex = /^[A-Z\s]+$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let birthdateRegex = /^0[1-9]|1[0-9]|2[0-9]|3[0-1]+[\/]+0[1-9]|1[0-2]+[\/]+19\d{2}|20[0-1]\d|202[0-1]$/;
  let quantityRegex = /^\d|[\d{2}]$/;

  //Prénom
  if (first.value.trim() === "") {
    const dataError = document.getElementsByClassName("formData");
    dataError[0].dataset.errorVisible = "true";
    dataError[0].dataset.error =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom!";
    event.preventDefault();
  } else if (firstRegex.test(first.value) === false) {
    const dataError = document.getElementsByClassName("formData");
    dataError[0].dataset.error =
      "Le prénom ne peut comporter que des lettres et des tirets!";
    event.preventDefault();
  } else if (firstRegex.test(first.value) === true) {
    const dataError = document.getElementsByClassName("formData");
    dataError[0].dataset.errorVisible = "false";
  }

  //Nom
  if (last.value.trim() === "") {
    const dataError = document.getElementsByClassName("formData");
    dataError[1].dataset.errorVisible = "true";
    dataError[1].dataset.error =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom!";
    event.preventDefault();
  } else if (lastRegex.test(last.value) === false) {
    const dataError = document.getElementsByClassName("formData");
    dataError[1].dataset.error = "Le nom doit être en majuscule!";
    event.preventDefault();
  } else if (lastRegex.test(last.value) === true) {
    const dataError = document.getElementsByClassName("formData");
    dataError[1].dataset.errorVisible = "false";
  }

  //Email
  if (email.value.trim() === "") {
    const dataError = document.getElementsByClassName("formData");
    dataError[2].dataset.errorVisible = "true";
    dataError[2].dataset.error = "Il faut saisir une adresse mail!";
    event.preventDefault();
  } else if (emailRegex.test(email.value) === false) {
    const dataError = document.getElementsByClassName("formData");
    dataError[2].dataset.error = "L'adresse mail n'est pas valide!";
    event.preventDefault();
  } else if (emailRegex.test(email.value) === true) {
    const dataError = document.getElementsByClassName("formData");
    dataError[2].dataset.errorVisible = "false";
  }

  //date
  if (birthdate.value.trim() === "") {
    const dataError = document.getElementsByClassName("formData");
    dataError[3].dataset.errorVisible = "true";
    dataError[3].dataset.error = "Il faut saisir une date!";
    event.preventDefault();
  } else if (birthdateRegex.test(birthdate.value) === false) {
    const dataError = document.getElementsByClassName("formData");
    dataError[3].dataset.error = "La date n'est pas valide!";
    event.preventDefault();
  } else if (birthdateRegex.test(birthdate.value) === true) {
    const dataError = document.getElementsByClassName("formData");
    dataError[3].dataset.errorVisible = "false";
  }

  //quantity
  if (quantity.value.trim() === "") {
    const dataError = document.getElementsByClassName("formData");
    dataError[4].dataset.errorVisible = "true";
    dataError[4].dataset.error = "Il faut saisir une réponse!";
    event.preventDefault();
  } else if (quantityRegex.test(quantity.value) === false) {
    const dataError = document.getElementsByClassName("formData");
    dataError[4].dataset.error =
      "La réponse n'est pas valide, il faut indiquer un chiffre ou un nombre";
    event.preventDefault();
  } else if (quantityRegex.test(quantity.value) === true) {
    const dataError = document.getElementsByClassName("formData");
    dataError[4].dataset.errorVisible = "false";
  }
  if (
    firstRegex.test(first.value) === true &&
    lastRegex.test(last.value) === true &&
    emailRegex.test(email.value) === true &&
    birthdateRegex.test(birthdate.value) === true &&
    quantityRegex.test(quantity.value) === true
  ) {
    alert("Merci, Votre réservation a bien été reçue :D ");
  } else {
    null;
  }
});
