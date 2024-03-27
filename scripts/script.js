const toggle = document.querySelector('.toggle');
const toggleBout = document.querySelector('.toggle i');
const menuBas = document.querySelector('.menu_bas');

toggleBout.onclick = function(){
    menuBas.classList.toggle('open');
    const estOpen = menuBas.classList.contains('open');

    toggleBout.classList = estOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}