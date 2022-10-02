crearPiramide() {
    let lineSpace = "";
    let lineStar = "";
    let lineComplete = "";
    let stars;
    dimension1 = 4;
    dimension2 = 10;
    let spaces;// este el de arriba Gerardo: Te lo explico después... es un lío...
    for (let i = dimension1; i <= dimension2; i += 2) {
        console.log("entra")
        console.log(dimension1) // 4
        console.log(dimension2) // 10

        stars = i;
        spaces = (dimension2 - stars) / 2;
        for (let j = 0; j < spaces; j++) { // me añade espacios de una línea
            lineSpace = lineSpace + " "; //En cada iteración del bucle suma un espacio. Antes de las estrellas, no entre.EL número es diferente
        }
        for (let k = 0; k < stars; k++) { //añade estrellas de una línea
            lineStar = lineStar + "*";
        }
        lineComplete = lineComplete + lineSpace + lineStar + "\n"; // espacios+estrellas \n salta de línea
        lineStar = ""; //Reinicio para la siguiente línea
        lineSpace = "";//Reinicio para la siguiente línea
    } //Este es el triángilo de abajo. 
    for (let i = dimension2 - 2; i >= dimension1; i -= 2) {
        stars = i;
        spaces = (dimension2 - stars) / 2; //Perfect
        for (let j = 0; j < spaces; j++) {
            lineSpace = lineSpace + " ";
        }
        for (let k = 0; k < stars; k++) {
            lineStar = lineStar + "*";
        }
        lineComplete = lineComplete + lineSpace + lineStar + "\n";
        lineStar = "";
        lineSpace = "";
    }
    return lineComplete;
}