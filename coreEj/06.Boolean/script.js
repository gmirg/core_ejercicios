// Utilizando objetos Boolean realiza un programa que indique si 
// un array de 6 elementos solicitado al usuario se encuentra ordenado 
// de la siguiente forma (e1 > e3, e2 < e4 y e5 = e6)
function comprobarArr(array) {
    array = prompt("Introduce 6 elementos separados por comas").split(",");
    let x = Boolean(array[0] > array[2]);
    let y = Boolean(array[1] < array[3]);
    let z = Boolean(array[4] == array[5]);
    (x && y && z) ? alert(" Cumple las condiciones") : alert(" No cumple las condiciones");
}
comprobarArr();
// array([4,2,3,4,6,6]);
// array([1,2,3,4,5,6]);