console.log(document.title);
// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
function changeHeader() {
    let header2 = (document.querySelector('.infocard').parentNode).previousElementSibling;
    header2.innerText = ("Generasión 1 Pokimon");
}
changeHeader();

// Cambia el color de fondo de la primera generación de Pokimon.
function changeColor() {
    let bg_1gen = (document.querySelector('.infocard').parentNode);
    bg_1gen.style.background = ("#8fbc8f");
}
changeColor();
// Imprime por consola la URL de la página.
console.log(document.baseURI);
// Imprime por consola el dominio de la página.
console.log(document.domain);	
// Imprime todos los nodos de imagen.
// let nodes = document.querySelectorAll = (".img-fixed.img-sprite"); 
let nodes = document.getElementsByTagName("img")
console.log(nodes);
// Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"