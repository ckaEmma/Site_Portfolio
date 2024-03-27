//Bouton menu burger
const toggle = document.querySelector('.toggle');
const toggleBout = document.querySelector('.toggle i');
const menuBas = document.querySelector('.menu_bas');

toggleBout.onclick = function(){
    menuBas.classList.toggle('open');
    const estOpen = menuBas.classList.contains('open');

    toggleBout.classList = estOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}


//Formulaire et vérification

const form = document.querySelector("form");
var nom = document.querySelector(".name").value;
var mail = document.querySelector(".email").value;
var message = document.querySelector(".message").value;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Condition où il ne se passe rien si on valide pas le formulaire
    if(!validerForm(form)) return;

    //Si le formulaire est validée, on envoie une alerte avec les infos saisies

    //l'affichage ne marche qu'après avoir rafraichi la page après la saisie des infos
    alert("Message bien envoyée par "+ nom+"\n "+ mail + " dont le message est " + message);
});

const validerForm = (form) => {
    let valid = true;
    //On vérifie si les champs sont vides
    let nom = form.querySelector(".name");
    let message = form.querySelector(".message");
    let email = form.querySelector(".email");

    if(nom.value === ""){
        giveError(nom, "Veuillez entrez votre nom");
        valid = false;
    }
    if(message.value === ""){
        giveError(message, "Veuillez entrez un message");
        valid = false;
    }

    let exprEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailValue = email.value;

    if(!exprEmail.test(emailValue)){
        giveError(email, "Veuillez entre un email valide");
        valid = false;
    }

    //on retourne vrai si valid est vrai

    if(valid === true){
        return true;
    }

};

const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
    //si le msg d'erreur était déjà là,on l'enlève
    let existeError = parentElement.querySelector(".err-msg");
    if(existeError){
        existeError.remove();
    }
    let error = document.createElement("span");
    error.textContent = message;
    error.classList.add("err-msg");
    parentElement.appendChild(error);
};

//On enlève les erreurs quand des champs sont validées

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

let champs = [ ... inputs, ... textareas];

champs.forEach((field) =>{
    field.addEventListener("input", () => {
        removeError(field);
    });
});

const removeError = (field) => {
    let parentElement = field.parentElement;
    parentElement.classList.remove("error");
    let error = parentElement.querySelector(".err-msg");
    if(error){
        error.remove();
    }
};
