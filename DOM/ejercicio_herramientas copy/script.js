let enlaces = document.querySelector("a");
function calc_enlaces() {
    alert("Tiene " + enlaces.length + " enlaces");
}
function dir_penultimo_enlace() {
    alert("El penultimo enlace te dirige a " + enlaces[enlaces.length - 2].href);
}
function tercera() {
    var counter = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == "http://prueba/") {
            counter++;
        }
    }
    return alert("Numero de enlaces que enlazan a http://prueba: es: " + counter);
}
function link3o() {
    let parrafo = document.getElementsByTagName("p");
    let e_parrafo = parrafo[2].getElementsByTagName("a");
    alert("El tercer parrafo tiene " + e_parrafo.length + " enlaces");
}