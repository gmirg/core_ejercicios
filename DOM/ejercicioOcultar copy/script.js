// // función que sirve para ocultar y mostrar
// function muestraOculta(num) {
//    var parrafo = document.getElementById("contenidos_" + num);
//    var enlace = document.getElementById("enlace_" + num);
//    if (parrafo.style.visibility == "" || parrafo.style.visibility == "visible") {
//        parrafo.style.visibility = "hidden";
//        enlace.innerText = "Mostrar contenido";
//    }
//    else {
//        parrafo.style.visibility = "visible";
//        enlace.innerText = "Ocultar contenido";
//    }
// }

// window.onload = () => {
//    var numEnlaces = document.getElementsByTagName("a").length;
//    for(let i=1; i <=numEnlaces; i++) {
//        document.getElementById("enlace_" + i).setAttribute("onclick", "muestraOculta("+ i +")");
//    }
// }

window.onload = () => {
   var numEnlaces = document.getElementsByTagName("a").length;
   for (let i = 1; i <= numEnlaces; i++) {
      document.getElementById("enlace_" + i).setAttribute("onclick", "muestraOculta(this)");
   }
}
function muestraOculta(objeto) {
// var parrafo = objeto.id;
// var numParrafo = parrafo.slice(-1);
var numParrafo = objeto.id[objeto.id.length-1];
var parrafoOcultar = document.getElementById("contenidos_" + numParrafo);
   if (objeto.innerText == "Ocultar contenidos") {
         objeto.innerText = "Mostrar contenidos";
         parrafoOcultar.style.visibility ="hidden";
   } else {
         objeto.innerText = "Ocultar contenidos";
         parrafoOcultar.style.visibility ="visible";
   }
}
