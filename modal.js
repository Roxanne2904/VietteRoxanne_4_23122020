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
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const arrayRadio = document.querySelectorAll(".checkbox-input[type='radio']");
console.log(arrayRadio);
const datasErrors = document.getElementsByClassName("formData");
//********/
const arrayInputsTxt = [first, last, email, birthdate, quantity];
console.log(arrayInputsTxt);
//*******************************************/
//Validation du formulaire
//*******************************************/
const validate = (event) => {
  arrayInputsTxt.forEach((items) => {
    const isValid = items.validity.valid;
    console.log(items, isValid);
    //
    if (!isValid) {
      event.preventDefault();
      console.log(items.parentElement);
      items.parentElement.dataset.errorVisible = "true";
      arrayInputsTxt[0].parentElement.dataset.error =
        "Le prénom doit être composé de lettres uniquement et commencer par un majuscule";
      arrayInputsTxt[1].parentElement.dataset.error =
        "Le nom doit être entièrement en majuscule";
      arrayInputsTxt[2].parentElement.dataset.error =
        "Il faut rentrer une adresse e-mail valide";
      arrayInputsTxt[3].parentElement.dataset.error =
        "Veuillez indiquer votre date de naissance";
      arrayInputsTxt[arrayInputsTxt.length - 1].parentElement.dataset.error =
        "Veuillez rentrer un chiffre ou un nombre entre 0 et 99";
    } else {
      items.parentElement.dataset.errorVisible = "false";
      items.parentElement.dataset.error = "";
    }
  });
  //
  arrayRadio.forEach((radios) => {
    const radioIsValid = radios.checked;
    console.log(radios, radioIsValid);
    //
    if (!radioIsValid) {
      radios.parentElement.dataset.errorVisible = "true";
      radios.parentElement.dataset.error = "Veuillez séléctionner une Ville";
    } else {
      radios.parentElement.dataset.errorVisible = "false";
      radios.parentElement.dataset.error = "";
    }
  });
};
