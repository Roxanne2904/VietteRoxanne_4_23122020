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
const closeBtn = document.querySelector(".close");
const heroSection = document.querySelector(".hero-section");
const content = document.querySelector(".content");
const copyrights = document.querySelector(".copyrights");
const main = document.querySelector("#main");
const responsiveMargin = document.querySelector("#responsive-margin");
//margin de "2rem" placer grâce à un "id" sur la dernière checkbox [type="checkbox"] pour le responsive;

//*******************************************/
// LES FONCTIONS
//*******************************************/
//*******************************************/
//La fonction pour ouvrir la modal en version normal
function modalEvent() {
  modalBg.style.display = "block";
  modalBg.style.position = "fixed";
  modalBg.style.background = "rgba(26, 39, 156, 0.4)";
}
const isMobile = () => {
  return window.innerWidth < 600;
};
const isTablet = () => {
  return window.innerWidth < 800;
};
//*******************************************/
//La fonction pour afficher le contenue du responsive " version normal"
const NormalContent = () => {
  modalBg.style.position = "fixed";
  modalBg.style.background = "rgba(26, 39, 156, 0.4)";
  modalBg.style.overflow = "auto";
  content.style.maxWidth = "500px";
  content.style.margin = "5% auto";
  content.style.borderRadius = "10px";
  main.style.margin = "1px 20px 15px";
  copyrights.style.display = "block";
  responsiveMargin.style.marginBottom = "11px";
};
//*******************************************/
//La fonction pour afficher le contenue du responsive "version mobile"
const mobileContent = () => {
  modalBg.style.position = "absolute";
  modalBg.style.background = "transparent";
  modalBg.style.overflow = "visible";
  heroSection.style.display = "none";
  content.style.maxWidth = "inherit";
  content.style.margin = "0";
  content.style.borderRadius = "10px 10px 0 0";
  main.style.margin = "0";
  copyrights.style.display = "none";
  responsiveMargin.style.marginBottom = "2rem";
};
//*******************************************/
//la fonction pour organiser le responsive.
const isResize = () => {
  if (isMobile()) {
    mobileContent();
  } else if (isTablet()) {
    heroSection.style.display = "block";
    NormalContent();
  } else {
    heroSection.style.display = "grid";
    NormalContent();
  }
};
//*******************************************/
//La fonction pour fermer la modal.
const isClosed = () => {
  if (isMobile()) {
    copyrights.style.display = "block";
    heroSection.style.display = "block";
    // lors du click, si mobile, on applique ceci...;
  }
  if (modalBgOpen === false) {
    window.addEventListener("resize", () => {
      if (isMobile()) {
        heroSection.style.display = "block";
        copyrights.style.display = "block";
        //si la modal est fermer, lors du rezise, en version mobile, on applique ceci ...;
      }
    });
  }
  modalBg.style.display = "none";
  content.style.maxWidth = "500px";
};
//*******************************************/
// OUVRIR ET FERMER LA MODAL AVEC LE RESPONSIVE
//*******************************************/
//*******************************************/
// launch modal event = ouvrir le modal
let modalBgOpen = false; // on créer une variable pour définir si la modal est ouverte ou non
modalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalBgOpen = true; // lors du click, on la passe à 'true'
    if (!isMobile()) {
      modalEvent(); // ouverture de la modal, en version normal= ("not" !Mobile);
    } else {
      modalBg.style.display = "block";
      mobileContent(); // ouverture de la modal, en version mobile.
    }
    if (modalBgOpen === true) {
      // si la modal est ouverte, on applique un event resize;
      window.addEventListener("resize", () => isResize());
      // ici on applique la fonction "isResize" pour le responsive de la modal uniquement;
    }
  });
});
//*******************************************/
//close modal event = fermer la modal
closeBtn.addEventListener("click", (e) => {
  modalBgOpen = false; // on repasse la variable à 'false', on ferme la modal;
  isClosed();
});
//*******************************************/
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
//ARRAYS
//*******************************************/
const arrayInputsAll = [
  [first, last, email, birthdate, quantity, checkbox1],
  radiosArray,
];
console.log(arrayInputsAll);

const arrayInputsTxt = [first, last, email, birthdate, quantity]; //ARRAY DES INPUTS TXT
//*******************************************/
//*******************************************/
//CHANGEMENT DU MSG, LORS DU CHANGEMENT DU CONTENUE DE L'INPUT
//*******************************************/
arrayInputsTxt.forEach((elmt) => {
  elmt.addEventListener("change", () => {
    elmt.parentElement.dataset.errorVisible = "false";
  });
});
//*******************************************/
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
        "[ ! ] Commencez par une majuscule; des lettres uniquement.";
      arrayInputsAll[0][1].parentElement.dataset.error =
        "[ ! ] Le nom doit être entièrement en majuscule.";
      arrayInputsAll[0][2].parentElement.dataset.error =
        "[ ! ] Il faut rentrer une adresse e-mail valide.";
      arrayInputsAll[0][3].parentElement.dataset.error =
        "[ ! ] Veuillez indiquer votre date de naissance.";
      arrayInputsAll[0][4].parentElement.dataset.error =
        "[ ! ] Sélectionnez un chiffre ou un nombre entre 0 et 99.";
    } else {
      arrayInputsAll[0][i].parentElement.dataset.errorVisible = "false";
      arrayInputsAll[0][i].parentElement.dataset.error = "";
    }
    //*******************************************/
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
      arrayInputsAll[1][0].parentElement.dataset.error =
        "[ ! ] Veuillez choisir une ville.";
    }
    //*******************************************/
    //*******************************************/
    //CHECKBOX CHECK
    //*******************************************/
    arrayInputsAll[0][5].parentElement.dataset.errorVisible = "false";
    let checkboxchecked = false;
    if (arrayInputsAll[0][5].checked === true) {
      checkboxchecked = true;
    } else {
      arrayInputsAll[0][5].parentElement.dataset.error =
        "[ ! ] Vous devez accepter les conditions d'utilisations.";
      arrayInputsAll[0][5].parentElement.dataset.errorVisible = "true";
    }
  }
  //*******************************************/
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
  //MESSAGE DE VALIDATION
  //*******************************************/
  //a).La fonction
  //*******************************************/
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
  // b).La condition
  //*******************************************/
  if (
    arrayInputsAll[0].every(allIsOk) === true &&
    arrayInputsAll[1].some(allIsOk) === true
  ) {
    const byeInputs = document.querySelectorAll(".formData"); //tous les inputs avec .formData
    const byeTxtLabel = document.querySelector(".text-label"); // le paragraphe qui contient "Quelles villes"
    let newElt = document.createElement("div");
    const btnSubmit = document.querySelector(".btn-submit");
    byeInputs.forEach((item) => {
      item.style.opacity = "0";
    });
    byeTxtLabel.style.opacity = "0";
    content.appendChild(newElt);
    newElt.innerHTML =
      "<h3><span>Merci ! :D</span></br>Votre réservation a bien été réceptionnée</h3>";
    newElt.classList.add("msgValide");
    btnSubmit.value = "fermer";
    btnSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      modalBgOpen = false;
      isClosed();
    });
  }
};
