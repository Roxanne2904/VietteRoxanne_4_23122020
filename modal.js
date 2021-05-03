function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
//[2 btn], il y en a un pour le responsive et l'autre pour la vers.desktop.
const xBtn = document.querySelector(".close");

function modalEvent() {
  modalBg.style.display = "block";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", modalEvent));

//launch modal event close
xBtn.addEventListener("click", (event) => {
  modalBg.style.display = "none";
});

//*******************************************/
// DOM ELEMENTS INPUTS
//*******************************************/
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.querySelector("#checkbox1");
const radios = document.querySelectorAll(".checkbox-input[type='radio']");
console.log(radios); //NODELIST DES INPUTS RADIOS
let radiosArray = Array.from(radios);
console.log(radiosArray); //NODELIST DEVIENT UN ARRAY

//*******************************************/
//ARRAY DE TOUS LES INPUTS
//*******************************************/
const arrayInputsAll = [
  [first, last, email, birthdate, quantity, checkbox1],
  radiosArray,
];
console.log(arrayInputsAll);

const arrayInputsTxt = [first, last, email, birthdate, quantity]; //ARRAY DES INPUTS TXT

//*******************************************/
//CHANGEMENT DU MSG, LORS DU CHANGEMENT DU CONTENUE DE L'INPUT
//*******************************************/
arrayInputsTxt.forEach((elmt) => {
  elmt.addEventListener("change", () => {
    elmt.parentElement.dataset.errorVisible = "false";
  });
});

//*******************************************/
//VALIDATION DU FORMULAIRE
//*******************************************/
const validate = (event) => {
  event.preventDefault();

  for (i = 0; i < 6; i++) {
    const isValid = arrayInputsAll[0][i].validity.valid;
    if (!isValid) {
      arrayInputsAll[0][i].parentElement.dataset.errorVisible = "true";
      arrayInputsAll[0][0].parentElement.dataset.error =
        "Le prénom doit être composé de lettres uniquement et commencer par un majuscule";
      arrayInputsAll[0][1].parentElement.dataset.error =
        "Le nom doit être entièrement en majuscule";
      arrayInputsAll[0][2].parentElement.dataset.error =
        "Il faut rentrer une adresse e-mail valide";
      arrayInputsAll[0][3].parentElement.dataset.error =
        "Veuillez indiquer votre date de naissance";
      arrayInputsAll[0][4].parentElement.dataset.error =
        "Veuillez rentrer un chiffre ou un nombre entre 0 et 99";
    } else {
      arrayInputsAll[0][i].parentElement.dataset.errorVisible = "false";
      arrayInputsAll[0][i].parentElement.dataset.error = "";
    }
    //*******************************************/
    //CHECKBOX RADIOS
    //*******************************************/
    let checkboxRadiochecked = false;
    arrayInputsAll[1][i].parentElement.dataset.errorVisible = "false";
    if (arrayInputsAll[1][i].checked === true) {
      checkboxRadiochecked = true;
      break;
    }
    if (checkboxRadiochecked === false) {
      arrayInputsAll[1][0].parentElement.dataset.errorVisible = "true";
      arrayInputsAll[1][0].parentElement.dataset.error = "nope";
    }
    //*******************************************/
    //CHECKBOX CHECK
    //*******************************************/
    arrayInputsAll[0][5].parentElement.dataset.errorVisible = "false";
    let checkboxchecked = false;
    if (arrayInputsAll[0][5].checked === true) {
      checkboxchecked = true;
    } else {
      arrayInputsAll[0][5].parentElement.dataset.error =
        "Vous devez accepter les conditions d'utilisations";
      arrayInputsAll[0][5].parentElement.dataset.errorVisible = "true";
    }
  }
  //*******************************************/
  //CHECKBOX RADIOS
  //*******************************************/
  //const radios = document.querySelectorAll(".checkbox-input[type='radio']");
  //console.log(radios);

  //let checkboxRadiochecked = false;
  //radios[0].parentElement.dataset.errorVisible = "false";
  //for (i = 0; i < radios.length; i++) {
  // if (radios[i].checked === true) {
  // checkboxRadiochecked = true;
  //break;
  //}
  //}
  //if (checkboxRadiochecked === false) {
  //radios[0].parentElement.dataset.errorVisible = "true";
  //radios[0].parentElement.dataset.error = "nope";
  //}

  //*******************************************/
  //SOME();
  //*******************************************/
  //let radiosArray = Array.from(radios);
  //console.log(radiosArray);
  //const isItChecked = (currentValue) => {
  //console.log("isItChecked");
  //console.log({ value: currentValue.value, checked: currentValue.checked });
  //return currentValue.checked === true;
  //};
  //console.log(radiosArray.some(isItChecked));

  //*******************************************/
  //CHECKBOX CHECK
  //*******************************************/

  //checkbox1.parentElement.dataset.errorVisible = "false";
  //let checkboxchecked = false;
  //if (checkbox1.checked === true) {
  //checkboxchecked = true;
  //} else {
  //checkbox1.parentElement.dataset.error =
  //"Vous devez accepter les conditions d'utilisations";
  //checkbox1.parentElement.dataset.errorVisible = "true";
  //}
  //alerte = "hello";
  //*******************************************/
  //MESSAGE DE VALIDATION
  //*******************************************/
  //const modalBody = document.querySelector(".modal-body");
  //console.log(modalBody);
  //modalBody.style.opacity = "0";
  const allIsOk = (currentValue) => {
    console.log("allIsOk");
    console.log({
      value: currentValue.value,
      checked: currentValue.checked,
      formValidate: currentValue.validity.valid,
    });
    return (
      currentValue.checked === true || currentValue.validity.valid === true
    );
  };
  console.log(arrayInputsAll[0].every(allIsOk));
  console.log(arrayInputsAll[1].some(allIsOk));
  if (
    arrayInputsAll[0].every(allIsOk) === true &&
    arrayInputsAll[1].some(allIsOk) === true
  ) {
    const byeInputs = document.querySelectorAll(".formData");
    const byeTxtLabel = document.querySelector(".text-label");
    const content = document.querySelector(".content");
    let newElt = document.createElement("div");
    byeInputs.forEach((item) => {
      item.style.opacity = "0";
      return;
    });
    byeTxtLabel.style.opacity = "0";
    content.appendChild(newElt);
    newElt.innerHTML =
      "<h3>Merci ! :D</br>Votre Réservation à bien été enregistré</h3>";
    newElt.classList.add("msgValide");
    document.querySelector(".btn-submit").setAttribute("disabled", "");
  }
};
