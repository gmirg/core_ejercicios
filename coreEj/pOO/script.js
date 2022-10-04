class Rombo {
    constructor (dimension1, dimension2) {
        this.dimension1 = dimension1;
        this.dimension2 = dimension2;
    }
    // Get -> Crea un Atributo nuevo
    get altoAncho() {
        return "Dimensión 1 = " + this.dimension1 + "\n" + "Dimensión 2 = " + this.dimension2 + "\n" + rows;
    }
    //Set
    set altoAncho(dimensiones){
        this.dimension1 = dimensiones[0];
        this.ancho = dimensiones[1];
    }
    //Otro método
    calcArea () {
        return this.alto * this.ancho;
    }
}function draw() {
const dimension1 = 4
const dimension2 = 10
let spaces = "";
let stars = "";
let rows = "";
debugger;

for (let i = dimension1; i <= dimension2; i += 2) {
    let map = (dimension2 - i) / 2;
    for (let j = 0; j < map; j++) {
        spaces += "*";
    }
    for (let k = 0; k < i; k++) {
        stars += "+";
    }
    rows += spaces + stars + "\n";
    spaces = "";
    stars = "";
}
for (let i = dimension2 -2; i >= dimension1; i -= 2) {
    let map = (dimension2 - i) / 2;
    for (let j = 0; j < map; j++) {
        spaces += "*";
    }
    for (let k = 0; k < i; k++) {
        stars += "+";
    }
    rows += spaces + stars + "\n";
    spaces = "";
    stars = "";
}

}
const rombo_ej = new Rombo(4, 10);  